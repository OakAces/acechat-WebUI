//logs out of the client if WebSocket connection is closed
function disconnect()
{
	channel=null;
	errorHandler("Unable to connect to "+server+" Logging out in 10 seconds...");
	window.setTimeout(logout,10000);
}
