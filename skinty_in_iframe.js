<!-- This is the js file for SkinTy iframe page with the most flexibility / most parameters to set on deployment -->
<!-- The values in the input elements are defined in the corresponding html file -->

 
function priority_never () {
let target_url = "https://skintifique.github.io/index.html" + "?promb=" + promb  + "&queryb=" + queryb + "&themeb=" + themeb + "&formatb=" + formatb + "&showb=" + showb ;
document.getElementById("devdemo").innerHTML = target_url ;
document.getElementById("skintyframe").src = target_url ;
} 



function priority_first () {
let url = window.location.href ;
let urlParams = (new URL(document.location)).searchParams ;
let promb2 = urlParams.get("promb") ; 
let promb3 ;
if (promb2) {promb3 = promb2;} else {promb3 = promb;}
let queryb3 ;
let queryb2 = urlParams.get("queryb") ;
if (queryb2) {queryb3 = queryb2;} else {queryb3 = queryb;}
let themeb3 ;
let themeb2 = urlParams.get("themeb") ;
if (themeb2) {themeb3 = themeb2;} else {themeb3 = themeb;}  
let formatb3 ;
let formatb2 = urlParams.get("formatb") ;
if (formatb2) {formatb3 = formatb2;} else {formatb3 = formatb;}    
let showb3 ;
let showb2 = urlParams.get("showb") ;
if (showb2) {showb3 = showb2;} else {showb3 = showb;}     
let target_url3 = "https://skintifique.github.io/index.html" + "?promb=" + promb3  + "&queryb=" + queryb3 + "&themeb=" + themeb3 + "&formatb=" + formatb3 + "&showb=" + showb3 ;
document.getElementById("skintyframe").src = target_url3 ;
}



function priority_last () {
let url = window.location.href ;
let urlParams = (new URL(document.location)).searchParams ;
let promb2 = urlParams.get("promb") ; 
let promb3 ;
if (promb) {promb3 = promb;} else {promb3 = promb2;}
let queryb3 ;
let queryb2 = urlParams.get("queryb") ;
if (queryb.length == 0) {queryb3 = "";} else if (queryb) {queryb3 = queryb;} else {queryb3 = queryb2;}
let themeb3 ;
let themeb2 = urlParams.get("themeb") ;
if (themeb) {themeb3 = themeb;} else {themeb3 = themeb2;}  
let formatb3 ;
let formatb2 = urlParams.get("formatb") ;
if (formatb) {formatb3 = formatb;} else {formatb3 = formatb2;}    
let showb3 ;
let showb2 = urlParams.get("showb") ;
if (showb) {showb3 = showb;} else {showb3 = showb2;}     
let target_url3 = "https://skintifique.github.io/index.html" + "?promb=" + promb3  + "&queryb=" + queryb3 + "&themeb=" + themeb3 + "&formatb=" + formatb3 + "&showb=" + showb3 ;
document.getElementById("skintyframe").src = target_url3 ;
}
  


let promb = document.getElementById("promb").value ;
let themeb = document.getElementById("themeb").value ; 
let formatb = document.getElementById("formatb").value ; 
let showb = document.getElementById("showb").value ; 
let queryb = document.getElementById("queryb").value ; 
let url_priority = document.getElementById("url_priority").value ;
if (url_priority === "never") {
priority_never ();
} else if (url_priority === "first") {
priority_first () ;
} else if (url_priority === "last") {
priority_last ();
} else {
priority_last () ;
}

let windowwidth = window.innerWidth;
if (windowwidth < 500) {
document.getElementById("divSkintyFrame").className ="divSkintyForIframe" ;
}

// For the buttons underneath the SkinTy window
function liveAgent () {
document.getElementById("skintyframe").src = "https://skintifique.github.io/zendesk-widget.html" ;
}

function flamingo () {
document.getElementById("skintyframe").src = "https://flam3.goodbarber.app" ;
}

function skintyPage () {
document.getElementById("skintyframe").src = "https://skintifique.github.io/index.html" ;
}

function welcomeOffer () {
document.getElementById("skintyframe").src = "https://www.skintifique.me/welcome-offer/?nsfs" ;
}

function callUs () {
document.getElementById("skintyframe").src = "https://skintifique.github.io/call_us.html" ;
}

