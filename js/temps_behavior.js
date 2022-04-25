function updateTemperature(id){
    let ul = document.getElementsByClassName("temp-entry");

    let li = ul.item(id);
    //li.childNodes.forEach(function(node){ console.log(node.textContent)});
    let tempLabel = li.childNodes.item(3);
    localStorage.setItem("tempEntry" + id.toString(), tempLabel.textContent);
}

function increaseTemp(id){
    let ul = document.getElementsByClassName("temp-entry");

    //console.log(ul.length.toString());
    let li = ul.item(id);
    //li.childNodes.forEach(function(node){ console.log(node.textContent)});
    let tempLabel = li.childNodes.item(3);
    let temp = parseInt(tempLabel.textContent);
    temp += 1;
    tempLabel.textContent = temp.toString();
    let tempItemName = "tempEntry" + id.toString();
    localStorage.setItem(tempItemName, temp.toString());
    updateTemperature(id);
}

function decreaseTemp(id){
    let ul = document.getElementsByClassName("temp-entry");

    //console.log(ul.length.toString());
    let li = ul.item(id);
    //li.childNodes.forEach(function(node){ console.log(node.textContent)});
    let tempLabel = li.childNodes.item(3);
    let temp = parseInt(tempLabel.textContent);
    temp -= 1;
    tempLabel.textContent = temp.toString();
    let tempItemName = "tempEntry" + id.toString();
    localStorage.setItem(tempItemName, temp.toString());
    updateTemperature(id);
}

// TODO: implement way to add event listeners to all the buttons
function toggleThermostats(){
    let ul = document.querySelectorAll(".temp-entry > input[type=button]");
    var on = localStorage.getItem("buttonsOn");
    console.log("old on = " + on);
    if(on === "true") on = "false"; else on = "true";
    console.log("new on = " + on);
    ul.forEach(function(btn){
        if(on === "false")
            btn.disabled = false;
        else
            btn.disabled = true;
    });
    
    localStorage.setItem("buttonsOn", on);
}

function startup(){
    let ul = document.getElementsByClassName("temp-entry");

    for(let i = 0; i < ul.length; i++){
        let li = ul.item(i);
        //li.childNodes.forEach(function(node){ console.log(node.textContent)});
        let tempLabel = li.childNodes.item(3);
        let temperature = localStorage.getItem("tempEntry" + i.toString());
        if(temperature == null)
            tempLabel.textContent = "15";
        else
            tempLabel.textContent = temperature;
    }

    let btns = document.querySelectorAll(".temp-entry > input[type=button]");
    let on = localStorage.getItem("buttonsOn");
    if(on === null){
        console.log("setting default value for thermostat buttons");
        on = "false";
    }
    localStorage.setItem("buttonsOn", "false");
    console.log("on = " + on);
    btns.forEach(function(btn){ 
        
            if(on === "true")
                btn.disabled = true;
            else
                btn.disabled = false;
    });
    
}