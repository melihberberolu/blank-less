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
$(document).ready(function() {





















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
(function(window, document, undefined) {
  //=============================================
  //              PRINT WINDOW SIZE             =
  //=============================================
  var isButtonInsertedToBody;
  var windowSizePrint = function() {
    if (!isButtonInsertedToBody) {
      document.body.insertAdjacentHTML("beforeend", '<div id="window-size-info"><div><span class="w"></span> X <span class="h"></span></div><style type="text/css">#window-size-info{z-index:9999999;position:fixed;right:0px;bottom:30px;padding:3px 8px;font-family:"Open Sans","Lato",Tahoma;font-size:15px;color:#fff;background-color:#000;box-shadow:0 0 0 2px#fff;}</style></div>');
      isButtonInsertedToBody = true;
    }
    document.getElementById("window-size-info").querySelector(".w").innerHTML = window.innerWidth;
    document.getElementById("window-size-info").querySelector(".h").innerHTML = window.innerHeight;
  }
  document.addEventListener("DOMContentLoaded", windowSizePrint);
  window.addEventListener("resize", windowSizePrint);
  //-------  End of print window size  --------//

  //////////////////////
  // browser function //
  //////////////////////
  var browser = {};
  window.browser = browser;
  browser.nua = navigator.userAgent;
  browser = {
    userAgent      : navigator.userAgent,
    htmlClass      : document.documentElement.classList,
    webkit         : /webkit/gi.test(this.nua),
    gecko          : /gecko/gi.test(this.nua),
    mobile         : /Mobile/gi.test(this.nua),
    windows        : /Windows/gi.test(this.nua),
    mac            : /Mac OS/gi.test(this.nua),
    chrome         : /Chrome/gi.test(this.nua),
    firefox        : /Firefox/gi.test(this.nua),
    apple          : /Safari/gi.test(this.nua),
    ipod           : /iPod/gi.test(this.nua),
    iphone         : /iPhone/gi.test(this.nua),
    ipad           : /iPad/gi.test(this.nua),
    android        : /Android/gi.test(this.nua),
    androidVersion : /Android/gi.test(this.nua) ? this.nua.match(/Android ([0-9\.]+);/)[1] : "",
    ie             : /MSIE/gi.test(this.nua),
    ie11           : /MSIE 11/gi.test(this.nua),
    ie10           : /MSIE 10/gi.test(this.nua),
    ie9            : /MSIE 9/gi.test(this.nua),
    ie8            : /MSIE 8/gi.test(this.nua),
    ie7            : /MSIE 7/gi.test(this.nua),
    ie6            : /MSIE 6/gi.test(this.nua),
    operaMini      : /Opera Mini/gi.test(this.nua),
    ucBrowser      : /UCBrowser/gi.test(this.nua),
    x64            : /WOW64/gi.test(this.nua),
    x86            : /WOW86/gi.test(this.nua),
    tablet         : window.outerWidth >= 768 && /Mobile/gi.test(this.nua),
    desktop        : window.outerWidth >= 768 && !/Mobile/gi.test(this.nua),
    phone          : window.outerWidth < 768 && /Mobile/gi.test(this.nua),
  };
  console.groupCollapsed("browser variables");
  var browserVariables = "";
  for (var prop in browser) {
    if (browser.hasOwnProperty(prop)) {
      console.log(prop + " : " + browser[prop]);
      browserVariables += prop + " : " + browser[prop] + "\n";
    }
  }
  console.groupEnd();
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("window-size-info").setAttribute("title", browserVariables);
  });
})(window, document);