let itemDiv = document.querySelector(".itemDiv");
let gamebtn = document.querySelector(".playGame");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let errorMsg = document.getElementById("error-msg")

let turn = true;

input1.value = ""
input2.value = ""

gamebtn.addEventListener("click",()=>{
    let name1 = input1.value.trim();
    let name2 = input1.value.trim();

    // errorMsg.textContent = ""

    if(name1 === "" || name2 === ""){
       errorMsg.textContent = "Dono player ke naam bharna zaroori hai."
        // return;
    }

    if(name1 === name1){
        errorMsg.textContent = "Player ke naam alag hone chahiye."
        // return;
    }

    console.log(input1.value, input2.value);

    if(input1.value!== ""&&input2.value!==""&&input1.value!==input2.value){
        window.location.href = "http://127.0.0.1:5501/ticTacToe/TicTacToe.html"
    }
})