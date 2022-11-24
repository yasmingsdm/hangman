let word = 'APPLE'

// Hide the word: 
document.getElementById('word').innerHTML = word
document.getElementById('word').style.display = 'none'

// Check how many letters and write the _ :
let underscore = word.length

switch (underscore){
    case '1':
        document.getElementById('underscore').innerHTML = '_';
        break;
    case '2':
        document.getElementById('underscore').innerHTML = '_ _';
        break;
    case '3':
        document.getElementById('underscore').innerHTML = '_ _ _';
        break;
    case '4':
        document.getElementById('underscore').innerHTML = '_ _ _ _';
        break;
    case '5':
        document.getElementById('underscore').innerHTML = '_ _ _ _ _';
        break;
    case '6':
        document.getElementById('underscore').innerHTML = '_ _ _ _ _ _';
        break;
    default:
    alert('This word is too big');
    break;
}

function tryLetter(){
    //Save and transform to upper case the letter the user wrote:
    let letter = document.getElementById('letter').value
    let LETTER = letter.toUpperCase()

    //Check if the letter is on the word:
    let error = 0
    
    for (let i=0; i<word.length; i++){
        if (word[i] === LETTER){
            document.getElementById('word').style.display = 'block'
        } else {
            error++
        }
    }
//console.log(error)
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