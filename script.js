function calculate() {
    var a = parseInt(document.getElementById("book1").value);
    var b = parseInt(document.getElementById("book2").value);
    var c = parseInt(document.getElementById("book3").value);
    var d = parseInt(document.getElementById("book4").value);
    var e = parseInt(document.getElementById("book5").value);

    var obtain = a + b + c + d + e;
    document.getElementById("obtained").innerHTML = obtain;
    var percentage = obtain / 500 * 100;
    document.getElementById("percentage").innerHTML = percentage;
    if (percentage >= 80) {
        document.getElementById("grade").innerHTML = 'A';
    }
    else if (percentage >= 65 && percentage <= 79) {
        document.getElementById("grade").innerHTML = 'B';
    }
    else if (percentage >= 55 && percentage <= 64) {
        document.getElementById("grade").innerHTML = 'C';
    }
    else if (percentage >= 50 && percentage <= 54) {
        document.getElementById("grade").innerHTML = 'D';
    }
    else {
        document.getElementById("grade").innerHTML = 'F';
    }
    if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {
        document.getElementById("remark").innerHTML = 'Pass';
    }
    else {
        document.getElementById("remark").innerHTML = 'Fail';
    }
}