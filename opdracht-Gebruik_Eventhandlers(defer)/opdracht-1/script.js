const clickedButton = function () {
    alert("button clicked!");
};
const alertButton = document.querySelector(".btn-alert");
alertButton.addEventListener("click", clickedButton);