function handleCLikBtn(target, price) {
    const selectedItemContainer = document.getElementById("selected-items");
    
    const li = document.createElement("li");
    li.innerText = target;
    selectedItemContainer.appendChild(li);


}