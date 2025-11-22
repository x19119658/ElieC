function results() {
    alert("How many subjects do you take?");

    var nbrOfSubjects = parseInt(prompt("Enter your Answer Here: "));
    var results = new Array(nbrOfSubjects);
    var totalResult = 0;

    for (i = 0; i < nbrOfSubjects; i++) {
        results[i] = parseInt(prompt("Enter Result " + (i + 1)));
        totalResult += results[i];
    }
    /*Display Total Result*/
    document.getElementById("ttl").innerHTML += "Your Result is: " + totalResult;

    /*Display Average*/
    var average = parseInt(totalResult / nbrOfSubjects);
    document.getElementById("avg").innerHTML += "Average: " + average;

    /*Display Grade*/
    if (average <= 100 && average > 80) {
        document.getElementById("grd").innerHTML += "Grade: A";
    }
    else if (average <= 80 && average > 70) {
        document.getElementById("grd").innerHTML += "Grade: B";
    }
    else if (average <= 70 && average > 50) {
        document.getElementById("grd").innerHTML += "Grade: C";
    }
    else {
        document.getElementById("grd").innerHTML += "D";
    }

}