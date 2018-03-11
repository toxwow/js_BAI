function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
    document.addEventListener("deviceready", getContactList, false);
    
}




  function getContactFields(contacts) {
         for (var i=0; i<contacts.length; i++)
        {
               alert(contacts.length);
               alert("Name:" + contacts[i].displayName);
                        
for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
                               alert("Type: " + contacts[i].phoneNumbers[j].type + "\n" +
                                         "Value: "  + contacts[i].phoneNumbers[j].value );
                        }
 
    
 }  
    }
function onDeviceReady() {
	document.addEventListener("deviceready", getContactList, false);
    function getContactList() {
      var contactList = new ContactFindOptions();
      contactList.filter="";
      contactList.multiple=true;
      var fields = ["*"];  //"*" will return all contact fields
      navigator.contacts.find(fields,  getContactFields, contactList );
  }
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