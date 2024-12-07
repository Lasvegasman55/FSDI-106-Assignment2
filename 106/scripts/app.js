function SaveTask(){
    console.log("task manager");
    //load data
    
    //hook the events
    $("#btnSave").click();
function init(){
    console.log("task manager");
    //load data
    
    //hook the events
    $("#btnSave").click(SaveTask);

}
window.onload = init;
