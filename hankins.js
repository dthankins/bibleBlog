
/*


*/

function initializeFirebaseMRA() {

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAFA7QAna_kcPdGTQ2R4bzH0F4_zROg6NI",
        authDomain: "hankinsfamily-3c92b.firebaseapp.com",
        databaseURL: "https://hankinsfamily-3c92b.firebaseio.com",
        projectId: "hankinsfamily-3c92b",
        storageBucket: "",
        messagingSenderId: "400051819535"
      };
      firebase.initializeApp(config);

      //test to see it is working  it never acts like it is working   console.log(firebase);



    // Reference to the protocols object in your Firebase database
    var newProtocols = firebase.database().ref("newProtocols");


   window.alert("in first part");

}

function submitNewProtocol() {

    // Save a new protocol to the database, using the input in the form
    // var submitNewProtocol = function () {

        window.alert("in 2nd part");
      

    // Get input values from each of the form elements
    var date = new Date().toDateString();

    var node = document.getElementById("KJV");
    var htmlContent = node.innerHTML;
    // var passageTextDiv=htmlContent;
    var passageTextDiv="some text here";

    var thoughts = document.getElementsByName("thoughts")[0].value;
    var prayer = document.getElementsByName("prayer")[0].value;


    window.alert(
        date + '\n' +
        passageTextDiv + '\n' +
        thoughts + '\n' +
        prayer);
      
        var date = js_date;
        var passageTextDiv = js_passageTextDiv;
        var thoughts = js_thou;ghts
        var prayer = js_prayer;


    // Push a new protocol to the database using those values
        newProtocols.push({

        "date": js_date, 
        "passageTextDiv": js_passageTextDiv, 
        "thoughts": js_thoughts,
        "prayer": js_prayer

        });
      

} // end initializeFirebaseMRA()




/*
function initializeFirebaseBible() {



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUnMXZnBaU5Q9M1T0ddZrrCXEw8q8TmN0",
    authDomain: "bibleblog-1bd60.firebaseapp.com",
    databaseURL: "https://bibleblog-1bd60.firebaseio.com",
    projectId: "bibleblog-1bd60",
    storageBucket: "bibleblog-1bd60.appspot.com",
    messagingSenderId: "49437803895"
  };
  firebase.initializeApp(config);


    // Save a new protocol to the database, using the input in the form
   


    var newBiblePost = firebase.database().ref("newBiblePost"); 
}



function submitPage() {

    // Save a new protocol to the database, using the input in the form
    // var submitNewPost = function () {



    // Get input values from each of the form elements

    var date = new Date().toDateString();

    var node = document.getElementById("KJV");
    var htmlContent = node.innerHTML;
    // var passageTextDiv=htmlContent;
    var passageTextDiv="some text here";

    var thoughts = document.getElementsByName("thoughts")[0].value;
    var prayer = document.getElementsByName("prayer")[0].value;


    window.alert(
        date + '\n' +
        passageTextDiv + '\n' +
        thoughts + '\n' +
        prayer);




    // Push a new protocol to the database using those values
    newBiblePost.push({
        "date": date, 
        "passageTextDiv": passageTextDiv, 
        "thoughts": thoughts,
        "prayer": prayer
    });
} 

*/







function getPassage(){
    var book = document.getElementById("book").value;
    var chapterStart = document.getElementById("chapterStart").value;
    var chapterEnd = document.getElementById("chapterEnd").value;
    var verseStart = document.getElementById("verseStart").value;
    var verseEnd = document.getElementById("verseEnd").value;

    var link;

/*
document.getElementById("KJV").innerHTML = "bible text goes here";
*/ 
    link = "https://www.biblegateway.com/passage/?search=" + book + "+" + chapterStart + "%3A" + verseStart + "-" + verseEnd + "&version=KJV;NIV&interface=print";





    if(chapterEnd===chapterStart){ // all verses in same chapter
        
        document.getElementById("KJV").innerHTML = "<iframe src=" + link + " height='500' width='80%'></iframe>";

    } else {
        unHide("KJV2");

    }


}



function hide(hiddenDIV){
  var element = document.getElementById(hiddenDIV);
  element.classList.add("hideDIV");       //toggle class hideDIV
}

function unHide(hiddenDIV){
  var element = document.getElementById(hiddenDIV);
  element.classList.remove("hideDIV");        //toggle class hideDIV
}

function addData(newBlogPost,stringDivId){
    var node = document.getElementById(stringDivId);

    var htmlContent = node.innerHTML;

    document.getElementById(stringDivId).innerHTML = htmlContent + "<br>" + newBlogPost;

}


function readData() {
    
   
    // Load database
    var database = firebase.database();

    // Load scores/bob
 
    var ref = database.ref('bibleBlog');
    ref.on('value', outputData); 

}


function outputData(data) {

    // location.reload();

    // refreshLists();
    // refreshLists only works for masterWOrklist.  It just deletes everything on the others
   
    realdata = data.val(); 
    var keys = Object.keys(data.val());
    for (i = 0; i < keys.length; i++){
        
    }
       
}
