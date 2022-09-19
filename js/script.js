const body = document.querySelector("body");
const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");
const result = document.querySelector(".result");
const buttons = document.querySelector(".buttons");
const zero = document.getElementsByClassName("zero");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  container.classList.toggle("active");
  result.classList.toggle("active");
  buttons.classList.toggle("active");
  zero.classList.toggle("active");
});

let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let total = document.querySelector("#total");
let operationButttons = document.querySelectorAll(".calc-action.btn");
let datadelete = document.querySelector(".delete");

function display(num) {
      if(resultBox.innerHTML == '0'){
          resultBox.innerHTML = ""
      }
     resultBox.innerHTML += num

//   resultBox.innerHTML === '0'
//     ? (resultBox.innerHTML = "")
//     : (resultBox.innerHTML += num);

  // console.log(a)
}

function solve() {
  let x = document.querySelector("#result-box");
  let y = eval(x.innerHTML);
  document.querySelector("#result-box").innerHTML = y;
  return y;
}

function Clear() {
  resultBox.innerHTML = "";
}

function del(){
   b = resultBox.innerHTML = resultBox.innerHTML.slice(0,-1);
   console.log(b)
    // console.log(resultBox.innerHTML)
}

// localStorage

function addToLocalStorage(id, value)




// let btnSpread = [...btns];
// let allBtnSpread = [...allBtns];

// btnSpread.forEach((button, i) =>{
//     button.addEventListener('click', () =>{
//         if(resultBox.innerHTML == '0'){
//             resultBox.innerHTML = "";
//         }

//         let value = btns[i].innerHTML;
//         resultBox.innerHTML += value;

//     });
// });

// function evaluate(fn){
//     return new Function('return ' + fn)()
// };

// total.addEventListener('click', ()=> {
//     let allInputs = resultBox.innerHTML;
//     resultBox.innerHTML = evaluate(allInputs);

//     console.log(evaluate(allInputs));
// })

// clearBtn.addEventListener('click', ()=>{
//     resultBox.innerHTML = '0'
// });
