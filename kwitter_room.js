
//ADD YOUR FIREBASE LINKS HERE
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
    
username=localStorage.getItem("username_key");
document.getElementById("user_name").innerHTML="welcome "+username+" !";

function addroom(){
roomname=document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
      purpose:"addroomname"
});
localStorage.setItem("roomname_key",roomname);
window.location="kwitter_page.html";

}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                   Room_names = childKey;
      //Start code
            console.log("roomnames-"+Room_names);
            row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroom(this.id)'>"+Room_names+"</div><hr>"
            document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirecttoroom(currentroom){
      console.log(currentroom);
      localStorage.setItem("roomname_key",currentroom);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location="index.html";
}
