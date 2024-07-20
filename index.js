// Simple password generator 

function genPass(){
const characters = "A7j2^B!9%o(mz3F8L@D4p&5xG#XyJ)C-wU0+KQ6ZgT^lR?bN*Vf"

const passwordLength = document.getElementById("userLength").value;

let password = "";

for (let i = 0; i < passwordLength; i++) {

    let randomIndex = Math.floor(Math.random() * passwordLength);
    let EachRandomLetter = characters.charAt(randomIndex);
    password = password + EachRandomLetter;
    // console.log(characters.charAt)
    // console.log(randomIndex)
    // console.log(EachRandomLetter)
}

document.getElementById("passwordgen").textContent = password;
console.log(password);

}
