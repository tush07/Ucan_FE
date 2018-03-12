// Demo using plain javascript
var givenName = document.getElementById("name");
var userName = document.getElementById("username");
var emailId = document.getElementById("emailid");
var contactNo = document.getElementById("number");
var lang1 = document.getElementById("english");
var lang2 = document.getElementById("arabic");
var lang3 = document.getElementById("russian");
var timeHour = document.getElementById("hours");
var timeMin = document.getElementById("minute");
var userPass = document.getElementById("password");
var userCountry = document.getElementById("country");

var buttonEn = document.getElementById("buttonen");
var buttonDis = document.getElementById("buttondis");

// Disable the button on initial page load
givenName.disabled = true;
userName.disabled = true;
emailId.disabled = true;
contactNo.disabled = true;
lang1.disabled = true;
lang2.disabled = true;
lang3.disabled = true;
timeHour.disabled = true;
timeMin.disabled = true;
userPass.disabled = true;
userCountry.disabled = true;

//add event listener
buttonEn.addEventListener('click', function(event) {
    givenName.disabled = !givenName.disabled;
    userName.disabled = !userName.disabled;
    emailId.disabled = !emailId.disabled;
    contactNo.disabled = !contactNo.disabled;
    lang1.disabled = !lang1.disabled;
    lang2.disabled = !lang2.disabled;
    lang3.disabled = !lang3.disabled;
    timeHour.disabled = !timeHour.disabled;
    timeMin.disabled = !timeMin.disabled;
    userPass.disabled = !userPass.disabled;
    userCountry.disabled = !userCountry.disabled;

	buttonEn.style.display = "none";
	buttonDis.style.display = "block";
});

buttonDis.addEventListener('click', function(event) {
    givenName.disabled = !givenName.disabled;
    userName.disabled = !userName.disabled;
    emailId.disabled = !emailId.disabled;
    contactNo.disabled = !contactNo.disabled;
    lang1.disabled = !lang1.disabled;
    lang2.disabled = !lang2.disabled;
    lang3.disabled = !lang3.disabled;
    timeHour.disabled = !timeHour.disabled;
    timeMin.disabled = !timeMin.disabled;
    userPass.disabled = !userPass.disabled;
    userCountry.disabled = !userCountry.disabled;

	buttonEn.style.display = "block";
	buttonDis.style.display = "none";
});
