var first = document.getElementById("one");
var second = document.getElementById("two");
var third = document.getElementById("three");
var fourth = document.getElementById("four");

var cool_background = () => {
    fourth.style.background = "linear-gradient(to right, " + first.value + ", " + second.value + ")";

    third.textContent = fourth.style.background + ";";
}

first.addEventListener("input", cool_background);

second.addEventListener("input", cool_background);