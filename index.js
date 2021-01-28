// CASE EVENT HANDLER
document.getElementById('case-increase').addEventListener('click',function() {
    handleProductChange("case",true)
})

document.getElementById("case-decrease").addEventListener("click",function(){
    handleProductChange("case",false);
}) 
// PHONE EVENT HANDLER

document.getElementById("phone-increase").addEventListener("click",function(){
    handleProductChange("phone",true);
})
document.getElementById("phone-decrease").addEventListener("click",function(){
    handleProductChange("phone",false);
  
  })


function handleProductChange(product,isIncrease){
    const productQuantity= parseFloat(document.getElementById(product+"-quantity").value) 
    let phoneNewQuantity=productQuantity;
      if(isIncrease==true){
          productNewQuantity=productQuantity+1;
      }
      else if (isIncrease==false && productQuantity>0){
        productNewQuantity=productQuantity-1;
      }
      document.getElementById(product+"-quantity").value=productNewQuantity;
      let productTotal=0;
      if(product=="phone"){
          productTotal=productNewQuantity*1219
      }
      else if(product=="case"){
        productTotal=productNewQuantity*59
    }

      document.getElementById(product+ "-price").innerText=productTotal;

      calculateTotal();
    }

    function calculateTotal(){
       const phoneQuantity=parseInt(document.getElementById("phone-quantity").value) 
       const caseQuantity=parseInt(document.getElementById("case-quantity").value)
       const totalPrice= phoneQuantity*1219+caseQuantity*59;

       document.getElementById("totalPrice").innerText="$"+ totalPrice

       const tax=Math.round(totalPrice*0.1);
       document.getElementById("tax-amount").innerText="$"+ tax;

       const grandTotal= totalPrice+tax;
       document.getElementById("grand-total").innerText="$"+ grandTotal;

    }

   












// function handleProductChange (isIncrease){
//     const caseQuantity=parseFloat(document.getElementById("case-quantity").value)

//     let caseNewQuantity=caseQuantity;

//     if(isIncrease==true){
//         caseNewQuantity=caseQuantity+1;
//     }
//     else if(isIncrease==false && caseQuantity>0){
//         caseNewQuantity=caseQuantity-1;
//     }
    
//     document.getElementById("case-quantity").value=caseNewQuantity
 
//     const caseTotal=caseNewQuantity*59;
//     document.getElementById("case-price").innerText="$"+ caseTotal;
// }


 
//   function handlePhoneChange(isIncrease){
//   const phoneQuantity= parseFloat(document.getElementById("phone-quantity").value) 
//   let phoneNewQuantity=phoneQuantity;
//     if(isIncrease==true){
//         phoneNewQuantity=phoneQuantity+1;
//     }
//     else if (isIncrease==false && phoneQuantity>0){
//         phoneNewQuantity=phoneQuantity-1;
//     }
//     document.getElementById("phone-quantity").value=phoneNewQuantity;
//     const phoneTotal=phoneNewQuantity*1219;
//     document.getElementById("phone-price").innerText=phoneTotal;


//   }

  