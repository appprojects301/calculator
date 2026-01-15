let isOn = true ;


let calculator = document.querySelector(".calculator");
let input = document.getElementById("input");
let buttons = document.querySelectorAll(".button");
let inp = document.querySelector("input");
inp.style.color = "white";
function trunOf(){
    isOn = false ;
    inp.value = ' ';
}
function trunOn(){
    isOn = true ;
    inp.value = '';
       
}
// 
let massage;
function massageContant(btn){
    if(btn === "DEL"){
        inp.value = inp.value.slice(0 ,-1);
        return;
    }else if(btn === "OFF"){
        trunOf();
        return;
    }else if(btn === "ON"){
        trunOn();
        return;
    }else if(btn === "="){
     inp.value = calculate(inp.value);
      return ;
    }else{
        inp.value += btn ;
    }
    
 
}
function calculate(btn){
    let result = eval(btn);
    return result ;
}
let arr = Array.from(buttons);
arr.forEach(button =>{

    button.addEventListener("click" , (evt)=>{
    // console.log(evt.target.innerText);
    if (evt.target === calculator) return;
    const btn = evt.target.innerText;
    if(btn === "ON"){
        trunOn();
    }
    
    if(isOn){
    massageContant(btn);
    }

    
    
    
})

});
