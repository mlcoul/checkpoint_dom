let btnPlusAll = document.querySelectorAll('.btn-plus');
let btnMoinsAll = document.querySelectorAll('.btn-moins');

for (let i = 0; i <btnPlusAll.length; i++) {
    btnPlusAll[i].addEventListener('click',increaseQuantity);
}


for (let i = 0; i <btnMoinsAll.length; i++) {
    
    btnMoinsAll[i].addEventListener('click',decreaseQuantity);
   
}





function increaseQuantity(){

    

   this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) +1

   let quantity = parseInt(this.previousElementSibling.value);
   let price = parseInt(this.parentElement.nextElementSibling.innerHTML);

   sousTotal(this, quantity, price)

   total();
}

function decreaseQuantity(){

    
    if(parseInt(this.nextElementSibling.value) > 0){
        this.nextElementSibling.value =  parseInt(this.nextElementSibling.value) -1;
        let quantity = parseInt(this.nextElementSibling.value);
        let price = parseInt(this.parentElement.nextElementSibling.innerHTML);

        sousTotal(this, quantity, price)
        total();
    }



}

function sousTotal(elt, qty, price){


    let sousTotal = qty * price;

    elt.parentElement.nextElementSibling.nextElementSibling.innerHTML = sousTotal;

}

function total(){
    let sousTotalAll = document.querySelectorAll('.sous-total');
  

    let tot = 0;

   for (x of sousTotalAll){
   
    
       tot =tot + parseInt(x.innerHTML)

       
   }

 
   document.querySelector('.total').innerHTML = "Total : " + tot;

    



}