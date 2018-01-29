var walkin = [];
function submits(){

	var nameInput = document.querySelector('#inputName').value;

	walkin.push(nameInput);
	
	document.getElementById("temp4").innerHTML = walkin;
	alert("Welcome Attendee! Please proceed to the cashier for your payment! Thank you.");
}