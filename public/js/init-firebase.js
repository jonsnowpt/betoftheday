// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "-",
    databaseURL: "-",
    projectId: "---",
    storageBucket: "-",
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Program Code

const teamsPlay = firebase.database().ref("livescores_table/livescores_today");

teamsPlay.on("value", function(data, prevChildKey) {
   const teams = data.val();
//   let element = document.getElementById("data"); // Costa Code

   for(var t in teams){
     var newTeam = teams[t];
     const localTeams = teams[t].localteam;
      console.log(localTeams);
  }

  

 //    var newHtml = "<div>"+"<p>LocalTeam:"+newTeam.localteam+"</p></div>"; // Costa Code
 //   element.innerHTML =element.innerHTML + newHtml; // Costa Code
 /*   console.log("Date: " + newTeam.date);
    console.log("Local Team: " + newTeam.localteam);
    console.log("Visitor Team: " + newTeam.visitorteam);
    console.log("Starts at: " + newTeam.starting_at); */ // Console Logs to verify Games
});
