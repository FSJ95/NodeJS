// Assignment 1
$("body").css("text-align", "center");

// Assignment 2
$("#title h2").text("New title");

// Assignment 3
$(".subtitle-box").css("background-color", "red");

// Assignment 4
$(".subtitle-box .temp").hide();

// Assignment 5
$("div.reason").css("border-style", "dotted");

///////////////////////////////////////////////////////////////
// Assignment 6
$("#first-list li").css("font-weight", "Bold");

// Assignment 7
$('#first-list li:last').css('text-decoration', 'underline');

// Assignment 8
$("#first-list li:nth-child(2)").css("text-decoration", "line-through");

///////////////////////////////////////////////////////////////
// Assignment 9
$(".second-list").css("font-style", "italic");

// Assignment 10
$(".second-list span").css("font-size", "0.5em");

////////////////////////////////////////////////////////////////
// Assignment 11
$(".unused-box label:first").remove();

// Assignment 12
$(".unused-box").append("<p>Second Sentence</p>");

// Assignment 13
$("<p>First Sentence</p>").insertBefore(".unused-box p:first");

// Assignment 14
$(".unused-box").attr("class", "used-box");

// Assignment 15
$(".used-box").on("click", () => {
    $(event.currentTarget).toggleClass("used-boxed-clicked")
});

/////////////////////////////////////////////////////////////////
// Assignment 16
$("#submit-button").on({'mouseenter':function(){
        $(this).attr("title", "sadasdasdas");
    },'mouseleave':function(){
        $(this).removeAttr("title");
    }
});

// Assignment 17
$("#submit-button").on("click", () => {
    var string = $("#first-list li:last").text();
    var int = string[string.length -1];
    $("#first-list").append("<li>Reason " + (parseInt(int)+1) + "</li>");
});

// Assignment 18
// Assignment 19
// Assignment 20
// Assignment 21
