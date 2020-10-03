const attachEventToAlertButton = function () {
    const alertButton = document.querySelector(".btn-alert");
    alertButton.addEventListener("click", function () {
        alert("alert button clicked");
    });
};
attachEventToAlertButton();

const changeBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
};

const attachEventToChangeBackgroundButton = function () {
    const changeBackgroundButton = document.querySelector(".btn-change-background");
    changeBackgroundButton.addEventListener("click", function () {
        changeBackground();
    });
};
attachEventToChangeBackgroundButton();
