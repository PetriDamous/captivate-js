var whchCaption;
var cptnWindow;
function mkCaptionWndow()
{
        cptnWindow=window.open("","captionWindow","height=450, width=373, menubar=no, scrollbars=yes");
        cptnWindow.focus();
}
function setCptnWndw()
{
        mkCaptionWndow();
        mkCptnCntnt();
        cptnWindow.document.write(cpntWndowText);
        cptnWindow.document.close();
}
function mkCptnCntnt()
{
        cpntWndowText="<html>"
        cpntWndowText+="<head>"
        cpntWndowText+="<title>FAST Course Close Caption PopupWindow</title>"
        cpntWndowText+="<link href='../utils/fns_fas_style.css' rel='stylesheet' type='text/css' />"
        cpntWndowText+="</head>"
        cpntWndowText+="<body>"
        cpntWndowText+="<img src='../commonimg/captionshdr.jpg' alt='Glossary for FAST Course' width='336' height='60' />"
        cpntWndowText+="<div id='captionTxt'>"
        cpntWndowText+=caption[whchCaption]
        cpntWndowText+="</div>"
        cpntWndowText+="<div>"
        cpntWndowText+="<a href='javascript:self.close()'>Close window</a>"
        cpntWndowText+="</div>"
        cpntWndowText+="</body>"
        cpntWndowText+="</html>"
}
function checkCptnWndw()
{
    if(cptnWindow && !cptnWindow.closed)
    {
        mkCptnCntnt();
        cptnWindow.document.write(cpntWndowText);
        cptnWindow.document.close();
    }
}