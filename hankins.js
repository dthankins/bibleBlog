// GLOBAL VARIABLES -- outside of a function so runs on page load and available to all functions.

// Get input from user

// var fruitInput;
// var totalInput;

var date;
var passageTextDiv;
var thoughts;
var prayer;


var database;


function setupFirebase() { // add to onload body elemant

    var config = {
        apiKey: "AIzaSyAFA7QAna_kcPdGTQ2R4bzH0F4_zROg6NI",
        authDomain: "hankinsfamily-3c92b.firebaseapp.com",
        databaseURL: "https://hankinsfamily-3c92b.firebaseio.com",
        projectId: "hankinsfamily-3c92b",
        storageBucket: "hankinsfamily-3c92b.appspot.com",
        messagingSenderId: "400051819535"
    };

    firebase.initializeApp(config);


    database = firebase.database();

    // Input fields
    date = new Date().toDateString();

    var node = document.getElementById("KJV");
    var htmlContent = node.innerHTML;
    passageTextDiv=htmlContent;
    // passageTextDiv="some text here";

    thoughts = document.getElementsByName("thoughts")[0].value;
    prayer = document.getElementsByName("prayer")[0].value;


  // fruitInput = "banana";
  // totalInput = 7;

}


// This is a function for sending data
function sendToFirebase() {
    var blogPosts = database.ref('blogPosts'); // pleural

  // Make an object with data in it
    var data = {
        date: date, 
        passageTextDiv: passageTextDiv, 
        thoughts: thoughts,
        prayer: prayer
    }

    var blogPost = blogPosts.push(data, finished); // singular then pleural
    console.log("Firebase generated key: " + blogPost.key); // singular

    // Reload the data for the page
    function finished(err) {
        if (err) {
          console.log("ooops, something went wrong.");
          console.log(err);
        } else {
            console.log('Data saved successfully');

        }
    }
}




function getPassage(){
    var book = document.getElementById("book").value;
    var chapterStart = document.getElementById("chapterStart").value;
    var chapterEnd = document.getElementById("chapterEnd").value;
    var verseStart = document.getElementById("verseStart").value;
    var verseEnd = document.getElementById("verseEnd").value;

    var link;

    link = "https://www.biblegateway.com/passage/?search=" + book + "+" + chapterStart + "%3A" + verseStart + "+-+" + chapterEnd + "%3A" + verseEnd + "&version=KJV;NIV&interface=print";

    window.alert(link);
 // link = "https://www.biblegateway.com/passage/?search=" + book + "+" + chapterStart + "%3A" + verseStart + "-" + verseEnd + "&version=KJV;NIV&interface=print";

    document.getElementById("KJV").innerHTML = "<iframe src=" + link + " height='500' width='80%'></iframe>";

}


function hide(hiddenDIV){
  var element = document.getElementById(hiddenDIV);
  element.classList.add("hideDIV");       //toggle class hideDIV
}

function unHide(hiddenDIV){
  var element = document.getElementById(hiddenDIV);
  element.classList.remove("hideDIV");        //toggle class hideDIV
}





/*
// DISPLAY on index page below here

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


}


function readData() {
       
    // Load database
    database = firebase.database();

    // Load scores/bob
 
    var ref = database.ref('blogPosts');
    ref.once('value', outputData); 

}


function outputData(data) {
   
    var realdata = data.val(); 
    var keys = Object.keys(data.val());
    for (i = 0; i < keys.length; i++){


        var newDate = realdata[keys[i]].date;
        var newPassage = realdata[keys[i]].passageTextToDiv;
        var newThought = realdata[keys[i]].thoughts;
        var newPrayer = realdata[keys[i]].prayer;

        var newPost = 
            date + '\n' + '\n' +
            passageTextDiv + '\n' + '\n' +
            thoughts + '\n' + '\n' +
            prayer;        

        addData(newPost,'blog'); 
        
    }
        
}


function addData(newBlogPost,stringDivId){
    var node = document.getElementById(stringDivId);

    var htmlContent = node.innerHTML;

    document.getElementById(stringDivId).innerHTML = "<hr>" + htmlContent + "<br>" + newBlogPost;

}

*/
