//create connection
var connectionUerCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

connectionUerCount.on("updateTotalViews", (value) => {

    $("#totalViewsCount").text(value);
});
function newWindowLoadedOnClient() {
    connectionUerCount.send("NewWindowLoad");
}


function onSuccess() {
    console.log("Connection established");
    newWindowLoadedOnClient();
}

function OnFailed() {

}

connectionUerCount.start().then(onSuccess,OnFailed);