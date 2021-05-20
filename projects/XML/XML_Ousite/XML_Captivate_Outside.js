// JavaScript source code

window.addEventListener("moduleReadyEvent", function () {

    window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", xml_request);


    function xml_request() {

        var terms = []
        var def = []
        var titles = []

        if (window.XMLHttpRequest) {

            var request = new XMLHttpRequest();

            request.open("GET", "XML_Captivate.xml", false);
            request.setRequestHeader("Content-Type", "text/xml");

            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    myFunction(this);
                    
                }
            };



            request.send();

        }

        function myFunction(xml) {

            var xmlDoc = xml.responseXML;

            

            $(xmlDoc).find("title").each(function () { titles.push($(this).text()); });

            $(xmlDoc).find("Term").each(function () { def.push($(this).text()); });

            $(xmlDoc).find("Term").each(function () { terms.push($(this).attr("name")); console.log($(this).text()); });

        }

        var termButtons = ["Term_1", "Term_2", "Term_3", "Term_4", "Term_5", "Term_6"]

        var setDef = "Click on term on the left to see definition"

        window.cpAPIInterface.setVariableValue("definition", setDef);

        window.cpAPIInterface.setVariableValue("Title", titles[0]);

        console.log("Title:" + titles[0]);

        for (i = 0; i < termButtons.length; i++) { window.cpAPIInterface.setVariableValue(termButtons[i], terms[i]); console.log("termButtons:" + termButtons[i], "terms:" + terms[i]); }

        for (i = 0; i < def.length; i++) { console.log("def:" + def[i]); }




    }
















});
