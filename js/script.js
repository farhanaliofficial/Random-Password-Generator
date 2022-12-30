/*
GitHub: @farhanaliofficial
Date and Time: 12/30/2022 12:18 PM
*/
const generateBtn = document.querySelector(".generate-btn"),
passwordInput = document.querySelector(".password-input"),
copyBtn = document.querySelector(".copy-btn");

const generatePassword = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$_&-+()?!;:*/[]{}\=%^~¥¢£×÷π√<>%©®';
  let password = '';
  
  for (let i = 0; i < 20; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);
generatePassword();


copyBtn.addEventListener("click", () => {
	copyBtn.src = "images/check.svg";
	passwordInput.select()
	document.execCommand("copy");
	setTimeout(() => {
        copyBtn.src = "images/copy.svg";
    }, 1000);
});
