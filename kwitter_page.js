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
           console.log(firebase_message_id);
           console.log(message_data);
           names=message_data['name'];
           message=message_data['message'];
           like=message_data['like'];
           name_tag="<h4>"+names+"<img src='tick.png' class='user_tick'></h4>";
           message_tag="<h4 class='message_h4'>"+message+"</h4>";
           button_tag="<button class='btn btn-warning' value="+like+" id="+firebase_message_id+" onclick='updatelike(this.id)'>";
           span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span> </button>";
           row=name_tag+message_tag+button_tag+span_tag;
           document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updatelike(message_id){
      likes=document.getElementById(message_id).value;
      update_like=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:update_like
      });
}
function logout(){
localStorage.removeItem("username_key");
localStorage.removeItem("roomname_key");
window.location="index.html";
}