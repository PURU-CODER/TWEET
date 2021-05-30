var firebaseConfig = {
      apiKey: "AIzaSyBZ02OSX86NWEbL6x5rHjPEDlvP5ZghUzQ",
      authDomain: "chatar-patar-14000.firebaseapp.com",
      databaseURL: "https://chatar-patar-14000-default-rtdb.firebaseio.com",
      projectId: "chatar-patar-14000",
      storageBucket: "chatar-patar-14000.appspot.com",
      messagingSenderId: "189014004564",
      appId: "1:189014004564:web:69882f13bcd54ef8b96ec1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}