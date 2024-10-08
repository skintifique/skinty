<!-- Start script to load top menu images (desktop) only when user needs them -->
//let iqitmegamenu_imgs = document.getElementsByClassName("mega-menu-imgs") ;
//document.getElementById("header").addEventListener("mouseover",loadMenuImages) ;
//document.addEventListener("scroll",loadMenuImages) ;

//function loadMenuImages () {
//	for (let i = 0; i < iqitmegamenu_imgs.length; i++) {
//	let src = iqitmegamenu_imgs[i].getAttribute("data-menu-src") ;
//	iqitmegamenu_imgs[i].src = src ;
//		}
//}
	
<!-- End script to load top menu images (desktop) only when user needs them -->


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
// document.getElementById("helpPopupBtnImg").src = "https://media.giphy.com/media/L0rdnflIRAngVsDpxJ/giphy.mp4" ;
// url for skintypage
let skintyPageUrl= "https://skintifique.github.io" ;
//let skintyPageUrl= "https://new.skintifique.me/" ;

// HELP CENTER POPUP TRIGGERS AND PARAMETERS
let skintySessionPage = sessionStorage.getItem("skintySessionPage") ;
let floatingBtnPopUp_displayPage = document.getElementById("floatingBtnPopUp_displayPage").value ;
let skintySessionPage_updated ;
if (skintySessionPage) {
	skintySessionPage_updated = parseInt(skintySessionPage) + 1 ;
} else {
	skintySessionPage_updated = 1 ;
}	
sessionStorage.setItem("skintySessionPage",skintySessionPage_updated) ;
// the parameters just above may be used when assessing whether to show SkintyModal on exit, while code below is used to trigger the HelpPopup automatically
// at the present time, the code below is inactivated. the if condition will need to be verified before reactivating
//let nbHelpPopupOpen = sessionStorage.getItem("nbHelpPopupOpen");
//if ((nbHelpPopupOpen != "1") && (skintySessionPage_updated == floatingBtnPopUp_displayPage)) {
// window.setTimeout(openHelpPopup, 4000);
// window.setTimeout(showFbMessengerWidget, 4500);
// }

// LOCALISATION
let pageUrl = window.location.href ;
let welcomeTextHelpPopup ;
let showOnExit ;
// BELOW 2 VARIABLES ARE TO ADD TEXT ABOVE THE DISCOUNT TABLE ON PRODUCT PAGES
let above_table_text = document.createElement("p");
let discount_table = document.getElementsByClassName("table-product-discounts")[0] ;

if (pageUrl.includes("/fr/")) {
welcomeTextHelpPopup = document.getElementById("text_for_welcomeTextHelpPopupFR").value ;
show_on_exit = document.getElementById("show_on_exitFR").value ;
show_digital_assistant = document.getElementById("show_digital_assistantFR").value ;
document.getElementById("email_link_popup").href = "https://www.skintifique.me/fr/72-contactez-nous" ;
document.getElementById("email_link_modal").href = "https://www.skintifique.me/fr/72-contactez-nous" ;
document.getElementById("faq_link_popup").href = "https://www.skintifique.me/fr/58-faq" ;
above_table_text.innerText = "Prenez-en plusieurs: bon pour votre peau, bon pour votre portefeuille, bon pour la planete.";
} else {
welcomeTextHelpPopup = document.getElementById("text_for_welcomeTextHelpPopupEN").value ;
show_on_exit = document.getElementById("show_on_exitEN").value ;
show_digital_assistant = document.getElementById("show_digital_assistantEN").value ;
above_table_text.innerText = "Order several: good for your skin, good for your wallet, good for the planet.";
}

//discount_table.insertAdjacentElement("beforebegin",above_table_text);
document.getElementById("welcomeTextHelpPopup").innerHTML = welcomeTextHelpPopup ;
if (show_digital_assistant == "no") {
document.getElementById("skinTyBtnInModal").style.display = "none";
document.getElementById("ModalBtnFloat").style.display = "none";
}

//document.getElementById("show_on_exit").innerHTML = show_on_exit ;//
// END OF LOCALISATION

// ADD SCRIPT TO ADD BANNER TEXT BEFORE PRICE DISCOUNT TABLE ON PRODUCT PAGE - SHOULD BE TOSSED: ALREADY INCLUDED ABOVE
//  let above_table_text = document.createElement("p");
//  above_table_text.innerText = "Good for your skin, good for your wallet, good for the planet.";
//  let discount_table = document.getElementsByClassName("table-product-discounts")[0] ;
//  discount_table.insertAdjacentElement("beforebegin",above_table_text);
// END SCRIPT TO ADD BANNER TEXT BEFORE PRICE DISCOUNT TABLE ON PRODUCT PAGE 

//  SCRIPT TO MAKE FIRST PAYMENT OPTION VISIBLE AND CORRESPONDING RADIO BTN CKECKED ON PAYMENT PAGE
// if ((pageUrl.includes("/en/order")) || (pageUrl.includes("/fr/commande")))  {
// let payment_option_1 = document.getElementById("payment-option-1") ;
// let pay_with_payment_option_1_form = document.getElementById("pay-with-payment-option-1-form") ;
// payment_option_1.checked = true ;
// if (pay_with_payment_option_1_form) {
// 	pay_with_payment_option_1_form.style.display = "block" ;	
// 	} 
// }
// END SCRIPT TO MAKE FIRST PAYMENT OPTION VISIBLE AND CORRESPONDING RADIO BTN CKECKED ON PAYMENT PAGE


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
let showOnExit = show_on_exit ;
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
if (show_digital_assistant == "yes") {
if (floatingBtn_display == "all") {
document.getElementById("ModalBtnFloat").style.display = "block" ;
} else if (this_page_url.includes(floatingBtn_display)) {
document.getElementById("ModalBtnFloat").style.display = "block" ;
} else if (floatingBtn_display.length == 0) {
document.getElementById("ModalBtnFloat").style.display = "block" ;
} else {
document.getElementById("ModalBtnFloat").style.display ="none" ;
}
}
//the above code does not apply if show_digital_assistant has been set to "no": see Localisation code above
	
if (deviceType == "mobile") {
document.getElementById("divSkintyFrame").className ="divSkintyForIframe" ;
}

// When the user clicks on floating button (help button) div, open the popup
function openHelpPopup() {
      //     window.fbAsyncInit = function() {
      //     FB.init({
      //       xfbml            : true,
      //       version          : "v9.0"
      //     });
      //   };
      //   (function(d, s, id) {
      //   var js, fjs = d.getElementsByTagName(s)[0];
      //   if (d.getElementById(id)) return;
      //   js = d.createElement(s); js.id = id;
      //   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      //   fjs.parentNode.insertBefore(js, fjs);
      // }(document, "script", "facebook-jssdk"));

  // (function() {
  //   var el = document.createElement("div");
  //   el.className = "fb-customerchat";
  //   el.setAttribute("page_id", "592541754225652");
  //   el.setAttribute("attribution", "setup_tool");
  //   el.setAttribute("greeting_dialog_display", "hide");
  //   document.body.appendChild(el);
  // })();
	
// (function() {
// let script1 = document.createElement("script");
// script1.setAttribute("id", "ze-snippet");
// script1.setAttribute("src", "https://static.zdassets.com/ekr/snippet.js?key=a11224ff-78c1-49da-8419-1a8006595ef5");
// let pZendesk = document.getElementById("pZendesk") ;
// pZendesk.appendChild(script1);
//  })();

// setTimeout(function(){ hideZend(); }, 500);
	
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
//let fbMsgDiv = document.getElementById("fbMsgDiv") ;
 // let fbMsgDivDisplay = fbMsgDiv.style.display ;
//  if (fbMsgDivDisplay === "block") {
  document.getElementById("fbMsgDiv").style.display = "none" ;
 // }
  showAvailableBtns() ;
	
}

// function hideZend () {
// let launcher = document.getElementById("launcher") ;
// if (launcher) {
// launcher.style.display="none";	
// } else {
// setTimeout(function(){ hideZend(); }, 20);
// }	
// }
	
<!-- END display floating button and identification deviceType -->  
  
<!-- display buttons inside floating button pop-up -->  
// the start and end times to show the Help (zendesk) button can be set up below. In the present vs, they are all set up so that the button is available at all times and days, except between 23:59 and 00:01, and between 12:00 and 12:01 
function showAvailableBtns() {
  let availability ;
let start_available1 = "00:01" ;
let dateUTC_start1 = new Date("2021-01-01T" + start_available1 + "Z") ;
let hour_start1 = dateUTC_start1.getUTCHours();
let end_available1 = "12:00" ;
let dateUTC_end1 = new Date("2021-01-01T" + end_available1 + "Z") ;
let hour_end1 = dateUTC_end1.getUTCHours();
let start_available2 = "12:01" ;
let dateUTC_start2 = new Date("2021-01-01T" + start_available2 + "Z") ;
let hour_start2 = dateUTC_start2.getUTCHours();
let end_available2 = "23:59" ;
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
  let saturday = "yes" ;
  let saturday_start = "00:01" ;
  let dateUTC_sat_start = new Date("2021-01-01T" + saturday_start + "Z") ;
  let hour_sat_start = dateUTC_sat_start.getUTCHours();
  let saturday_end = "23:59" ;
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
  let sunday = "yes" ;
  let sunday_start = "00:01" ;
  let dateUTC_sun_start = new Date("2021-01-01T" + sunday_start + "Z") ;
  let hour_sun_start = dateUTC_sun_start.getUTCHours();
  let sunday_end = "23:59" ;
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
  // document.getElementById("openChatBtn").style.display = "block" ;
  document.getElementById("ModalBtnUrl2").style.display = "none" ;
  document.getElementById("callUsBtnInModal").style.display = "none" ;	 
  document.getElementById("chatBtnInModal").style.display = "inline" ;	  
  } else {
  // document.getElementById("openChatBtn").style.display = "block" ;
  document.getElementById("ModalBtnUrl2").style.display = "none" ;
  document.getElementById("callUsBtnInModal").style.display = "none" ;	 
  document.getElementById("chatBtnInModal").style.display = "inline" ;		  
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

document.addEventListener("click", function(){
let x = event.target ;
let x_class = x.className ;
let y = x.parentElement ;
let y_class = y.className ;
if (x_class.includes("openInSkintyModal")) {
// document.getElementById("dev1").innerHTML = "Element clicked7";
  openSkintyModal(x) ;
 } else if (x_class.includes("openHelpPopup")) {
  openHelpPopup() ;
//} 
// desactivation des scripts openAccordion on 20211123 - reactivated with new condition on 20220111
}	else if (x_class.includes("openAccordion")) {
// hide all the Elements with class accordionContent //
let all_accordions = document.getElementsByClassName("accordionContent") ;
for (let i = 0; i < all_accordions.length; i++) {
    all_accordions[i].style.display = "none";
     } 	
let x_value = x.value ;
let classToOpen = x_value ;
let elementsToHide = document.getElementsByClassName(classToOpen) ;
for (let i = 0; i < elementsToHide.length; i++) {
     let z = elementsToHide[i].style.display ;
     if (!z) {
     elementsToHide[i].style.display = "block";
     } else if (z == "block") {
     elementsToHide[i].style.display = "none";
     } else {
     elementsToHide[i].style.display = "block";
    }
     }
} else if (y_class.includes("openInSkintyModal")) {
// document.getElementById("dev1").innerHTML = "Element clicked7";
  openSkintyModal(x) ;
 } else if (y_class.includes("openHelpPopup")) {
  openHelpPopup() ;
//} 
// desactivation des scripts openAccordion on 20211123 reactivated on 2022011 with new conditions
} 	else if (y_class.includes("openAccordion")) {
// document.getElementById("dev1").innerHTML = "test7" ;
let y_value = y.value ;

//do not manage if this is for MILA pages	
//if ((currentURL.includes("https://www.skintifique.me/shop/en/150-mila") || (currentURL.includes("https://www.skintifique.me/shop/fr/150-mila")) {
     //do nothing ! this probably created skinty to stop working
//} else	{
let classToOpen = y_value ;
let elementsToHide = document.getElementsByClassName(classToOpen) ;
for (let i = 0; i < elementsToHide.length; i++) {
     let z = elementsToHide[i].style.display ;
     if (!z) {
     elementsToHide[i].style.display = "block";
     } else if (z == "block") {
    elementsToHide[i].style.display = "none";
    } else {
    elementsToHide[i].style.display = "block";
    }
    }
}
//} COMMENTED OUT AS SKINTY DOES NOT SEEM TO WORK ANYMORE 20211122   
});


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
document.getElementById("skintyframe").src = "https://new.skintifique.me/en/welcome-offer/?nsfs" ;
}

//<!-- url to Uneeq 202107 test https://creator.us.uneeq.io/try/57ae3416-f8f7-4fae-aec1-d5c34fa749cc-->//

function callUs () {
document.getElementById("skintyframe").src = skintyPageUrl + "/call_us.html" ;
}

<!-- Start of script to get add-to-cart buttons on product pages to get sticky -->
//let pageUrlSticky = window.location.href ;
//let elemRectTop ;
//let bodyRectTop ;
//if (pageUrlSticky.includes("/shop/")) {
//let x = document.getElementsByClassName("add-to-cart");
//let elemToStick = x[0] ;
//let elemToStickClass = elemToStick.className ;
//if ((elemToStickClass.includes("btn-primary")) && (elemToStickClass.includes("btn-lg"))) {
//let elemRect = elemToStick.getBoundingClientRect() ;
//elemRectTop = elemRect.top ;
//window.onscroll = function() {myFunctionSticky()};
//}

//function myFunctionSticky() {
//var bodyRect = document.body.getBoundingClientRect() ;
//bodyRectTop = bodyRect.top ;
//var offsetRect = elemRectTop + bodyRectTop ;
////document.getElementById("dev4").innerHTML = offsetRect ;
//if (offsetRect < 40 ){
//// required to force repaint on webkit
//      document.getElementsByClassName("add-to-cart")[0].style.setProperty("transform", "translateZ(0)");
//      document.getElementsByClassName("add-to-cart")[0].classList.add("sticky") ;
//// this will remove the property 1 frame later
//     requestAnimationFrame(() => {
//     elemToStick.style.removeProperty("transform");         
//        });
//  } else {
//// required to force repaint on webkit
//     document.getElementsByClassName("add-to-cart")[0].style.setProperty("transform", "translateZ(0)");
//     document.getElementsByClassName("add-to-cart")[0].classList.remove("sticky") ;
//// this will remove the property 1 frame later
//     requestAnimationFrame(() => {
//     elemToStick.style.removeProperty("transform");     
//        });
//  }
//}
//}
<!-- End of script to get add-to-cart buttons on product pages to get sticky -->

<!-- Start script to add additional style to specific pages -->
// THE SCRIPT BELOW ADDS A header-styleX STYLE TO THE #CMS WHEN THE PAGE CONTAINS AN #additional-header-style element with the value="header-styleX"
// THE SCRIPT WORKS WHEN MOVED TO TOP OF THIS FILE. HOWEVER THE CUSTEX IS NOT GREAT HAS SHE CAN SEE THE PAGE MOVING UP WHEN THE JS PLAYS
// THIS SCRIPT IS THEREFORE COMMENTED OUT FOR NOW AND THE OPERATION IS DONE THROUGH CSS DIRECTLY ON THE THEME
//let additional_header_style = document.getElementById("additional-header-style").value ;
//if (additional_header_style) {	
//let cms_elmt = document.getElementById("cms") ;
//cms_elmt.classList.add(additional_header_style) ;
//}

// THE SCRIPT BELOW ADDS A product-styleX STYLE TO THE PRODUCT PAGE #wrapper WHEN THE PAGE CONTAINS AN #additional-product-style element with the value="product-styleX"
let additional_product_style = document.getElementById("additional-product-style") ;
if (additional_product_style) {	
let wrapper_elmt = document.getElementById("wrapper") ;
wrapper_elmt.classList.add(additional_product_style.value);
}
 
<!-- End script to add additional style to specific pages -->


//<!-- Start of skintifique Zendesk Widget script -->
//<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a11224ff-78c1-49da-8419-1a8006595ef5"> </script>
//<script type="text/javascript">
//  zE('webWidget', 'setLocale', 'en_us');
// </script>
<!-- End of skintifique Zendesk Widget script -->
	
<!-- Start of skintifique Zendesk Widget script -->
//<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a11224ff-78c1-49da-8419-1a8006595ef5"> </script>
//  <script type="text/javascript">
//  zE('webWidget', 'setLocale', 'en_us');
//  zE("webWidget", "hide");
//  </script>
	
//   function openChat() {
	
//   let current_url = window.location.href ;	  
//   let lang ;
//   if (current_url.includes("/fr/")) {
// 	  lang = "fr";
//    } else {	  
// 	   lang = "en_us" ;
//   }
  
//   zE('webWidget', 'setLocale', lang);	  
//   zE("webWidget", "show");
//   zE("webWidget", "open");
//   document.getElementById("myPopupDiv").style.display = "none"; 
//   zE("webWidget:on", "close", function() {
//   zE("webWidget", "hide");
//   document.getElementById("myPopupDiv").style.display = "block";
// })	  
// };
<!-- End of skintifique Zendesk Widget script -->
<!-- Start Typeform script -->
(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
<!-- End of Typeform script -->
