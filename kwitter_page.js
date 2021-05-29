//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCnlPwYKupq14cDQo5m-XrlRIi638Q_WJI",
      authDomain: "kwitter-bc87a.firebaseapp.com",
      databaseURL: "https://kwitter-bc87a-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc87a",
      storageBucket: "kwitter-bc87a.appspot.com",
      messagingSenderId: "671540859453",
      appId: "1:671540859453:web:e15e44190836f75f79d054",
      measurementId: "G-HBNFCD4NTK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("username_key");
room_name=localStorage.getItem("roomname_key");
document.getElementById("room_name").innerHTML="Roomname: "+room_name;
function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
      });
      document.getElementById("message").value="";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
localStorage.removeItem("username_key");
localStorage.removeItem("roomname_key");
window.location="index.html";
}