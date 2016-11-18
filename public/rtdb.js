//Get elements

var preObject = document.getElementById('object');

//create reference

var dbRefObject = firebase.database().ref().child('object');

//Sync object changes

dbRefObject.on('value', function(snap) {
	preObject.innerText = JSON.stringify(snap.val(), null, 3);
});