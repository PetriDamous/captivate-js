$(document).ready(function() {
    var failSlide = "Introduction";
    var passSlide = "Summary";
    var passTotal = 20;


    window.cpAPIInterface.setVariableValue("correctAns", cpQuizInfoPreTestTotalCorrectAnswers);

    var correctTotal = window.cpAPIInterface.getVariableValue("cpQuizInfoPreTestTotalCorrectAnswers");
    
    if (correctTotal < passTotal) {
    
    window.cpAPIInterface.setVariableValue("feedBack", "You didn’t pass the pre-test and will have to take the annual SIPERNET training. Select continue to proceed.");    
    
    } else {
    
    window.cpAPIInterface.setVariableValue("feedBack", "Congratulations, you passed the pre-test. Select continue to proceed.");
    
    }

    $("#continue_button").click(function () {
        var failStart;
        var passStart;
        var slides = cp.model.data.project_main.slides.split(',');

        slides.forEach(function(slide) {

            if (cp.model.data[slide].lb.trim() === failSlide) {
                failStart = cp.model.data[slide].from;
            }

            if (cp.model.data[slide].lb.trim() === passSlide) {
                passStart = cp.model.data[slide].from;
            }
        });

        if (correctTotal < passTotal) {
            cpCmndGotoFrameAndResume = failStart;
        } else {
            cpCmndGotoFrameAndResume = passStart;
            SCORM2004_SetPassed();
        }

    });
});