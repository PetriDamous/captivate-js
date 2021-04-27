$(document).ready(function() {

    // Controls TOC height
    var tocFooter = '585px';
    var tocContent = '509px';
    var toc = '605px';

    $('#tocFooter').css('top', tocFooter);
    $('#tocContent').css('height', tocContent);
    $('#toc').css('height', toc);

    ///////////// Used to check for browser type ////////////////////////////////
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    var toolTipArray = [
        "Previous",
        "Next",
        "Menu",
        "Help",
        "Exit",
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

    slideRest();

    if (disableMenuAction()) {
        disableMenuStyle();
    }

    ///////////////// Menu/TOC Button Controls ////////////////
    $(getElement("Menu", "obj")).click(function () {
        
        if (disableMenuAction()) return;
    
        if (cpCmndTOCVisible === 0) {
            cpCmndTOCVisible = 1;
        } else {
            cpCmndTOCVisible = 0;
        }
            
    });

    function disableMenuAction () {
        var slideLabel = cpInfoCurrentSlideLabel.toLocaleLowerCase().trim();
        var returnValue;
        
        var labelArray = ["question", "interaction_1", "interaction: cerebellum", "check your knowledge"];        

        for (var i = 0; i < labelArray.length; i++) {
            if (slideLabel.indexOf(labelArray[i]) !== -1) {
                returnValue = true;
                break;
            }
        }

        return returnValue;
    }

    // Grabs element
    function getElement (attribute, property) {
        return property === "obj" ?  $('div[data-button="' + attribute + '"]') : $('div[data-button="' + attribute + '"]').attr("id");            
    }

    // Rests UI controls when entering new slide
    function slideRest() {
        cpCmndTOCVisible = 0;
    }

    // Gives menu a disabled style
    function disableMenuStyle () {
        var menuBtn = document.querySelectorAll('div[title="Menu"]');               
        for (var i = 0; i < menuBtn.length; i++) {                    
            var menuItemCanvas = document.getElementById(menuBtn[i].id + "c");                    
            menuItemCanvas.style.opacity = ".5";
            menuBtn[i].style.cursor = "not-allowed";
        } 
    }
});