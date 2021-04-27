$(document)
    .ready(function() {
        console.log(cpInfoDescription)
        cpCmndShowPlaybar = false;


        
        ///////////// Used to check for browser type ////////////////////////////////
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        var isChrome = navigator.webkitGetUserMedia;  
        
        /////////////// Component Properties ///////////////////////////
        
        // Turns Progress bar on and off
        var progress = false;

        // Turns Timer on and off
        var timer = false;
        
        // Controls the amount of time for rewind feature
        var rewindTime = 90;

        // Controls position of CC text box
        var ccLeft = '0px';
        var ccBottom = '96px';
        var ccWidth = '1280px';
        var ccHeight = '40px';

        // Controls TOC height
        var tocFooter = '585px';
        var tocContent = '509px';
        var toc = '605px'; 
        
        /////////////////////////// Global Variables ////////////////////////////////              
        
        // Grabs the list of slides from the project and splits them into an array
        var slides = cp.model.data.project_main.slides.split(',');         

        // Current Slide
        var currentSlide = cp.model.data[slides[window.cpInfoCurrentSlide - 1]];

        // lastFrame is the last frame for the current slide
        var lastFrame = currentSlide.to;

        // firstFrame is the starting frame 
        var firstFrame = currentSlide.from; 
        
        var slideAudio = currentSlide.audioName; 
        
        /////////////////////// Tool tips, Elements, ID ///////////////////////////////////////
        ////////////////////// 1 - Grabs GUI element    //////////////////////////////////////
        /////////////////////  2 - Sets Tool Tip        /////////////////////////////////////
        ////////////////////   3 - Grabs GUI element ID ////////////////////////////////////

        var btnPause = $("p:contains(Pause)").parent().parent();
        btnPause.prop("title", "Pause");
        btnPause.css("cursor", "pointer");      
        var pauseID = "" + btnPause.attr("id");
        
        var btnPlay = $("p:contains(Play)").parent().parent();
        btnPlay.prop("title", "Play");
        btnPlay.css("cursor", "pointer");
        var playID = "" + btnPlay.attr("id");

        var btnCC = $("p:contains(Closed Caption)").parent().parent();
        btnCC.prop("title", "Closed Caption");
        btnCC.css("cursor", "pointer");
        btnCC.css("z-index", "3000");        
        var ccID = "" + btnCC.attr("id");

        var btnMute = $("p:contains(Mute)").parent().parent();
        btnMute.prop("title", "Mute");               
        var muteID = "" + btnMute.attr("id");

        var btnUnmute = $("p:contains(Unmute)").parent().parent();
        btnUnmute.prop("title", "Unmute");                
        var unmuteID = "" + btnUnmute.attr("id");

        var btnReplay = $("p:contains(Replay)").parent().parent();
        btnReplay.prop("title", "Replay");              
        var replayID = "" + btnReplay.attr("id");

        var btnRewind = $("p:contains(Rewind)").parent().parent();
        btnRewind.prop("title", "Rewind");        
        var rewindID = "" + btnRewind.attr("id");

        var btnPrev = $("p:contains(Previous)").parent().parent();
        btnPrev.prop("title", "Previous");
        btnPrev.css("cursor", "pointer");        
        var prevID = "" + btnPrev.attr("id");

        var btnNext = $("p:contains(Next)").parent().parent();
        btnNext.prop("title", "Next");
        btnNext.css("cursor", "pointer");        
        var nextID = "" + btnNext.attr("id");

        var btnMenu = $("p:contains(Menu)").parent().parent();
        btnMenu .prop("title", "Menu");
        btnMenu.css("cursor", "pointer");        
        var menuID = "" + btnMenu .attr("id");

        var btnHelp = $("p:contains(Help)").parent().parent();
        btnHelp .prop("title", "Help");
        btnHelp.css("cursor", "pointer");        
        var helpID  = "" + btnHelp .attr("id");

        var btnOptions = $("p:contains(Options)").parent().parent();
        btnOptions.prop("title", "Options");
        btnOptions.css("cursor", "pointer");        
        var optionsID = "" + btnOptions.attr("id");

        var btnExit = $("p:contains(Exit)").parent().parent();
        btnExit.prop("title", "Exit");        
        var exitID = "" + btnExit.attr("id");

        var btnRes = $("p:contains(Resources)").parent().parent();
        btnRes.prop("title", "Resources");
        btnRes.css("cursor", "pointer");        
        var resID = "" + btnRes.attr("id");


   
        ///////////////////////// Nav bar funtions ////////////////////////////
        
        // When mute is on keeps audio muted on slide change
        function stayMute(){ 
            if(cpCmndMute == true){ 
                cpCmndMute = true; 
            }
            else{ cpCmndMute = false } 
        }

        // Hides and shows play and pause
        function hidePlay(){
            // hide play
            cp.hide(playID);
            // show pause
            cp.show(pauseID);     
        }

        // Rests UI controls when entering new slide
        function slideRest(){
            cpCmndTOCVisible = false;
            cp.show(pauseID);
            cp.hide(playID);
            stayMute();
        }        
         
        slideRest();

        // Closes TOC and shows pause button when new slide is entered
        cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", slideRest);

        //////////////////////Nav bar control/////////////////////////////

        customSettings(cpInfoDescription);

        // Pause
        $(btnPause).click(function(){
            if (cpInfoCurrentFrame < (lastFrame - 1)) {
                cpCmndPause = true;                
                cp.hide(pauseID);               
                cp.show(playID);  
            } else {
                cpCmndPause = true;                
            }
        });

        // Play
        $(btnPlay).click(function(){
            if(cpInfoCurrentSlideLabel === "Intro Video") {
                cp.hide("SmartShape_114");
                cp.hide("Image_372");
                cp.hide("Image_371");
                cp.hide("Image_370");
            } 

            if (cpInfoCurrentFrame < (lastFrame - 1)) {              
                cpCmndResume = true;
                hidePlay();
                stayMute();                
            } else {
                cpCmndPause = true;
                hidePlay();                 
            }   

        });

        // Rewind
        $(btnRewind).click(function(){
            //////////////////////////////////// Controls the rewinding of a slide ///////////////////////////////            
            
            if(cpInfoCurrentFrame != firstFrame && cpInfoCurrentFrame > (firstFrame + rewindTime)){
                cpCmndGotoFrameAndResume = cpInfoCurrentFrame - rewindTime;
                hidePlay();
                stayMute();
                cpCmndTOCVisible = false;       
            	}
            
            else{
                cpCmndGotoFrameAndResume = firstFrame
                hidePlay();
                stayMute();
                cpCmndTOCVisible = false;        			
            	}
        });

        // Replay button
        $(btnReplay).click(function(){
            // cpCmndGotoFrameAndResume = firstFrame;
            cpCmndGotoFrame = firstFrame;
            
            if (cpCmndPause) {
                setTimeout(function() {
                    cpCmndResume = true;
                }, 300);
            }            
            
            
            if(cpCmndTOCVisible == true){
                // Hides TOC
                cpCmndTOCVisible = false;
                hidePlay();
                stayMute();
            }
            else{ 
                hidePlay();
                stayMute(); 
            }
        });

        // Mute        
        $(btnMute).click(function(){
            cpCmndMute = true; 
            cp.hide(muteID);
            cp.show(unmuteID);       
        });

        // Unmute
        $(btnUnmute).click(function(){
            cpCmndMute = false;            
            cp.hide(unmuteID);
            cp.show(muteID);       
        });
        
        // CC button
        function ccToolTip(){
            if (cpCmndCC == false) {
                $(btnCC).prop("title", "Closed Caption Open");         
               } else if (cpCmndCC == true) {
                $(btnCC).prop("title", "Closed Caption Close");

                $("#cc").css({
                    "left": ccLeft, 
                    "bottom": ccBottom, 
                    "width": ccWidth,
                    "height": ccHeight
                });

                cp.hide('ccClose');
               }
        }

        $(btnCC).click(function() {

            if (cpCmndCC == false) {
                cpCmndCC = true;
                ccToolTip();
            } else {               
                cpCmndCC = false;
                ccToolTip();
            }
       
        });

        ccToolTip();        

        ///////////////// Menu/TOC Button Controls ////////////////         
           
        // Menu Funcitons

        // Controls TOC height

        $('#tocFooter').css('top', tocFooter);
        $('#tocContent').css('height', tocContent);
        $('#toc').css('height', toc);

        $(btnMenu).click(function(){
            if(cpInfoCurrentSlideLabel === "Pre-Test" || cpInfoCurrentSlideLabel === "Pre-Test Results") {
                return;
            } else {
                if (cpCmndTOCVisible == false) {
                    cpCmndTOCVisible = true;
                } else {
                    cpCmndTOCVisible = false;
                }
            }           

        });
        
        
        function customSettings (lesson) {

            var lessonArray = ["WQP_L2", "WQP_L3", "WQP_L4", "WQP_L5"];

            for (var i = 0; i < lessonArray; i++) {
                if (lessonArray[i] === lesson) {
                    ccBottom = '51px';
                    break;
                }
            }
                
            if (lesson === "WQP_L1") {
                if(cpInfoCurrentSlideLabel === "Intro Video") {
                    cpCmndPause = true;
                }
            }


            if (cpInfoCurrentSlideLabel === "Pre-Test" || !slideAudio) {
                cp.hide(playID);
                cp.hide(pauseID);
                disableMenu();              
            }
            

            if (cpInfoCurrentSlideLabel === "Pre-Test Results") {
                disableMenu();
            }
            
            function disableMenu () {
                var menuBtn = document.querySelectorAll('div[title="Menu"]');               

                for (var i = 0; i < menuBtn.length; i++) {                    
                    var menuItemCanvas = document.getElementById(menuBtn[i].id + "c");                    
                    menuItemCanvas.style.opacity = ".5";
                    menuBtn[i].style.cursor = "not-allowed";
                } 
            }

        }
 
    });