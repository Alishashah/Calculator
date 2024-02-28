let string=""
buttons=document.querySelectorAll(".button")
input=document.querySelector("input")

buttons.forEach((button) => {
//   console.log(button)
  button.addEventListener("click",(e)=>{
    //  console.log(e.target)

     if(e.target.innerHTML=="="){
        string=eval(string)
        input.value=string
     }
     else if(e.target.innerHTML=="AC"){
        string=""
        input.value=string
     }
     else if(e.target.innerHTML=="DEL"){
        string=string.slice(0,-1)
        input.value=string
     }
     else if(e.target.innerHTML=="sqrt"){
       string=Math.sqrt(string)
       input.value=string
     }
     else if(e.target.innerHTML=="sq"){
       string=string*string
       input.value=string
     }
     else{
        string = string+e.target.innerHTML
        input.value=string
     }

  })
});