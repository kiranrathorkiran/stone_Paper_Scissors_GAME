let gamechoice=document.querySelector(".gamechoice")
let rock=document.querySelector("#rock")
let box=document.querySelector(".box")
let input1=document.querySelector("#inut1")
let input2=document.querySelector("#inut2")
var conputercunt=0
 var usercunt=0
 input1.innerHTML = usercunt
 input2.innerHTML = conputercunt
const paper=document.querySelector("#paper")

const scissor=document.querySelector("#scissor")

var check;
paper.addEventListener("dblclick",function()
{
check="1"
winnre()
})

scissor.addEventListener("dblclick",function()
{

check="2"
winnre()
})

rock.addEventListener("dblclick",function()
{
check="3"
winnre()
})

// -------------------------
function winnre(){

    computer=Math.floor((Math.random()*10)/3.333)+1;
console.log(computer);

if(check==1)
{
    if(computer==2 )
    {
      
        box.innerHTML="computer is winnre!!!!"
        conputercunt++
    }
    else if(computer==3)
    {
      
       box.innerHTML="you are winnre!!!!"
       usercunt++
    }
    else{
        
        box.innerHTML="those are same"
    }
}
else if(check==2)
{
  
    if(computer==3)
    {
       
        box.innerHTML="computer is winnre!!!!"
        conputercunt++
    }
    else if(computer==1)
    {
       
       box.innerHTML="you are winnre!!!!"
       usercunt++
    }
    else{
       
        box.innerHTML="those are same"
    }

}
else{
    
    if(computer==1 )
    {
       
        box.innerHTML="computer is winnre!!!!"
        conputercunt++
    }
    else if(computer==2)
    {
    
       box.innerHTML="you are winnre!!!!"
       usercunt++
    }
    else{
        
        box.innerHTML="those are same"
    }
}

input1.innerHTML = usercunt
input2.innerHTML = conputercunt
}




