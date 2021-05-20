$(document).ready(function() {

    ///////////// Used to check for browser type ////////////////////////////////
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    
    /////////////////////// Tool tips, Elements, ID ///////////////////////////////////////

    var toolTipArray = [
        "Menu",
        "Glossary",
        "References",
        "Exit",
        "Closed Caption",
        "Play",
        "Pause",
        "Previous",
        "Next",
        "FAST_GUI"
    ];

    toolTipArray.forEach(function(elm) {          
        var setDataAttr;

        if (isIE) {                
            setDataAttr = $("p:contains(" + elm + ")" ).parent().parent();
            
        } else {
            setDataAttr = $('div[aria-label="' + elm + " " + '"]');
        }

        setDataAttr.attr("data-button", elm);

        if (elm !== 'FAST_GUI') {
            setDataAttr.attr("title", elm);
        }
        
        setDataAttr.css("cursor", "pointer");    
        
    });

    var play = document.createElement('div');
    var pause = document.createElement('div');
    play.id = 'playBtn';
    play.title = 'Play';    
    pause.id = 'pauseBtn';
    pause.title = 'Pause';

    $('#div_Slide').append(play);
    $('#div_Slide').append(pause);

    $('#playBtn').css({
        'position': 'absolute',
        'bottom': '7px',
        'right': '234px',
        'width': '34px',
        'height': '36px',
        'z-index': '3000',
        'cursor': 'pointer'
    });

    $('#pauseBtn').css({
        'position': 'absolute',
        'bottom': '7px',
        'right': '195px',
        'width': '34px',
        'height': '36px',
        'z-index': '3000',
        'cursor': 'pointer',
    });

    $('#playBtn').click(function() {
        cpCmndResume = true;
    });

    $('#pauseBtn').click(function() {
        cpCmndPause = true;
    });
    
    $('div[data-button="FAST_GUI"]').css("z-index", "-1");    
});