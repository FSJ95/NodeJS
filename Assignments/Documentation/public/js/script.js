(function (global) {
    console.log(typeof (global.localStorage.getItem("darkmode")));

    if (global.localStorage.getItem("darkmode") == 'true') {
        $("body").addClass("dark");
        console.log("added");
    } else {
        $("body").removeClass("dark");
        console.log("removed");
    }

    console.log(global.localStorage.getItem("darkmode"));

    $(".switch").on("click", function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $(".switch").text("DARKMODE OFF");
            global.localStorage.setItem("darkmode", false);
        } else {
            $("body").addClass("dark");
            $(".switch").text("DARKMODE ON");
            global.localStorage.setItem("darkmode", true);
        }
    });

    var color = 'black';
    setInterval(function () {
        $('.example').css({'color': color});
        if (color === 'black') {
            color = 'red';
        } else {
            color = 'black';
        }
    }, 400);

}(window));
