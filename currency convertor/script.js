const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

  const dropdowns=document.querySelectorAll(".dropdown select");

  const b=document.querySelector("form button");
let fcu=document.querySelector(".from select");
let tcu=document.querySelector(".to select");

const cflag= (e) =>{
let c=e.value;
let cc=countryList[c];
let ns=`https://flagsapi.com/${cc}/flat/64.png`;
let r=e.parentElement.querySelector("img");
r.src=ns;





};

let m=document.querySelector(".msg");



b.addEventListener("click",   async (e)=>{
e.preventDefault();


let a=document.querySelector("form input");
let av=a.value;
console.log(av);
if(av==="" || av<0){
    av=1;
    a.value="1";
}

const u=`${url}/${fcu.value.toLowerCase()}/${tcu.value.toLowerCase()}.json`;

let re= await fetch(u);


let d= await re.json();
let er=d[tcu.value.toLowerCase()];
let fam=av*er;
m.innerText=`${av}${fcu.value}=${fam}${tcu.value}`;


}             );















  for(let s of dropdowns){
    for(let c in countryList){
        let n=document.createElement("option");
        n.innerText=c;
        n.value=c;
        if( c==="USD" && s.name==="from"){
n.selected="selected";
        }
         if( c==="INR" && s.name==="to"){
n.selected="selected";
        }
        s.append(n);
    }

s.addEventListener("change",(e)=>{
    cflag(e.target);
})


  }


  