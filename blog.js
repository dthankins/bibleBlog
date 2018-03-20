function initializeFirebase() {


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAFA7QAna_kcPdGTQ2R4bzH0F4_zROg6NI",
        authDomain: "hankinsfamily-3c92b.firebaseapp.com",
        databaseURL: "https://hankinsfamily-3c92b.firebaseio.com",
        projectId: "hankinsfamily-3c92b",
        storageBucket: "hankinsfamily-3c92b.appspot.com",
        messagingSenderId: "400051819535"
    };
      
    firebase.initializeApp(config);

// uncaught exception: [DEFAULT]: Firebase: 
// No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp() (app/no-app).
}


function readData() {
       
    // Load database
    var database = firebase.database();

    // Load scores/bob
 
    var ref = database.ref('blogPosts');
    ref.once('value', outputData); 

}


function outputData(data) {
   
    var realdata = data.val(); 
    var keys = Object.keys(data.val());
    for (i = 0; i < keys.length; i++){


        var newDate = realdata[keys[i]].date;
        var newPassage = realdata[keys[i]].passageTextDiv;
        var newThought = realdata[keys[i]].thoughts;
        var newPrayer = realdata[keys[i]].prayer;

        var newPost = 
            newDate + "<br>" + "<br>" +
            newPassage + "<br>" + "<br>" +
            newThought + "<br>" + "<br>" +
            newPrayer + "<hr>";        

        addData(newPost,'blog'); 
        
    }
        
}


function addData(newBlogPost,stringDivId){
    var node = document.getElementById(stringDivId);

    var htmlContent = node.innerHTML;

    document.getElementById(stringDivId).innerHTML =  newBlogPost  + "<br>" + "<br>" + htmlContent;

}


