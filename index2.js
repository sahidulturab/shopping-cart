const caseQuantity=parseFloat(document.getElementById("case-quantity").value)
   const caseNewQuantity=caseQuantity-1;
   document.getElementById("case-quantity").value=caseNewQuantity

   const caseTotal=caseNewQuantity*59;
   document.getElementById("case-price").innerText="$"+ caseTotal;


   // PHONE EVENT HANDLER

document.getElementById("phone-increase").addEventListener("click",function(){
    const phoneQuantity= parseFloat(document.getElementById("phone-quantity").value) 
    phoneNewQuantity= phoneQuantity+1;
    document.getElementById("phone-quantity").value=phoneNewQuantity
    const phoneTotal=phoneNewQuantity*1219;
    document.getElementById("phone-price").innerText=phoneTotal;
  
  })
  document.getElementById("phone-decrease").addEventListener("click",function(){
      const phoneQuantity= parseFloat(document.getElementById("phone-quantity").value) 
      phoneNewQuantity= phoneQuantity-1;
      document.getElementById("phone-quantity").value=phoneNewQuantity
      const phoneTotal=phoneNewQuantity*1219;
      document.getElementById("phone-price").innerText=phoneTotal;
    
    })
// CASE EVENT FUCNTION
    function handleProductChange (isIncrease){
        const caseQuantity=parseFloat(document.getElementById("case-quantity").value)
    
        let caseNewQuantity=caseQuantity;
    
        if(isIncrease==true){
            caseNewQuantity=caseQuantity+1;
        }
        else if(isIncrease==false && caseQuantity>0){
            caseNewQuantity=caseQuantity-1;
        }
        
        document.getElementById("case-quantity").value=caseNewQuantity
     
        const caseTotal=caseNewQuantity*59;
        document.getElementById("case-price").innerText="$"+ caseTotal;
    }
    
    function calculateTotal(){
        const phoneQuantity=parseInt(document.getElementById("phone-quantity").value) 
        const caseQuantity=parseInt(document.getElementById("case-quantity").value)
        const totalPrice= phoneQuantity*1219+caseQuantity*59;
 
        document.getElementById("totalPrice").innerText="$"+ totalPrice
     }