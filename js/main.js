///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
//=============================================
//           JQUERY DOCUMENT READY            =
//=============================================
$("document").ready(function() {























}); //document.ready
//-----  End of JQUERY DOCUMENT READY   -----//
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
//=============================================
//=============================================
//=============================================
//             JQUERY WINDOW LOAD            ==
//=============================================
//=============================================
//=============================================
$(window).load(function() {












}); //windows.load
//-----  End of   JQUERY WINDOW LOAD   -----//
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


//=============================================
//              PRINT WINDOW SIZE             =
//=============================================
var windowSizePrint = function(argument) {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  if (!$("#window-size-info").length) {
    $('body').append('<div id="window-size-info"><div><span class="w"></span> X <span class="h"></span></div><style type="text/css">#window-size-info{z-index:9999999;position:fixed;right:0px;bottom:30px;padding:3px 8px;font-family:"Open Sans","Lato",Tahoma;font-size:15px;color:#fff;background-color:#000;box-shadow:0 0 0 2px#fff;}</style></div>');
  }
  $('#window-size-info span.w').text(windowWidth);
  $('#window-size-info span.h').text(windowHeight);
}
$(document).ready(windowSizePrint);
$(window).load(windowSizePrint);
$(window).resize(windowSizePrint);
//-------  End of print window size  --------//

//////////////////////
// browser function //
//////////////////////
var nua = navigator.userAgent;
window.nua = nua;
var browser = browser || {};
browser = {
  nua            : nua,
  html           : $('html').attr('class'),
  webkit         : /webkit/gi.test(nua),
  gecko          : /gecko/gi.test(nua),
  mobile         : /Mobile/gi.test(nua),
  windows        : /Windows/gi.test(nua),
  mac            : /Mac OS/gi.test(nua),
  chrome         : /Chrome/gi.test(nua),
  firefox        : /Firefox/gi.test(nua),
  apple          : /Safari/gi.test(nua),
  ipod           : /iPod/gi.test(nua),
  iphone         : /iPhone/gi.test(nua),
  ipad           : /iPad/gi.test(nua),
  android        : /Android/gi.test(nua),
  androidVersion : this.android ? nua.match(/Android ([0-9\.]+);/)[1] : "",
  ie             : /MSIE/gi.test(nua),
  ie11           : /MSIE 11/gi.test(nua),
  ie10           : /MSIE 10/gi.test(nua),
  ie9            : /MSIE 9/gi.test(nua),
  ie8            : /MSIE 8/gi.test(nua),
  ie7            : /MSIE 7/gi.test(nua),
  ie6            : /MSIE 6/gi.test(nua),
  operaMini      : /Opera Mini/gi.test(nua),
  ucBrowser      : /UCBrowser/gi.test(nua),
  x64            : /WOW64/gi.test(nua),
  x86            : /WOW86/gi.test(nua),
  tablet         : $(window).width() >= 768 && this.mobile,
  desktop        : $(window).width() >= 768 && !this.mobile,
  phone          : $(window).width() < 768 && this.mobile,
};
window.browser = browser;
console.groupCollapsed("browser variables");
var browserVariables = "";
for (var prop in browser) {
  if (browser.hasOwnProperty(prop)) {
    console.log(prop + " : " + browser[prop]);
    browserVariables += prop + " : " + browser[prop] + "\n";
  }
}
console.groupEnd();
$(function() {
  $("#window-size-info > div").attr("title", browserVariables);
});