import {ccTextArray} from '../../../ccText/ccText';

function createCCTextBox() {
    var $ccBox = document.createElement('div');
    var $ccPara = document.createElement('p');
    $ccBox.id = 'ccTextBox';
    $ccPara.id = 'ccParagraph';
    
    document.querySelector('#div_Slide').append(ccBox);
    document.querySelector('#ccTextBox').append(ccPara);

    var $ccTextBox = document.getElementById("ccTextBox");
    var $ccParagraph = document.getElementById("ccParagraph");

    var ccTextBoxCss = [
        ['position', 'absolute'],
        ['top', null],
        ['right', null],
        ['bottom', '50px'],
        ['left', null],
        ['margin-top', null],
        ['margin-right', null,],
        ['margin-bottom', null],
        ['margin-left', null],
        ['padding-top', null],
        ['padding-right', null],
        ['padding-bottom', null],
        ['padding-left', null],
        ['width', '1198px'],
        ['height', '75px'],       
        ['background-color', 'rgba(179, 150, 0, .865)'],
        ['color', null],
        ['overflow-y', 'scroll'],
        ['overflow-x', null],
        ['z-index', 2000]
    ];

    var ccParagraphCss = [
        ['position', 'static'],
        ['top', null],
        ['right', null],
        ['bottom', null],
        ['left', null],
        ['margin-top', '5px'],
        ['margin-right', '16px'],
        ['margin-bottom', '5px'],
        ['margin-left', '16px'],
        ['padding-top', null],
        ['padding-right', null],
        ['padding-bottom', null],
        ['padding-left', null],            
        ['width', null],
        ['height', null],
        ['color', '#000'],
        ['font-size', '18px'],
        ['font-family', 'Myriad Pro'],
        ['font-weight', '700'],
        ['letter-spacing', '1px'],
        ['line-height', '24px']
    ];


    ccTextBoxCss.forEach(function(style) {
        $ccTextBox.style[style[0]] = style[1];
    })

    ccParagraphCss.forEach(function(style) {
        $ccParagraph.style[style[0]] = style[1];
    })

}

function displayCCText() {
    var slideLabel = cpInfoCurrentSlideLabel.trim().toLowerCase();  
    var $ccParagraph = document.getElementById('ccParagraph');  

    for (var i = 0; i < ccTextArray.length; i++) {

        if (ccTextArray[i].slide.trim().toLowerCase() === slideLabel) {
            $ccParagraph.textContent(ccTextArray[i].text);
            break;
        } else {
            $ccParagraph.textContent('No Audio');
        }
    } 

    cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function(){
        delete ccOnEnter;
    });
}

export function openCCBox() {
    var $ccTextBox = document.getElementById('ccTextBox');

    if (window.ccOnEnter === undefined) {
        window.ccOnEnter = true;
    }

    if (window.ccOnEnter) {            
        $ccTextBox.style.visibility = 'visible';
        createCCTextBox();
        displayCCText();
        window.ccOnEnter = !true;
    } else {                    
        $ccTextBox.style.visibility = 'hidden';
        window.ccOnEnter = true;
    }       
}