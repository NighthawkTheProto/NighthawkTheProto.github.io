//document.getElementById("demo").style.cursor = "default"; this will stop the mouse from changing to clickable



//Side navigation
function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

  //Navigate to other pages
 function onClickNavMain(){
          location.href = 'index.html';
}
   
 //Navigate to other pages (not yet implemented, 404 page created)
 function onClickNavNYR(){
    location.href = 'nyr.html';
    
}
 function onClickNavProj(){
    location.href = 'projects.html';
}
 function onClickNavAbout(){
    location.href = 'about.html';
    
}
//can use getelementbyid to make a download button

//Need way to change whole HTML too
function lightDarkBodysort(){
var curId1 = document.getElementById('mainbodyLight') //Add in light mode ID
var curId2 = document.getElementById('mainbodyDark') //Add in dark mode ID

if(curId1 != null){
LighttoDark();
}

else if (curId2 != null){
DarktoLight();
}
else{
    console.error("None of described IDs found, FUNCT: lightDarkBodySort(), LINES: 1, 2... 4,8 (Relative to function). Contact Devs")
}

function LighttoDark(){
var curId = document.getElementById('mainbodyLight'); //Checks for Light mode ID
curId.setAttribute('id','mainbodyDark'); //sets dark mode ID
var butFunc = document.getElementById('clickText').innerHTML = "[Light Mode]"
}

function DarktoLight(){
var curId = document.getElementById('mainbodyDark'); //checs for Dark mode ID
curId.setAttribute('id','mainbodyLight'); //sets light mode ID
var butFunc = document.getElementById('clickText').innerHTML = "[Dark Mode]"
}
}
