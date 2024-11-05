let container = document.querySelector('.container');
let symbol = "X";


createGrid()
let allBox = document.querySelectorAll('.box');
allBox.forEach(box => box.addEventListener('click', insertSymbol));

let lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function createGrid(){
    let text = "";
    for(let i = 0; i < 9; i++){
        text += '<div class="box"></div>';
    }
    container.innerHTML = text;
}

function insertSymbol(){
    this.innerHTML = symbol;
    let check = checkLines()
    if(check){
        return
    }
    allBox.forEach(box => box.removeEventListener('click', insertSymbol));
    computerMove()
    for(let i = 0; i < allBox.length; i++){
        if(allBox[i].innerHTML === ""){
            allBox[i].addEventListener('click',insertSymbol)
        }            
    }
}

function computerMove(){
    let emptyBoxes = [];
    let rand;
    let test;
    for(let i = 0; i < allBox.length; i++){
        if(allBox[i].innerHTML === ""){
            test = allBox[i].innerHTML
        }            
    }
    if(test === ""){
        setTimeout(move, 1000)
        function move(){
            for(let i = 0; i < allBox.length; i++){
                if(allBox[i].innerHTML === ""){
                    emptyBoxes.push(i)
                }            
            }
            rand = Math.floor(Math.random()*emptyBoxes.length)
            allBox[emptyBoxes[rand]].innerHTML = "O";
            checkLines()
        }
    }

}

function checkLines(){
    let stopG;
    lines.forEach(line => {
        let box1 = allBox[line[0]];
        let box2 = allBox[line[1]];
        let box3 = allBox[line[2]];

       if(box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML && box1.innerHTML !== ""){
        box1.style.backgroundColor = "green";
        box2.style.backgroundColor = "green";
        box3.style.backgroundColor = "green";
        stopG = stopGame()
       }
    })
    if(stopG){
        return true
    }
}

function stopGame(){
    allBox.forEach(box => box.removeEventListener('click', insertSymbol));
    return true
}
