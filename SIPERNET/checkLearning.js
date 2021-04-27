$(document).ready(function() {

    var learningId = cpInfoCurrentSlideLabel.trim().slice(-4);    
    var questionType = learningId.trim().slice(0, 2);     
    var parent = document.getElementById("div_Slide");

    if (!window.completedQuestions) {
        window.completedQuestions = [];
    }    
    
    var questions = [
        {
            id: "TF01",
            answer: "true"
        },
        {
            id: "MC01",
            answer: "e"
        },
        {
            id: "MC02",
            answer: "a"
        },
        {
            id: "MC03",
            answer: "f"
        },
        {
            id: "MC04",
            answer: "c"
        },
        {
            id: "MC05",
            answer: "a"
        },
        {
            id: "MC06",
            answer: "b"
        },
        {
            id: "MC07",
            answer: "d"
        },
        {
            id: "MC08",
            answer: "d"
        },
        {
            id: "MS01",
            answer: ["b", "c", "d", "e"]
        },
    ];
    
    // Grab current question
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].id === learningId) {
            filterButtons(questions[i]);
            break;
        }
    }

    function getAllChildren () {
        return Array.prototype.slice.call(parent.children);
    }
    
    function filterButtons (question) {
        var id = question.id;

        var childrenArray = getAllChildren();
        
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
            if (!isActive || window.completedQuestions.some(checkCompleted)) return;
            
            var btn = filteredButtons.filter(function(elm) {
                return elm.id === e.target.id;
            });
    
            if (btn.length === 0) return;
    
            var btnId = btn[0].id;
            var btnValues = getBtnValues(btnId);
            var btnLabel = btnValues.btnLabel;
            var answerLabel = btnValues.answerLabel;
    
            cp.hide("unlock_" + btnLabel);
    
            if (questionType === "TF" || questionType === "MC") {
                if (answer === answerLabel) {
                    cp.show("greenLock_" + btnLabel);
                    isActive = false;
                    showFeedBack(true);
                    trackCompleted(learningId); 
                } else {
                    cp.show("redLock_" + btnLabel);
                    isActive = false;
                    showFeedBack(false);
                    trackCompleted(learningId);  
                }
            }
            
            if (questionType === "MS") {
                var isCorrect = answer.some(function(answer) {
                    return answer === answerLabel;
                });                
        
                if (isCorrect) {
                    cp.show("greenLock_" + btnLabel);
                    correctCounter++;
                    if (correctCounter === answer.length) {
                        isActive = false;
                        showFeedBack(true); 
                        trackCompleted(learningId);                
                    }
                } else {
                    cp.show("redLock_" + btnLabel);
                    isActive = false;
                    showFeedBack(false);
                    trackCompleted(learningId); 
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

    function showFeedBack (isCorrect) {
        if (isCorrect) {
            cp.show("correctLock_" + learningId);
            cp.show("successComment_" + learningId);
        } else {
            cp.show("incorrectLock_" + learningId);
            cp.show("failureComment_" + learningId);
        }
    }

    function trackCompleted (questionId) {
        window.completedQuestions.push(questionId);
    }

    function checkCompleted (questionId) {
        return questionId === learningId;
    }

});