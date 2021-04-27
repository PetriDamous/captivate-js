$(document).ready(function() {
        
    ///////////// Used to check for browser type ////////////////////////////////
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var isChrome = navigator.webkitGetUserMedia;  


    /////////////////////// Tool tips, Elements, ID //////////////////////////////////////
    var toolTipArray = [             
        "Back",
        "Next",                    
        "Help",                   
        "Resources"
    ];


    toolTipArray.forEach(function(elm, idx) {          
        var setDataAttr;

        if (isIE) {                
            setDataAttr = $("p:contains(" + toolTipArray[idx] + ")" ).parent().parent();
            
        } else {
            setDataAttr = $('div[aria-label="' + toolTipArray[idx] + " " + '"]');
        }
        
        setDataAttr.attr("data-button", toolTipArray[idx]);
        setDataAttr.attr("title", toolTipArray[idx]);
        setDataAttr.css("cursor", "pointer");                      
        
    });

});