let schedules = [];
let next_id = 0;

function fetchScheduledIrrig(){
    var schedString = localStorage.getItem("schedString");
    var schedArray = schedString.split(" "); // splitting by spaces gives us an
                                             // array with all the scheduled
                                             // irrigation times
    return schedArray;
}

function updateSchedList(){
    var schedString = "";
    forEach(sched in schedules){
        if(schedString === "")
	    schedString = sched;
        else
	    schedString = schedString + " " + sched;
    }
    localStorage.setItem("schedString",schedString);
}

function addIrrigationSched(startTime, endTime){
    var newEntry = next_id.toString() + ";" + startTime + ";" + endTime;
    schedules.push(newEntry);
    updateSchedList();
}

function removeIrrigationSched(id, startTime, endTime){
    var checkEntry = id + ";" + startTime + ";" + endTime;
    var inSplice = schedules.indexOf(checkEntry);
    schedules.splice(inSplice, 1);
    updateSchedList();
}

function startup(){
    schedules = fetchScheduledIrrig();
    next_id = schedules.length + 1;
}

function addButton(){
    // TODO: get the times from the input boxes
    // TODO: add a new entry to the schedules
    // TODO: update the irrigation schedule list on the web page
}

function removeButton(id){
    // TODO: get the id and the times from the input boxes
    // TODO: remove the entry from the schedules
    // TODO: update the irrigation schedule list on the web page
}

function updateScheduleDOMList(){
    // TODO: get the div with the list
    // TODO: erase all the listings
    // TODO: add a schedule listing for each sched in schedules
}
