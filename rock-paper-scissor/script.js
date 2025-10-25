let us=0;
let cs=0;


let usp=document.querySelector("#users");
let csp=document.querySelector("#comps");




let choices=document.querySelectorAll(".choice");

let m=document.querySelector("#msgp");

const gcc = ()=>{
    let o=["rock","paper","scissor"];
   let x= Math.floor(Math.random()*3);

return o[x];
};



const show = (uw )=>{

if(uw){
    us++;
    usp.innerText=us;
    console.log("u win");
    m.innerText="u win";
    m.style.backgroundColor="green";
}

else {
    cs++;
    csp.innerText=cs;

  console.log("u loose");
     m.innerText="u loose";
      m.style.backgroundColor="red";
}


};


const pg = (a)=> {
   console.log(a);
   let g=gcc();
   console.log(g);
if(a===g){
    console.log("game was draw");
       m.innerText="game was draw";
          m.style.backgroundColor="black";
}else {
let uw=true;
if(a==="rock"){

uw=g=== "paper"? false:true;

}
else if(a==="paper"){
   uw= g=== "scissor"? false:true; 
}

else {
    uw=g=== "rock"? false:true;
}


show(uw);



}


};






choices.forEach((c) => {
c.addEventListener("click", ()=> {
let a=c.getAttribute("id");
console.log("choice was clicked",a);

pg(a);

})}
)