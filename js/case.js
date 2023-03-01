function getUpdateBtnCase(isIncrease){
    const btnCaseValu = document.getElementById("btn_case_input");
    const btnCaseStringValu = btnCaseValu.value;
    const btnCaseNumber = parseInt(btnCaseStringValu);
    
    let updetBtnMinusCaseNamber;
     if(isIncrease){
        updetBtnMinusCaseNamber = btnCaseNumber +1
     }else{
       updetBtnMinusCaseNamber = btnCaseNumber -1
     } 
    btnCaseValu.value = updetBtnMinusCaseNamber;
 
    // prise
   
    const totalPrise = updetBtnMinusCaseNamber * 59;
    setInnar("case_prise" , totalPrise)
   
 }
 
 function setInnar(id , valu){
    const prise = document.getElementById(id);
    prise.innerText = valu;
 }
 
 
 document.getElementById("btn_case_plus")
 .addEventListener("click",function(){
    getUpdateBtnCase(true);
    calculateSubTotal()
    
 })
 
 
 document.getElementById("btn_case_minus")
 .addEventListener("click",function(){
    getUpdateBtnCase(false);
    calculateSubTotal()
 
    
 })
 
 
 
 
 
 
 
 
 
 