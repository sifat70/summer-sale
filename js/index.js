let total = 0;

function handleCLikBtn(target, price) {
    const selectedItemContainer = document.getElementById("selected-items");

    const li = document.createElement("li");
    li.innerText = target;
    selectedItemContainer.appendChild(li);

    const TotalPrice = price;
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total-price").innerText = total;


                            /* validation start */
    const purchaseValidation = document.getElementById('purchase-btn')
    if(total >= 1){
        purchaseValidation.removeAttribute('disabled');
    }else{
        purchaseValidation.setAttribute('disabled', true);
    }
    const applyBtnDisabled = document.getElementById('discound-btn');
    if(total >= 200){
        applyBtnDisabled.removeAttribute('disabled');
    }else{
        applyBtnDisabled.setAttribute('disabled', true);
    }


                              /* validation end */

                              
    return total;
}

    

const discoundTotal = document.getElementById('discound-btn').addEventListener('click', function () {

    


    const discoundCalculation = parseFloat(total * 0.80);
    const discoundTaka = parseFloat((total - discoundCalculation).toFixed(2));



    const discoundPrice = document.getElementById('discound-price');
    discoundPrice.innerText = parseFloat(discoundTaka);



    const totalPayAmound = document.getElementById('total-pay-amount');
    const totalAmoundCalculation = parseFloat(total) - parseFloat(discoundTaka);
    totalPayAmound.innerText = totalAmoundCalculation;
})


