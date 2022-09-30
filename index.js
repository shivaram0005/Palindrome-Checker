
let palindromeResult = document.querySelector(".palindromeResult");


let checkButton = document.querySelector(".checkButton");
checkButton.addEventListener("click", () => {
    let inputValue = document.querySelector(".inputValue").value;
    let myRevVal = inputValue.toString().split("").reverse().join("");
    let inputStringValue = inputValue.toString();
    if(inputStringValue == myRevVal){
        palindromeResult.innerHTML = "It is a palindrome";
    }
    else{
        palindromeResult.innerHTML = "It is not  a palindrome";
    }
})