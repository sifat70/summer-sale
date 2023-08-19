let total = 0;

function handleCLikBtn(target, price) {
    const selectedItemContainer = document.getElementById("selected-items");
    
    const li = document.createElement("li");
    li.innerText = target;
    selectedItemContainer.appendChild(li);

    const TotalPrice = price;
    total = parseInt(total) + parseInt(price);
    document.getElementById("total-price").innerText = total;

    
}