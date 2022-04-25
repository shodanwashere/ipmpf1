function startup(){
    let n1 = document.querySelector("#notify1");
    let n2 = document.querySelector("#notify2");
    let n3 = document.querySelector("#notify3");

    var c1 = localStorage.getItem("smsNotif");
    var c2 = localStorage.getItem("sosCall");
    var c3 = localStorage.getItem("houseAlarm");

    if(c1 === "true") n1.checked = true; else n1.checked = false;
    console.log(n1.checked);
    if(c2 === "true") n2.checked = true; else n2.checked = false;
    if(c3 === "true") n3.checked = true; else n3.checked = false;

    n1.addEventListener("change", updateSMSNotif);
    n2.addEventListener("change", updateSOSCall);
    n3.addEventListener("change", updateHouseAlarm);
}

function updateSMSNotif(){
    let n1 = document.querySelector("#notify1");
    console.log(n1.checked);
    localStorage.setItem("smsNotif", n1.checked);
    let v = localStorage.getItem("smsNotif");
    console.log("Confirm :: smsNotif = " + v);
}

function updateSOSCall(){
    let n2 = document.querySelector("#notify2");
    console.log(n2.checked);
    localStorage.setItem("sosCall", n2.checked); 
}

function updateHouseAlarm(){
    let n3 = document.querySelector("#notify3");
    console.log(n3.checked);
    localStorage.setItem("houseAlarm", n3.checked); 
}