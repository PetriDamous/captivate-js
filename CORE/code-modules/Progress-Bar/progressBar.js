// Controls position of progress bar
var proPos = 'absolute';
var proTop = '87%';
var proLeft = '6%';
var proWidth = '1123px';
var proHeight = '5px';


        ///////////////////// Setup and controls progress bar /////////////////////////////////////////////////////
        
        if (isProgress) {

            // Creates Progress Bar
            var playBar = document.createElement('input');            

            playBar.id = 'seekerBar';
            playBar.type = 'range';
            playBar.value = '0';
            playBar.step = '1';
            playBar.min = firstFrame;
            playBar.max = lastFrame;            
            
            
            // Places Progress Bar on slide
            $("#div_Slide").append(playBar);

            // Positions Progress Bar            
            $('#seekerBar').css({
                'position': proPos, 
                'top': proTop, 
                'left': proLeft,
                'width': proWidth,                
                'z-index': 3000,
                'height': proHeight                
            });

            // Disables playBar Control
            playBar.disabled = true;

            // Progress Bar style
            var sheet = document.createElement('style');            
            document.head.appendChild(sheet);
            sheet.innerHTML = progressStyle();
            
          cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", seekUpdate, "cpInfoCurrentFrame");                      
        }
            
        