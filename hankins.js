
/*


*/



function initializeFirebaseBible() {


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUnMXZnBaU5Q9M1T0ddZrrCXEw8q8TmN0",
    authDomain: "bibleblog-1bd60.firebaseapp.com",
    databaseURL: "https://bibleblog-1bd60.firebaseio.com",
    projectId: "bibleblog-1bd60",
    storageBucket: "",
    messagingSenderId: "49437803895"
  };

  firebase.initializeApp(config);


}

function getPassage(){
    var book = document.getElementById("book").value;
    var chapterStart = document.getElementById("chapterStart").value;
    var chapterEnd = document.getElementById("chapterEnd").value;
    var verseStart = document.getElementById("verseStart").value;
    var verseEnd = document.getElementById("verseEnd").value;

    var link;

    link = "https://www.biblegateway.com/passage/?search=" + book + "+" + chapterStart + "%3A" + verseStart + "-" + verseEnd + "&version=KJV;NIV&interface=print";





    if(chapterEnd===chapterStart){ // all verses in same chapter
        
        document.getElementById("KJV").innerHTML = "<iframe src=" + link + " height='500' width='80%'></iframe>";

    } else {
        unHide("KJV2");

    }
    
}

function submitPage() {

    var node = document.getElementById("KJV");
    var htmlContent = node.innerHTML;
    var passageTextDiv=htmlContent;

    var thoughts = document.getElementsByName[0]("thoughts").value;
    var prayer = document.getElementsByName[0]("prayer").value;

    


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
