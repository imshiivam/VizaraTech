const firebaseConfig = {
  apiKey: "AIzaSyBpea7DbQmlA5-m_jE-bxkS_AGQOr2TvYE",
  authDomain: "contactform-f9b67.firebaseapp.com",
  databaseURL: "https://contactform-f9b67-default-rtdb.firebaseio.com",
  projectId: "contactform-f9b67",
  storageBucket: "contactform-f9b67.appspot.com",
  messagingSenderId: "116046485164",
  appId: "1:116046485164:web:7a3f1ab9c57c57928c3109"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("text");

  saveMessages(name, emailid);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
