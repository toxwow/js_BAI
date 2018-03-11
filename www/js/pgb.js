function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
    
}


 function onDeviceReady() {

           var options = new ContactFindOptions();
           options.filter="";
           options.multiple=true;
           var fields = ["*"];
          navigator.contacts.find(fields, onSuccess, onError, options);
        }
        //on success handler
        function onSuccess(contacts)
        {
           for (var i = 0; i < contacts.length; i++)
            {
              $("#contactList").append("<li>"+contacts[i].phoneNumber[0].value+"</li>");
              $("#contactList").listview("refresh");
            }
        }
    //error handler
        function onError()
        {
          alert("Some Error Occured");
        }


function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function deviceInfo1() {

	info1 =  'Tomasz Tom¿yñski'

	navigator.notification.alert(info1);
	
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}