

$(document).ready(function () {
    $("#right-one-info").hide();
    $("#wrong-one-info").hide();
    $("#right-two-info").hide();
    $("#wrong-two-info").hide();
    $("#right-three-info").hide();
    $("#wrong-three-info").hide();
    $("#right-four-info").hide();
    $("#wrong-four-info").hide();
    $("#right-five-info").hide();
    $("#wrong-five-info").hide();
    $("#right-six-info").hide();
    $("#wrong-six-info").hide();
    $("#right-seven-info").hide();
    $("#wrong-seven-info").hide();


    $("#one-answer").click(function () {
        $("#right-one-info").show();
        $("#one-answer").addClass("green")
    });
    $("#one-incorrect").click(function () {
        $("#wrong-one-info").show();
        $("#one-incorrect").addClass("red")
    });

    $("#two-answer").click(function () {
        $("#right-two-info").show();
        $("#two-answer").addClass("green")
    });
    $("#two-incorrect").click(function () {
        $("#wrong-two-info").show();
        $("#two-incorrect").addClass("red")
    });

    $("#three-answer").click(function () {
        $("#right-three-info").show();
        $("#three-answer").addClass("green")
    });
    $("#three-incorrect").click(function () {
        $("#wrong-three-info").show();
        $("#three-incorrect").addClass("red")
    });
    $("#four-answer").click(function () {
        $("#right-four-info").show();
        $("#four-answer").addClass("green")
    });
    $("#four-incorrect").click(function () {
        $("#wrong-four-info").show();
        $("#four-incorrect").addClass("red")
    });


    $("#five-answer").click(function () {
        $("#right-five-info").show();
        $("#five-answer").addClass("green")
    });
    $("#five-incorrect").click(function () {
        $("#wrong-five-info").show();
        $("#five-incorrect").addClass("red")
    });


    $("#six-answer").click(function () {
        $("#right-six-info").show();
        $("#six-answer").addClass("green")
    });
    $("#six-incorrect").click(function () {
        $("#wrong-six-info").show();
        $("#six-incorrect").addClass("red")
    });


    $("#seven-answer").click(function () {
        $("#right-seven-info").show();
        $("#seven-answer").addClass("green")
    });
    $("#seven-incorrect").click(function () {
        $("#wrong-seven-info").show();
        $("#seven-incorrect").addClass("red")
    });















});



