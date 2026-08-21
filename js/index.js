function getplant() {
    let sunlight = document.getElementById("sunlight").value;
    let care = document.getElementById("care").value;
    let pet = document.getElementById("pet").value;
    if (sunlight == "low" && care == "low" && pet == "yes") {
        document.getElementById("result").innerHTML = "BEST PLANT: MONESTRA";
    } else if (sunlight == "select" || care == "select" || pet == "select") {
        document.getElementById("result").innerHTML = "PLEASE SELECT FIRST";
    } else if (sunlight == "high" && care == "high" || pet == "yes") {
        document.getElementById("result").innerHTML = "BEST PLANT: ROSE";
    } else if (sunlight == "medium" || care == "medium" || pet == "no") {
        document.getElementById("result").innerHTML = "BEST PLANT: LILY";
    } else {
        document.getElementById("result").innerHTML = "SNAKE PLANT";
    }
}

