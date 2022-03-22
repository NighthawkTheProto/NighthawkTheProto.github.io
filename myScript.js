
document.getElementById("demo").style.cursor = "pointer";

function myFunction(){
document.getElementById("demo").innerHTML = "This text is from JavaScript!";
document.getElementById("demo").style.cursor = "default"; //this will stop the mouse from changing to clickable
}


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
   //Navigate to Page 1
   function onClickNavpg1(){
    location.href = 'Page1.html';
}
 //Navigate to other pages (not yet implemented, 404 page created)
 function onClickNavpg2(){
    location.href = '404.html';
    
}
function onClickNavpg3(){
    localton.href = "About.html"
}
//can use getelementbyid to make a download button
