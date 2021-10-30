// count variables
let bambooLeft = 101,
    blackLeft = 64,
    mahoganyLeft = 0;

const bambooCountArea = document.querySelector("#bambooCountArea"),
    bambooCountArea2 = document.querySelector("#bambooCountArea2"), //fix area2
    blackCountArea = document.querySelector("#blackCountArea"),
    blackCountArea2 = document.querySelector("#blackCountArea2"),
    mahoganyCountArea = document.querySelector("#mahoganyCountArea"),
    mahoganyCountArea2 = document.querySelector("#mahoganyCountArea2");

bambooCountArea.textContent = bambooLeft;
bambooCountArea2.textContent = bambooLeft;
blackCountArea.textContent = blackLeft;
blackCountArea2.textContent = blackLeft;
mahoganyCountArea.textContent = mahoganyLeft;
mahoganyCountArea2.textContent = mahoganyLeft;

// Back this button

const modalPledgBox = document.querySelector("#modal-pledge");
const btnBackThisProject = document.querySelector("#btnBackProject");

const span = document.getElementsByClassName("close")[0]; //modal close button

// Back This Button opens modal Pledge Box
btnBackThisProject.addEventListener("click", () => {
    console.log("click");
    modalPledgBox.style.display = "block";
});

// click on x close the modal
span.onclick = function() {
    modalPledgBox.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalPledgBox) {
        modalPledgBox.style.display = "none";
    }
};