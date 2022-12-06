let word = 'APPLE'
//Split the word into letters:
let lettersOfTheWord = word.split('')

// Hide the word: 
document.getElementById('word').innerHTML = lettersOfTheWord
document.getElementById('word').style.display = 'none'

let underscore = document.getElementById('underscore')
const start = ()=>{
// Check how many letters and write the _ :

for (let i=0; i<lettersOfTheWord.length; i++){
     underscore.innerHTML += '<div id="underscore' + i + '">   _   </div>';
}

}
function tryLetter(){
    //Save and transform to upper case the letter the user wrote:
    let letter = document.getElementById('letter').value
    let LETTER = letter.toUpperCase()

    //Check if the letter is on the word:
    let error = 0
    
    for (let i=0; i<lettersOfTheWord.length; i++){
        if (lettersOfTheWord[i] === LETTER){
            document.getElementById('underscore-i').style.display = 'block'
        } else {
            error++
        }
    }
console.log(error)
    // Mark errors:

    if (error == 1){
        document.getElementById('circle1').style.color = 'purple'
    } else if(error == 2){
        document.getElementById('circle2').style.color = 'purple'
    }else if(error == 3){
        document.getElementById('circle3').style.color = 'purple'
    }else if(error == 4){
        document.getElementById('circle4').style.color = 'purple'
    }else if(error == 5){
        document.getElementById('circle5').style.color = 'purple'
    }else if (error == 6){
        document.getElementById('lostImg').style.display = 'block'
        document.getElementById('lostP').style.display= 'block'
    }
}

// Play Again:

document.getElementById('playAgain').onclick = ()=>{
    location.reload()
}