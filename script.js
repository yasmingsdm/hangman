const words = [
    APPLE,
    ORANGE
]

//Save and transform to upper case the letter the user wrote:
function tryLetter(){
    let letter = document.getElementById('letter').value
    let LETTER = letter.toUpperCase()
}

//Write the letter if correct, mark as a mistake if wrong:
for(let i=0; i<words.length; i++){
    if (LETTER === words[1][i]) {
        return LETTER
    } else {
        if (document.getElementById('circle1').style.color === whitesmoke){
            document.getElementById('circle1').style.color = purple
        } else if(document.getElementById('circle2').style.color === whitesmoke){
            document.getElementById('circle2').style.color = purple
        }else if(document.getElementById('circle3').style.color === whitesmoke){
            document.getElementById('circle3').style.color = purple
        }else if(document.getElementById('circle4').style.color === whitesmoke){
            document.getElementById('circle4').style.color = purple
        }else if(document.getElementById('circle5').style.color === whitesmoke){
            document.getElementById('circle5').style.color = purple
        }else if (document.getElementById('circle5').style.color === purple){
            document.getElementById('lostImg').style.display = block
            document.getElementById('lostP').style.display=block
        }
    }
}