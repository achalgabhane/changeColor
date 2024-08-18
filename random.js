let colorContEl = document.getElementById("colorCont");

let colorArr = ["red","green","grey","purple","white","yellow","pink","black","lightgrey"];
let lenOfArr = colorArr.length;


function onChangeColor(){
let randomNumber = Math.ceil(Math.random() * lenOfArr);
console.log(randomNumber);

colorContEl.style.backgroundColor = colorArr[randomNumber];

}