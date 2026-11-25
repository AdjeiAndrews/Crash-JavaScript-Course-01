const inputTextArea = document.getElementById("text-input");
const charCount = document.getElementById("character-count");
const wordsCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", ()=>{


    // char count
    charCount.textContent = inputTextArea.value.length;


    // words count
    const text = inputTextArea.value.trim();
    const wordArray = text.split(/\s+/);

    let wordCountValue = 0;
    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i] != ""){
            wordCountValue++;
        }
    }
    wordsCount.textContent = wordCountValue;
})