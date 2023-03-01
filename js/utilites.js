function calculateSubTotal(){
    const case_prise = getPriseInnar("case_prise");
    const fon_prise = getPriseInnar("fon_prise");
    const TotalSubPrise = case_prise + fon_prise;

    setInnar("Subtotal", TotalSubPrise)

   const taxAmountString = (TotalSubPrise *0.1).toFixed(2);
   const taxAmount = parseFloat(taxAmountString)

    setInnar("Tax", taxAmount);
    const finalTotalPrise = TotalSubPrise + taxAmount;
    setInnar("Total", finalTotalPrise);


    

 }
 function getPriseInnar(id){
    const Subtotal = document.getElementById(id);
    const SubtotalInnar = Subtotal.innerText;
    const SubtotalInnarNumber = parseInt(SubtotalInnar);
    return SubtotalInnarNumber;
 }


 