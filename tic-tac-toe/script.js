let boxes=document.querySelectorAll(".button");
let reset=document.querySelector(".reset");

let turn0=true;

const w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6]];

let n=document.querySelector(".new");
let pi=document.querySelector("#mes");
let wb=document.querySelector(".msg");





const disb = ()=>{
    for(let b of boxes){
        b.disabled=true;
    }
}

const resetg = () => {
    turn0=true;
    enab();
            wb.classList.add("hide");
}



const enab = ()=>{
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";

    }
}


boxes.forEach( (box) => {

    box.addEventListener("click",()=>
        {
            console.log("box is selected");
            
if(turn0){
    box.innerText="O";
    turn0=false;

}
else {    box.innerText="X";
    box.style.color="blue";
    turn0=true;

}
box.disabled=true;



check();

    });

});



const showw = (w)=>{

pi.innerText=`Congratulations ! winner is ${w} `;

wb.classList.remove("hide");
disb();

}

const check = ()=>{

    for(let p of w){
     let p1=boxes[p[0]].innerText;
     let p2=boxes[p[1]].innerText;
     let p3=boxes[p[2]].innerText;

     if(p1!="" && p2!="" && p3!=""){
        if(p1==p2 && p2==p3){
            console.log("winner",p1);
            showw(p1);
        }}   }
}




reset.addEventListener("click",resetg);
n.addEventListener("click",resetg);