var cpInfoCurrentSlideLabel = "Check_On_Learning_MS01"; // Not needed in final version

var learningId = cpInfoCurrentSlideLabel.trim().slice(-4); // MC01

var questionType = learningId.trim().slice(0, 2); // MC

var parent = document.getElementById("div_Slide");

var questions = [
    {
        id: "TF01",
        answer: "true"
    },

    {
        id: "MC01",
        answer: "a"
    },

    {
        id: "MS01",
        answer: ["a", "d", "e"]
    }
];

// Grab current question
for (var i = 0; i < questions.length; i++) {
    if (questions[i].id === learningId) {
        filterButtons(questions[i]);
        break;
    }
}

function filterButtons (question) {
    var id = question.id;

    var children = parent.children;
    var childrenArray = Array.prototype.slice.call(children);
    
    var filteredButtons = childrenArray.filter(function(child) {  
        child.id = child.id.trim();            
        return child.id.slice(-4) === id && child.id.slice(0, 4) === "btn_";
    }); 
    
    buttonActions(question, filteredButtons);
}

function buttonActions (question, filteredButtons) {    
    var answer = question.answer;
    var isActive = true;
    var correctCounter = 0;

    parent.addEventListener("click", function(e) {       
        if (!isActive) return;

        var btn = filteredButtons.filter(function(elm) {
            return elm.id === e.target.id;
        });

        if (btn.length === 0) return;

        var btnId = btn[0].id;
        var btnValues = getBtnValues(btnId);
        var btnLabel = btnValues.btnLabel;
        var answerLabel = btnValues.answerLabel;

        $("#unlock_" + btnLabel).hide();

        if (questionType === "TF" || questionType === "MC") {
            if (answer === answerLabel) {
                $("#greenLock_" + btnLabel).show();
                isActive = false;
                console.log("Complete")
            } else {
                $("#redLock_" + btnLabel).show();
                isActive = false;
                console.log("Failed")
            }
        }
        
        if (questionType === "MS") {
            var isCorrect = answer.some(function(answer) {
                return answer === answerLabel;
            });
    
            if (isCorrect) {
                $("#greenLock_" + btnLabel).show();
                correctCounter++;
                if (correctCounter === answer.length) {
                    console.log("Finished")
                    isActive = false;                
                }
            } else {
                console.log(btnLabel)
                $("#redLock_" + btnLabel).show();
                console.log("Failed")
                isActive = false;
            }
        }
    });
}

function getBtnValues (btnId) {
    var hyphenIdx_1 = btnId.indexOf("_");
    var hyphenIdx_2 = btnId.indexOf("_", hyphenIdx_1 + 1);

    var btnLabel = btnId.slice(hyphenIdx_1 + 1);
    var answerLabel = btnId.slice(hyphenIdx_1 + 1, hyphenIdx_2);

    return {
        btnLabel: btnLabel,
        answerLabel: answerLabel
    };
}