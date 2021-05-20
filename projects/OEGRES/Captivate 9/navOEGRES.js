 $(document)
    .ready(function() {       
        
        /////////////////////// Tool tips, Elements, ID ///////////////////////////////////////
        ////////////////////// 1 - Grabs GUI element    //////////////////////////////////////
        /////////////////////  2 - Sets Tool Tip        /////////////////////////////////////
        ////////////////////   3 - Grabs GUI element ID //////////////////////////////////// 

        var backBg = $("p:contains('Back')").parent().parent();
        var backBgId = "" + backBg.attr('id');


        var btnBack = document.getElementById('Btn_bck' + cpInfoCurrentSlide);        
        btnBack.title = 'Back';
        var backID = btnBack.id;

        var btnNext = document.getElementById('Btn_nxt' + cpInfoCurrentSlide);
        btnNext.title = 'Next';        
        var nextID = btnNext.id;

        var btnHelp = $("p:contains('Help')").parent().parent();
        btnHelp.prop("title", "Help");        
        var helpID  = "" + btnHelp.attr("id");

        var btnRes = $("p:contains('Resources')").parent().parent();
        btnRes.prop("title", "Resources");        
        var resID = "" + btnRes.attr("id");


        //////////////////////////////////////////////
        //////////// Hides Back Button On 1st Slide
        /////////////////////////////////////////////

        if (cpInfoCurrentSlide === 1) {
            cp.hide(backID);
            cp.hide(backBgId);
        }



    });