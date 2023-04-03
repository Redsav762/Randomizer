let Label =document.getElementById("random-title")
let Button = document.getElementById("btn")
let Firstnum = document.getElementById("input1").value
let Secondnum = document.getElementById("input2").value
Button.onclick=()=>{
    let Firstnum = document.getElementById("input1").value
    let Secondnum = document.getElementById("input2").value
Label.innerHTML=Math.round (Math.random() * (Secondnum - Firstnum) + Firstnum)
} 