/*jslint browser:true, devel:true, white:true, vars:true, eqeq:true */
/*global $:false, intel:false*/

var onDeviceReady=function(){                             // called when Cordova is ready
   if( window.Cordova && navigator.splashscreen ) {     // Cordova API detected
       $.ui.launch(); 
       navigator.splashscreen.hide() ;                 // hide splash screen
    }
} ;
document.addEventListener("deviceready", onDeviceReady, false) ;

/*Prevents the entire document from scrolling ontouch*/
document.ontouchstart = function(e){ 
    e.preventDefault();
};

/*Makes the iframe visible*/
function enable_display(){
    document.getElementById("webtest_frame").removeAttribute("style");
    document.getElementById("webtest_frame").setAttribute("style","display:inline");
}

/*Alerts the user with a message with a 2 seconds wait*/
function alertme(message){
    setTimeout(function(){alert(message);},2000);
}

/*Sets the iframe to the HTML5 Test page*/
function html5test(){
    enable_display();
    //Remove the sandbox attribute from the iframe
    document.getElementById("webtest_frame").removeAttribute("sandbox");
    //Sets the sandbox attribute to the iframe at load
    document.getElementById("webtest_frame").setAttribute("sandbox","allow-scripts allow-same-origin");
    document.getElementById("webtest_frame").setAttribute("src","http://html5test.com/");
    alertme("Use the RIGHT EDGE of the screen to SCROLL the PAGE");
}

//Sets the iframe to the about page for the HTML5 Test page
function html5test_about(){
    //Apply the sandbox attribute to the iframe
    document.getElementById("webtest_frame").removeAttribute("sandbox");
    //Sets the sandbox attribute to the iframe at load
    document.getElementById("webtest_frame").setAttribute("sandbox","");
    document.getElementById("webtest_frame").setAttribute("src","http://html5test.com/about.html");
}

/*Sets the iframe to the Ringmark page*/
function rngmrktest(){
    enable_display();
    //Remove the sandbox attribute from the iframe
    document.getElementById("webtest_frame").removeAttribute("sandbox");
    document.getElementById("webtest_frame").setAttribute("src","http://rng.io/");
    alertme("Use the RIGHT EDGE of the screen to SCROLL the PAGE");
}

/*Sets the iframe to the about page for the Ringmark page*/
function rngmrktest_about(){
    //Apply the sandbox attribute to the iframe
    document.getElementById("webtest_frame").removeAttribute("sandbox");
    document.getElementById("webtest_frame").setAttribute("sandbox","");
    document.getElementById("webtest_frame").setAttribute("src","http://rng.io/about/");
}