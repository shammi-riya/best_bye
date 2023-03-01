function getUpdateInputValu(isIncreaseTrue){
    const inputValu = document.getElementById("fon_plus_input_feild");
    const StringInputValu = inputValu.value;
    const inputNumberValu = parseInt(StringInputValu);
   let updateNumber;
 
    if(isIncreaseTrue){
      updateNumber = inputNumberValu +1;
    }else{
     updateNumber = inputNumberValu -1
    }
 
    inputValu.value = updateNumber;
    const totalPrise = updateNumber * 1219;
    setText("fon_prise",totalPrise)
 
 }
 
 function setText(id,valu){
     const fonPrise = document.getElementById(id);
     fonPrise.innerText = valu;
 
 }
 
 
 document.getElementById("fon_plus_btn")
 .addEventListener("click" ,function(){
     getUpdateInputValu(true)
     calculateSubTotal()
 })
 
 
 
 
 document.getElementById("fon_minus_btn")
 .addEventListener("click" ,function(){
     getUpdateInputValu(false)
     calculateSubTotal()
 })