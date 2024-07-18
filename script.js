let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let passBtn = document.getElementById('passBtn');
let copyPass = document.getElementById('copyPass');

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

passBtn.addEventListener('click', () => {
  passBox.value = generatePassword();
})

let upperKase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerKase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "~!@#$%^&*";
function generatePassword() {
  let genPassword = "";
  let allKase = "";

  allKase += lowercase.checked ? lowerKase : "";
  allKase += uppercase.checked ? upperKase : "";
  allKase += numbers.checked ? number : "";
  allKase += symbols.checked ? symbol : "";

  if (allKase == "" || allKase.length == 0) {
    return genPassword;
  }


  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allKase.charAt(Math.floor(Math.random() * allKase.length));
    i++;
  }

  return genPassword;
}

copyPass.addEventListener('click', () => {
  if(passBox.value != "" || passBox.value.length >=1){
  navigator.clipboard.writeText(passBox.value);
  copyPass.innerText = "check";
  copyPass.title = "Password Copied";

  setTimeout(()=>{
  copyPass.innerHTML = "content_copy";
  copyPass.title = "";
  }, 2000)
  }
});