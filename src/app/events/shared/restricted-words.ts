import { FormControl } from "@angular/forms";

export function restrictedWords(words:string[]){
    return (control:FormControl) =>{
        if(!words) return null
        let invalidWords = words
            .map(word=>control.value.includes(word)? word:null)
            .filter(word=>word != null);
        return invalidWords && invalidWords.length > 0 ? 
            {'restrictedWords':invalidWords.join(', ')} 
            : null

    }
}