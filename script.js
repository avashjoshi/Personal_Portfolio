function validateForm(){
	var First Name = document.forms["infoForm"]["First Name"].value;
	var Last Name = document.forms["infoForm"]["Last Name"].value;
	var Email = document.forms["infoForm"]["Email"].value;	
	var Telephone = document.forms["infoForm"]["Telephone"].value;
	var your message = document.forms["infoForm"]["Your message"].value;
	
	if(First Name == "" || Last Name == "" || Email == "" || Telephone == "" || Your message == "" ){
		alert ("Empty fields found. Please fill the form.");
	}
	else{
		alert("Thanks for messaging us.");
	}
}
