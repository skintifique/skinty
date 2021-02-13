// For the SkinTy modal on exit

let exitIntent ;
window.document.body.onmouseover = function() {detectNoExitIntent(event);};
window.document.body.onmouseleave = function() {detectExitIntent(event)};

function detectExitIntent(event) {
  let cX = event.clientX;
  let cY = event.clientY;
  if ((cX < 350) && (cY < 20)) {
  exitIntent = "1" ;
  } else if (cY >= 20) {
  exitIntent = "0" ;
  } else {
  exitIntent = "0" ;
  }
triggerOnExit () ;
}

function detectNoExitIntent(event) {
  let exitIntent = "0" ;
triggerOnExit () ;
}


let urlForConditions = window.location.href ;
let urlContains ;
let if_url_contains = document.getElementById("if_url_contains").value ;
if (if_url_contains == "-") {
urlContains = "1" ;
} else if (urlForConditions.includes(if_url_contains) > -1) {
urlContains = "1" ;
} else {
urlContains = "0" ;
}

let urlForConditions2 = window.location.href ;
let urlDoesNotContain ;
let if_url_not_contain = document.getElementById("if_url_does_not_contain").value ;
if (if_url_not_contain == "-") {
urlDoesNotContain = "1" ;
} else if (urlForConditions2.includes(if_url_not_contain) < 0) {
urlDoesNotContain = "0" ;
} else {
urlDoesNotContain = "1" ;
}

function triggerOnExit () {
let allConditions ;
let exitRef ;
let showOnExit = document.getElementById("show_on_exit").value ;
let exitModalCounter = document.getElementById("exitModalCounter").value ;
let ifSkintyViews = document.getElementById("if_skinty_views_less_than").value ;
let totalModalCounter = document.getElementById("totalModalCounter").value ;
if ((exitModalCounter == "0") &&
    (showOnExit == "yes") &&
    (exitIntent == "1") &&
    (urlContains == "1") &&
    (urlDoesNotContain == "1") &&
    (totalModalCounter < ifSkintyViews)) {
allConditions = "1" ;
} else {
allConditions = "0" ;
}
if (allConditions == "1") {
document.getElementById("exitModalCounter").value = "1" ;
exitRef = document.getElementById("exitTheme") ;
openSkintyModal(exitRef) ;
}
}

<!-- END FOR EXIT POPUP -->  

let floatingBtn_display = document.getElementById("floatingBtn_display").value ;
let this_page_url = window.location.href ;
if (floatingBtn_display == "all") {
document.getElementById("ModalBtnFloat").style.display = "block" ;
} else if (this_page_url.includes(floatingBtn_display)) {
document.getElementById("ModalBtnFloat").style.display = "block" ;
} else if (floatingBtn_display.length == 0) {
document.getElementById("ModalBtnFloat").style.display = "block" ;
} else {
document.getElementById("ModalBtnFloat").style.display ="none" ;
}

let windowwidth = window.innerWidth;
if (windowwidth < 500) {
document.getElementById("divSkintyFrame").className ="divSkintyForIframe" ;
}

function openSkintyModal (x) {
// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// open the modal 
  modal.style.display = "block";
  
// increment the modal open counter
 let totalModalCount = document.getElementById("totalModalCounter").value ;
  document.getElementById("totalModalCounter").value = Number(totalModalCount) + 1 ;
  
// select the type of call to the src 
let y = x.id ;
let z = y.search("Query") ;
let t = y.search("Theme") ;
let u = y.search("Float");
let btnType ; 
if (z > -1) {btnType = "Query";} else if (t > -1) {btnType = "Theme";} else if (u > -1) {btnType = "Float";}
if (btnType == "Float") {
  openSkintyModalFloat ()
  } else if (btnType == "Theme") {
  openSkintyModalTheme (x)
  } else if (btnType == "Query") {
  openSkintyModalQuery (x)
 }
 }

function openSkintyModalFloat () {
let prombM = document.getElementById("promb").value ;
let formatbM = "open" ;
let showbM = "show";
let themebM ;
let url = window.location.href ;
let floatingBtn_kwds = document.getElementById("floatingBtn_kwds").value ;
  if (floatingBtn_kwds.length > 0) {
    if (url.includes("eczema") && floatingBtn_kwds.includes("eczema")) {
    themebM = "eczema" ;
    } else if (url.includes("dermatit") && floatingBtn_kwds.includes("dermatit")) {
    themebM = "eczema" ;
    } else if (url.includes("dyshidrosis") && floatingBtn_kwds.includes("dyshidrosis")) {
    themebM = "eczema" ;
    } else if (url.includes("psoriasis") && floatingBtn_kwds.includes("psoriasis")) {
    themebM = "psoriasis"
    } else if (url.includes("allergy") && floatingBtn_kwds.includes("allergy")) {
    themebM = "allergy" ;
    } else if (url.includes("maternity") && floatingBtn_kwds.includes("maternity")) {
    themebM = "maternity" ;
    } else if (url.includes("pregnan") && floatingBtn_kwds.includes("pregnant")) {
    themebM = "maternity" ;
    } else if (url.includes("acne") && floatingBtn_kwds.includes("acne")) {
    themebM = "acne" ;
    } else if (url.includes("mature-skin") && floatingBtn_kwds.includes("mature-skin")) {
    themebM = "mature_skin" ;
    } else {
    themebM = "default" ; 
    } 
   } else {
    themebM = "default" ;
   }
let target_urlM = "https://skintifique.github.io/index.html" + "?promb=" + prombM  + "&queryb=" + "&themeb=" + themebM + "&formatb=" + formatbM + "&showb=" + showbM ;
document.getElementById("skintyframe").src = target_urlM ;
}


function openSkintyModalTheme (x) {
let prombM = document.getElementById("promb").value ;
let formatbM = "open" ;
let showbM = "show" ;
let themebM = x.value ;
let querybM = "" ;
let target_urlM = "https://skintifique.github.io/index.html" + "?promb=" + prombM  + "&queryb=" + querybM + "&themeb=" + themebM + "&formatb=" + formatbM + "&showb=" + showbM ;
document.getElementById("skintyframe").src = target_urlM ;
}


function openSkintyModalQuery (x) {
let prombM = document.getElementById("promb").value ;
let formatbM = "open" ;
let showbM = "show" ;
let themebM = "" ;
let querybM = x.value ;
let target_urlM = "https://skintifique.github.io/index.html" + "?promb=" + prombM  + "&queryb=" + querybM + "&themeb=" + themebM + "&formatb=" + formatbM + "&showb=" + showbM ;
document.getElementById("skintyframe").src = target_urlM ;
}


function closeSkintyModal() {
// Get the modal
let modal = document.getElementById("myModal");
// When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
// Get the modal
let modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
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