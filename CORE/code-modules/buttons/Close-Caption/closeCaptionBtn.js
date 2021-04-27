// CC button Captivate 9
$(getElement("Closed Caption", "obj")).click(function () {
    if (cpCmndCC === 0) {
        cpCmndCC = 1;
        cp.hide('ccClose');
        ccToolTip();
       
    } else {               
        cpCmndCC = 0;
        ccToolTip();
        
    }

});

//  CC button Captiavte 11
$(getElement("Closed Caption", "obj")).click(function () {
    ccToolTip();
});