let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#rstbtn");
let newbtn = document.querySelector("#newbtn");
let message = document.querySelector(".message");
let mess = document.querySelector("#mess");

let turn0 = true;
let Winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>
{
    turn0 = true;
    enableboxes();
    message.classList.add("hide");
}
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turn0)
        {box.innerText = "O";
         turn0 = false;
        }
        else
        {
         box.innerText = "X";
         turn0 = true;
        }
        box.disabled = true;
        
        checkwinner();
    });
});

const disboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const enableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
} 

const showWinner = (winner) =>
{
    mess.innerText = `!! Congratulations !! The winner is ${winner} `;
    message.classList.remove("hide");
    disboxes(); 
}

const checkwinner = () =>
    {
        for(let pattern of Winpattern)
        {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != "")
            {
                if(pos1 === pos2 && pos2 === pos3)
                {
                    console.log("Winner",pos1);
                    showWinner(pos1);
                }
            }
        }
    };

    newbtn.addEventListener("click", resetGame);
    resbtn.addEventListener("click", resetGame);