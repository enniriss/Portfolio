var tableau = "";
document.addEventListener("keypress", (e) => {
    
    console.log(e.key);
    if (e.key == "s") {
        if (tableau == "") {
            tableau = tableau + "s";
        }
        else {
            console.log("Faux");
        }
    }
    if (e.key == "i") {
        if (tableau == "s") {
            tableau = tableau + "i";
        }
        else {
            console.log("Faux");
        }
    }
    if (e.key == "r") {
        if (tableau == "si") {
            tableau = tableau + "r";
        }
        else {
            console.log("NAN");
        }
    }
    if (e.key == "i") {
        if (tableau == "sir") {
            tableau = tableau + "i";
        }
        else {
            console.log("FAUX");
        }
    }
    if (e.key == "n") {
        if (tableau == "siri") {
            tableau = tableau + "n";
        }
        else {
            console.log("NO !");
        }
    }
    if (e.key == "e") {
        if (tableau == "sirin") {
            tableau = tableau + "e";
        }
        else {
            console.log("Euuhh !");
        }
    }
    if (tableau == "sirine") {
        window.open("blog.html");
    }
    console.log(tableau);
});

///////////////////////////////////////

