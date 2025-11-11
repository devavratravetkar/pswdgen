const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let generateBtn = document.getElementById("generate-btn")
let passOneEl = document.getElementById("pswd1")
let passTwoEl = document.getElementById("pswd2")
let passLengthEl = document.getElementById("pass-length-input")
let numSymToggle = document.getElementById("num-sym-toggle")
console.log(numSymToggle.checked)

let passOne = "passone"
let passTwo = "passtwo"
let passLength = Number(passLengthEl.value)
// console.log(passLength)

let toggleNumSym = numSymToggle.checked

function generatePassword() {
    let randomPass = ""
    passLength = Number(passLengthEl.value)
    toggleNumSym = numSymToggle.checked
    let charRange = 0
    if(toggleNumSym){
        charRange = characters.length
    } else {
        charRange = characters.indexOf("0")
    }
    
    
    for(let i = 0; i < passLength; i++){
        let randCharIndex = Math.floor(Math.random() * charRange)
        randomPass += characters[randCharIndex]
    }
    
    return randomPass
}

generateBtn.addEventListener('click', function(){
    // console.log("Generate password button is clicked!")
    passOne = generatePassword()
    passTwo = generatePassword()
    passOneEl.textContent = passOne
    passTwoEl.textContent = passTwo
    
})

passOneEl.addEventListener('click', function(){
    //copy to clipboard: passOneEl.textContent
    // console.log(passOneEl.textContent)
    // navigator.clipboard.writeText(passOneEl.textContent)
    passOneEl.focus()
    passOneEl.select()
    document.execCommand('copy');
    let checkCopy = document.execCommand('copy');
    console.log(passOneEl.textContent, "and", checkCopy)
})

passTwoEl.addEventListener('click', function(){
    //copy to clipboard: passOneEl.textContent
    passTwoEl.focus()
    passTwoEl.select()
    document.execCommand('copy');
    let checkCopy = document.execCommand('copy');
    console.log(passTwoEl.textContent, "and", checkCopy)
    // navigator.clipboard.writeText(passOneEl.textContent)
})