// IDENTIFY IF BROWSER SUPPORTS WEBP (FOR GIF FILES IN SKINTY)
// CURRENTLY NOT IN USE
//async function supportsWebp() {
//  if (!self.createImageBitmap) return false;
  
//  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
//  const blob = await fetch(webpData).then(r => r.blob());
//  return createImageBitmap(blob).then(() => true, () => false);
//}

//(async () => {
//  if(await supportsWebp()) {
//   document.getElementById("exitTheme").value = "exit_webp";
//  }
//  else {
// <!-- set value below to exit if there is a default SkinTy page when using webp formated images -->
//   document.getElementById("exitTheme").value = "exit_webp"; 
//  }
//})();

// SET UP SELECT PAGE PARAMETERS
// Image in help center float btn
// document.getElementById("helpPopupBtnImg").src = "https://media.giphy.com/media/L0rdnflIRAngVsDpxJ/giphy.gif" ;
// potential alternative gif: https://media.giphy.com/media/l0MYSOnaOKyWPTf0c/giphy.gif, https://media.giphy.com/media/SUbYK8slyVWbmHc5R9/giphy.gif, https://media.giphy.com/media/26ufn24Onjz8w7NxS/giphy.gif, https://media.giphy.com/media/l0MYSOnaOKyWPTf0c/giphy.gif
// url for skintypage
let skintyPageUrl= "https://skintifique.github.io" ;

// HELP CENTER POPUP TRIGGERS AND PARAMETERS
let nbHelpPopupOpen = sessionStorage.getItem("nbHelpPopupOpen");
if (nbHelpPopupOpen != "1") {
window.setTimeout(openHelpPopup, 4000);
window.setTimeout(showFbMessengerWidget, 4500);
}

document.getElementById("welcomeTextHelpPopup").innerHTML = "Hello! Let me know if we can help. Select 'Digital assistant' for self-help 😍 or other buttons to communicate with our advisors ❤️" ;


// FOR SKINTY MODAL ON EXIT

// identify device type

let deviceType ;
let windowwidth = window.innerWidth;
if (windowwidth < 500) {
deviceType = "mobile" ;
} else {
deviceType = "NOT mobile" ;
}
                    
// identify exit intent, device specific
let exitIntent ;

window.document.body.onmouseover = function() {
if (deviceType == "NOT mobile") { 
detectNoExitIntent(event);
}
};

window.document.body.onmouseleave = function() {
if (deviceType == "NOT mobile") {
detectExitIntent(event);
}
};

window.addEventListener("scroll",function(){myScrollSpeedFunction();});


function detectExitIntent(event) {
  let cX = event.clientX;
  let cY = event.clientY;
  if ((cX < 2000) && (cY < 20)) {
  exitIntent = "1" ;
  } else if (cY >= 20) {
  exitIntent = "0" ;
  } else {
  exitIntent = "0" ;
  }
triggerOnExit () ;
}

function detectNoExitIntent(event) {
  exitIntent = "0" ;
triggerOnExit () ;
}

function myScrollSpeedFunction(){
     if(deviceType == "mobile") { 
         if(my_scroll() < -60) {
            exitIntent = "1" ;
           triggerOnExit () ;
     } else {
       exitIntent = "0" ;
       triggerOnExit () ;
 }
 }
}

 let my_scroll = (function(){ //Function that checks the speed of scrolling
 let last_position, new_position, timer, delta, delay = 50; 

 function clear() {
     last_position = null;
     delta = 0;
 }

 clear();
 return function(){
     new_position = window.scrollY ;
     if ( last_position != null ){
         delta = new_position -  last_position;
     }
     last_position = new_position;
     clearTimeout(timer);
     timer = setTimeout(clear, delay);
     return delta;
 };
 })();  
 
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
let exitRef ;
let showOnExit = document.getElementById("show_on_exit").value ;
if ((showOnExit == "yes") &&
    (exitIntent == "1") &&
    (urlContains == "1") &&
    (urlDoesNotContain == "1")) {
    let urlForConditions3 = window.location.href ;
    let testOnOrderPage = urlForConditions3.includes("multi-shipping") ;
    let testOnOrderPage1 = urlForConditions3.includes("/order") ;
    let exitOnOrderPageCounter = document.getElementById("exitOnOrderPageCounter").value ;
    if ((exitOnOrderPageCounter == "0") && ((testOnOrderPage) || (testOnOrderPage1))) {
        document.getElementById("exitOnOrderPageCounter").value = "1" ;
        exitRef = document.getElementById("exitWithCartTheme") ;
      openSkintyModal(exitRef) ;
     } else {
     let exitModalCounter = document.getElementById("exitModalCounter").value ;
     let ifSkintyViews = document.getElementById("if_skinty_views_less_than").value ;
     let totalModalCounter = document.getElementById("totalModalCounter").value ;
     let sessionSkintyModalCount2 = sessionStorage.getItem("sessionSkintyModalCount") ;
     let sessionSkintyMax = document.getElementById("if_views_in_session_less_than").value ;
     if ((exitModalCounter == "0") &&
        (totalModalCounter < ifSkintyViews) &&
        (sessionSkintyModalCount2 < sessionSkintyMax)) {
        document.getElementById("exitModalCounter").value = "1" ;
        exitRef = document.getElementById("exitTheme") ;
        openSkintyModal(exitRef) ;
       }
       }
  }
  }

<!-- END FOR EXIT POPUP -->  
  
<!-- display floating button and identification deviceType -->  

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

if (deviceType == "mobile") {
document.getElementById("divSkintyFrame").className ="divSkintyForIframe" ;
}

// When the user clicks on floating button (help button) div, open the popup
function openHelpPopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
//let fbMsgDiv = document.getElementById("fbMsgDiv") ;
 // let fbMsgDivDisplay = fbMsgDiv.style.display ;
//  if (fbMsgDivDisplay === "block") {
  document.getElementById("fbMsgDiv").style.display = "none" ;
 // }
  showAvailableBtns() ;
}
<!-- END display floating button and identification deviceType -->  
  
<!-- display buttons inside floating button pop-up -->  

function showAvailableBtns() {
  let availability ;
let start_available1 = "09:00" ;
let dateUTC_start1 = new Date("2021-01-01T" + start_available1 + "Z") ;
let hour_start1 = dateUTC_start1.getUTCHours();
let end_available1 = "12:00" ;
let dateUTC_end1 = new Date("2021-01-01T" + end_available1 + "Z") ;
let hour_end1 = dateUTC_end1.getUTCHours();
let start_available2 = "13:00" ;
let dateUTC_start2 = new Date("2021-01-01T" + start_available2 + "Z") ;
let hour_start2 = dateUTC_start2.getUTCHours();
let end_available2 = "17:00" ;
let dateUTC_end2 = new Date("2021-01-01T" + end_available2 + "Z") ;
let hour_end2 = dateUTC_end2.getUTCHours() ;
let date = new Date();
let todayD = date.getUTCDay();
let today = todayD ;
let hour = date.getUTCHours();
if ((today != "6") && (today != "0")) {
  if ((hour >= hour_start1) && (hour < hour_end1)) {
    availability = "available" ;
    } else if ((hour >= hour_start2) && (hour < hour_end2)) {
    availability = "available" ;
    } else {
    availability = "not_available" ;
    }
  }
  if (today == "6") {
  let saturday = "no" ;
  let saturday_start = "09:00" ;
  let dateUTC_sat_start = new Date("2021-01-01T" + saturday_start + "Z") ;
  let hour_sat_start = dateUTC_sat_start.getUTCHours();
  let saturday_end = "17:00" ;
  let dateUTC_sat_end = new Date("2021-01-01T" + saturday_end + "Z") ;
  let hour_sat_end = dateUTC_sat_end.getUTCHours();  
  if (saturday == "no") {
  availability = "not_available" ;
  } else if ((hour >= hour_sat_start) && (hour < hour_sat_end)) {
  availability = "available" ; 
  } else {
  availability = "not_available" ;
  } 
   } 
  if (today == "0") {
  let sunday = "no" ;
  let sunday_start = "09:00" ;
  let dateUTC_sun_start = new Date("2021-01-01T" + sunday + "Z") ;
  let hour_sun_start = dateUTC_sun_start.getUTCHours();
  let sunday_end = "17:00" ;
  let dateUTC_sun_end = new Date("2021-01-01T" + sunday_end + "Z") ;
  let hour_sun_end = dateUTC_sun_end.getUTCHours();  
  if (sunday == "no") {
  availability = "not_available" ;
  } else if ((hour >= hour_sun_start) && (hour < hour_sun_end)) {
  availability = "available" ; 
  } else {
  availability = "not_available" ;
  } 
  } 
 if (availability == "available") {
  document.getElementById("openChatBtn").style.display = "block" ;
  document.getElementById("ModalBtnUrl2").style.display = "none" ;
  document.getElementById("callUsBtnInModal").style.display = "none" ;	 
  document.getElementById("chatBtnInModal").style.display = "inline" ;	  
  } else {
  document.getElementById("openChatBtn").style.display = "none" ;
  document.getElementById("ModalBtnUrl2").style.display = "none" ;
  document.getElementById("callUsBtnInModal").style.display = "none" ;	 
  document.getElementById("chatBtnInModal").style.display = "none" ;		  
  } 
sessionStorage.setItem("nbHelpPopupOpen","1") ;
} 

// When the user clicks on FBmessenger button, show the FB messenger widget
function showFbMessengerWidget (event) {
	let x = document.getElementById("fbMsgDiv") ;
	x.style.display = "block" ;
	event.stopPropagation();
	}


// When the user clicks on chat button, open the chat popup and display FB messenger (NOT IN USE)
function openChatPopup() {
if (deviceType == "mobile") {
  let x = document.getElementById("fbMessengerBtn") ;
  openSkintyModal(x) ;
} else {
  let popup = document.getElementById("chatPopup");
  popup.classList.add("show");
  }
}

function closeChatPopup() {
  var popup = document.getElementById("chatPopup");
  popup.classList.remove("show");
}

<!-- END display buttons inside floating button pop-up -->  

function openSkintyModal (x) {
// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// open the modal 
  modal.style.display = "block";
  
// increment the modal on page counter
 let totalModalCount = document.getElementById("totalModalCounter").value ;
  document.getElementById("totalModalCounter").value = Number(totalModalCount) + 1 ;

// increment the modal in session counter
let sessionSkintyModalCount = sessionStorage.getItem("sessionSkintyModalCount") ;
let new_sessionSkintyModalCount ;
 if (sessionSkintyModalCount) {
 new_sessionSkintyModalCount = Number(sessionSkintyModalCount) + 1 ;
} else {
 new_sessionSkintyModalCount = 1 ;
}
 sessionStorage.setItem("sessionSkintyModalCount", new_sessionSkintyModalCount);
  
// select the type of call to the src 
let y = x.id ;
let z = y.search("Query") ;
let t = y.search("Theme") ;
let u = y.search("Float");
let v = y.search("Url") ;
let btnType ; 
if (z > -1) {btnType = "Query";} else if (t > -1) {btnType = "Theme";} else if (u > -1) {btnType = "Float";} else if (v > -1) {btnType = "Url";}
if (btnType == "Float") {
  openSkintyModalFloat ()
  } else if (btnType == "Theme") {
  openSkintyModalTheme (x)
  } else if (btnType == "Query") {
  openSkintyModalQuery (x)
  } else if (btnType == "Url") {
  openSkintyModalUrl (x)
 }
showAvailableBtns()	
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
let target_urlM = skintyPageUrl + "?promb=" + prombM  + "&queryb=" + "&themeb=" + themebM + "&formatb=" + formatbM + "&showb=" + showbM ;
document.getElementById("skintyframe").src = target_urlM ;
}


function openSkintyModalTheme (x) {
let prombM = document.getElementById("promb").value ;
let formatbM = "open" ;
let showbM = "show" ;
let themebM = x.value ;
let querybM = "" ;
let target_urlM = skintyPageUrl + "?promb=" + prombM  + "&queryb=" + querybM + "&themeb=" + themebM + "&formatb=" + formatbM + "&showb=" + showbM ;
document.getElementById("skintyframe").src = target_urlM ;
}


function openSkintyModalQuery (x) {
let prombM = document.getElementById("promb").value ;
let formatbM = "open" ;
let showbM = "show" ;
let themebM = "" ;
let querybM = x.value ;
let target_urlM = skintyPageUrl + "?promb=" + prombM  + "&queryb=" + querybM + "&themeb=" + themebM + "&formatb=" + formatbM + "&showb=" + showbM ;
document.getElementById("skintyframe").src = target_urlM ;
}

function openSkintyModalUrl (x) {
let target_urlM = x.value ;
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
document.getElementById("skintyframe").src = skintyPageUrl + "/zendesk-widget.html" ;
}

function flamingo () {
document.getElementById("skintyframe").src = "https://flam3.goodbarber.app" ;
}

function skintyPage () {
document.getElementById("skintyframe").src = skintyPageUrl ;
}

function welcomeOffer () {
document.getElementById("skintyframe").src = "https://www.skintifique.me/welcome-offer/?nsfs" ;
}

function callUs () {
document.getElementById("skintyframe").src = skintyPageUrl + "/call_us.html" ;
}
