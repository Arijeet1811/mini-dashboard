let addBtn=document.querySelector(".addBtn");
let userInput=document.querySelector(".userInput");
let userInputPrice=document.querySelector(".userInputPrice");
let inputCard=document.querySelector(".inputCard");
let userDetails=document.querySelector(".userDetails");
let removeBtn=document.querySelector(".remove");
let totalProducts=document.querySelector(".totalProducts");
let values=0;
let currentPrice = 0;
addBtn.addEventListener("click", () => {
inputCard.style.display="block";
let e=userInput.value;
if(e.trim()!== ""){
   const li=document.createElement("li");
   li.textContent=e;
   userDetails.append(li);
}
userInput.value="";
let f=userInputPrice.value;
if(f.trim()!== ""){
   currentPrice = parseFloat(f);
   const li=document.createElement("li");
   li.textContent=f;
   userDetails.append(li);
}
userInputPrice.value="";});
 let discountPercentage=document.querySelector(".discountPercentage");
 let discountBtn=document.querySelector(".discountBtn");
 let f=userInputPrice.value;
 discountBtn.addEventListener("click", (e) => {
   let discountValue=discountPercentage.value;
   let f=userInputPrice.value;
   if(discountValue.trim()!== ""){
       const li=document.createElement("li");
       li.textContent=`After Discount: ${currentPrice - (currentPrice * discountValue / 100)}`;
       userDetails.append(li);
    
   discountPercentage.value="";
   console.log(discountValue);
 }
 });
 removeBtn.addEventListener("click", () => {
inputCard.style.display="none";
userDetails.replaceChildren();
 });
