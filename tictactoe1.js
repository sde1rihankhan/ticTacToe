let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector(".ResetBtn");
let NewGamebtn = document.querySelector(".new-btn");
let Messg = document.querySelector(".Msg1");
let Msg = document.querySelector(".Msg");

let turn0 = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let ResetGame = () => {
    turn0 = true
    enableBoxes()
    Messg.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O"
            turn0 = false
            box.style.color = "blue"
        }else{
            box.innerText= "X"
            turn0 = true
            box.style.color = "green"
        }
        box.disabled = true
        checkWinner()
    })
})

let disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

let showWinner = (winner)=>{
    Msg.innerText =  `Congratulations winner is ${winner}`
    Messg.classList.remove("hide")
    disableBoxes();
}

let checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
           if( pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
           }
        }
    }
}

NewGamebtn.addEventListener("click", ResetGame)
ResetBtn.addEventListener("click", ResetGame)