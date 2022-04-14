function increaseTemp(id){
    let ul = document.querySelector("#temps-menu-interior").childNodes;

    let tempLabel = ul[id].getElementById("temp");
    let temp = parseInt(tempLabel.textContent);
    temp += 1;
    tempLabel.textContent = temp.toString();
}

function decreaseTemp(id){
    let ul = document.querySelector("#temps-menu-interior").childNodes;

    let tempLabel = ul[id].getElementById("temp");
    let temp = parseInt(tempLabel.textContent);
    temp -= 1;
    tempLabel.textContent = temp.toString();
}

// TODO: implement way to add event listeners to all the buttons
