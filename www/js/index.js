$(document).ready(function(){
	document.getElementById("btnContato").addEventListener("click", function(){
		navigator.contacts.pickContact(function(contact){
			document.getElementById("txtEmail").value = "" + contact.emails[0].value;
			document.getElementById("txtPhone").value = "" + contact.phoneNumbers[0].value;
		},function(err){
			console.log('Error: ' + err);
		});
	});
});