// Higher Order Functions and passing function as argument


// callback function 
function someEventListener(typeOfEvent,callback){
    var eventThatHappend={
        eventType:'keypress',
        key:'p',
        duration:2
    }
    if(eventThatHappend.eventType===typeOfEvent){
        callback(eventThatHappend);
    }
}


debugger;  // to turn on debugger mode
someEventListener('keypress',function(event){
    console.log(event)
});