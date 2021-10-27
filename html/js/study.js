
test();


function test(){
    const numbers = 1000;
    let num1 = 10;
    let num2 = 20;
    var num3 = 30;
    let num4 = 40;
    console.log(num)
    var num;
    console.log(num1);
    console.log(num2);
    console.log(num3);
    let num6 = 400;
    console.log(num4);
    console.log('5번째' + num5);
    var num5 = 50;
}

var num = 10;
var num2 = 20;
var sum = function (a, b) {
    return a + b;
}

console.log(sum(num,num2));

const name_text = document.querySelector('#name');
const submit_button = document.querySelector(".submit_button");

submit_button.onclick = () => {
    alert(name_text.value);
}

var names = function(a,b){return a+b} 
console.log(names('김','준일'));

var namess = (a,b) => {return a+b}
var namess = (a,b) => a+b
var namesss = a => a+'준일'
console.log(namess('김','준일'));
console.log(namesss('김'));

const h1Tag = document.createElement('h1');
const textNode = document.createTextNode('노드 추가');
const h1TagClass = document.createAttribute('class');
const h1TagValue = document.createAttribute('value');
h1Tag.setAttributeNode(h1TagClass);
h1Tag.setAttributeNode(h1TagValue);
h1Tag.appendChild(textNode);

console.log(h1Tag.value);

const main = document.querySelector('.main');
main.appendChild(h1Tag);

const nametext = document.querySelector('.nametext');
const nametextParent = nametext.parentNode;
nametextParent.removeChild(nametext);
