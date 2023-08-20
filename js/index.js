let total = 0;

function handleCLikBtn(target, price) {
    const selectedItemContainer = document.getElementById("selected-items");
    
    const li = document.createElement("li");
    li.innerText = target;
    selectedItemContainer.appendChild(li);

    const TotalPrice = price;
    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total-price").innerText = total;
    return total;
}

const discoundTotal = document.getElementById('discound-btn').addEventListener('click', function(){
    const discoundCalculation = parseFloat(total * 0.80);
    const discoundTaka = parseFloat((total - discoundCalculation).toFixed(2));
    


    const discoundPrice = document.getElementById('discound-price');
    discoundPrice.innerText = parseFloat(discoundTaka) ;

    const totalPayAmound = document.getElementById('total-pay-amount');

    // const finalAmound = parseFloat(total) - parseFloat(discoundPrice);
    
    // totalPayAmound.innerText = finalAmound;
})