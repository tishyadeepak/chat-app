
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCN-JBMY_Rsg1KqZkLpHaXOBpPPvPeXkDE",
      authDomain: "kwitter-7130e.firebaseapp.com",
      databaseURL: "https://kwitter-7130e-default-rtdb.firebaseio.com",
      projectId: "kwitter-7130e",
      storageBucket: "kwitter-7130e.appspot.com",
      messagingSenderId: "972052694342",
      appId: "1:972052694342:web:ff2fa2345225484fd59147"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

 function addRoom(){
       room_name = document.getElementById("room_name").value;
     
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });
       localStorage.setItem("room_name",room_name);
       window.location= "kwitter_page.html";
       
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name-"+ Room_name);
       row="div class='room_name' id="+Room_names+"onclick='reddirectRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End code
      });});}
getData();

function reddirectRoomName(name)
{
      console.log(name);
      localStorage.getItem("room_name",name);
      window.location ="kwitter_page.html";
}
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "kwitter.html";
 }

