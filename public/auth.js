// Get elements

var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnSignup = document.getElementById('btnSignUp');
var	btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
	//Get email and password
	var email = txtEmail.value;
	var pass = txtPassword.value; 
	var auth = firebase.auth();

	//Sign in

	var promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
});

btnSignup.addEventListener('click', e => {
	//Get email and password
	//TODO: check 4 rel email
	var email = txtEmail.value;
	var pass = txtPassword.value; 
	var auth = firebase.auth();

	//Sign in

	var promise = auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
});