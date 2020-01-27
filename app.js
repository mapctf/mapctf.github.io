(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyCFfDOmsS1qGr4NsJXfhYD-5_SISXHm6Y0",
    authDomain: "mapctf-c677b.firebaseapp.com",
    databaseURL: "https://mapctf-c677b.firebaseio.com",
    projectId: "mapctf-c677b",
    storageBucket: "mapctf-c677b.appspot.com",
    messagingSenderId: "372501642763",
    appId: "1:372501642763:web:90a860ae080b86f52c510e",
    measurementId: "G-Y5W2SPFFP4"
  };
firebase.initializeApp(firebaseConfig);

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
  const Email = txtEmail.value;
  const Password = txtPassword.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(Email, Password);
  promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener('click', e => {
  const Email = txtEmail.value;
  const Password = txtPassword.value;
  const auth = firebase.auth();

  const promise = createUserWithEmailAndPassword(Email, Password);
  promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log('not logged in');
  }
});

}());