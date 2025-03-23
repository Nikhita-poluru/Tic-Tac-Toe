let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newm =document.querySelector("#new");
let msg=document.querySelector(".msg");
let mmsg=document.querySelector("#msgid");

let turn= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if (turn){
            box.innerText="X";
            turn = false;
        }else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        check();
    });
});
const disableBox=()=>{
    for(let i of boxes){
        i.disable=true;
        i.innerText="";
    }
}
const showWinner=(winner)=>{
    mmsg.innerText=`Congratulations, winner is ${winner}`;
    msg.classList.remove("hide");
    disableBox();
}
const check=()=>{
    for(let i of winPatterns){
        let p1=boxes[i[0]].innerText;
        let p2=boxes[i[1]].innerText;
        let p3=boxes[i[2]].innerText;
        if(p1!=""&& p2!=""&& p3!=""){
            if(p1===p2&&p2===p3){
                console.log("Winner",p1);
                showWinner(p1);
            }
        }
    }
}
const reset1=()=>{
    turn=true;
    enableBox();
    msg.classList.add("hide");
}
const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

newm.addEventListener("click",reset1);
reset.addEventListener("click",reset1);