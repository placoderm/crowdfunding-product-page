// count variables
let bambooLeft = 101,
    blackLeft = 64,
    mahoganyLeft = 0,
    totalPledged = 89914,
    totalPledgers = 5007,
    pledgePercentage = Math.floor(totalPledged / 1000);
console.log(pledgePercentage);

const bambooCountArea = document.querySelector("#bambooCountArea"),
    bambooCountArea2 = document.querySelector("#bambooCountArea2"), //fix area2
    blackCountArea = document.querySelector("#blackCountArea"),
    blackCountArea2 = document.querySelector("#blackCountArea2"),
    mahoganyCountArea = document.querySelector("#mahoganyCountArea"),
    mahoganyCountArea2 = document.querySelector("#mahoganyCountArea2"),
    totalPledgedArea = document.querySelector("#total-pledged"),
    totalPledgersArea = document.querySelector("#total-pledgers-area"),
    progressBar = document.querySelector("#progress-bar-foreground");

bambooCountArea.textContent = bambooLeft;
bambooCountArea2.textContent = bambooLeft;
blackCountArea.textContent = blackLeft;
blackCountArea2.textContent = blackLeft;
mahoganyCountArea.textContent = mahoganyLeft;
mahoganyCountArea2.textContent = mahoganyLeft;
totalPledgedArea.textContent = "$ " + totalPledged.toLocaleString("en-US");
totalPledgersArea.textContent = totalPledgers.toLocaleString("en-US");
progressBar.style.width = pledgePercentage + "%";

// add pledege amount to total------BROKEN

function addPledgeAmountToTotal(amountToAdd) {
    totalPledged += parseInt(amountToAdd, 10);
    totalPledgedArea.textContent = "$ " + totalPledged.toLocaleString("en-US");
    totalPledgers++;
    totalPledgersArea.textContent = totalPledgers.toLocaleString("en-US");
    pledgePercentage = Math.floor(totalPledged / 1000);
    if (pledgePercentage > 100) {
        progressBar.style.width = "100%";
    } else {
        progressBar.style.width = pledgePercentage + "%";
    }
    console.log(typeof totalPledged, totalPledged);
    console.log(pledgePercentage);
}

// Back this button

const modalPledgBox = document.querySelector("#modal-pledge");
const btnBackThisProject = document.querySelector("#btnBackProject");

const span = document.getElementsByClassName("close")[0]; //modal close button

// Back This Button opens modal Pledge Box
btnBackThisProject.addEventListener("click", () => {
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
// Success
const successBox = document.querySelector("#success");

// submit pledge
const submissionAmount = document.querySelector("#submission-amount");
const pledgeSubmit = document.querySelector("form.modal-pledge-form button");
pledgeSubmit.addEventListener("click", event => {
    event.preventDefault();
    addPledgeAmountToTotal(submissionAmount.value);
    console.log(totalPledged);
    modalPledgBox.style.display = "none"; // hide pledges modal
    successBox.style.display = "block"; // show success box
});

const closeSuccessButton = document.querySelector("button.close-success");
closeSuccessButton.onclick = function() {
    successBox.style.display = "none";
};

// clicking on modal pledge cards

const modalPledgeCards = document.querySelectorAll(".pledge-card-modal");

modalPledgeCards.forEach(card => {
    card.addEventListener("click", event => {
        if (document.querySelector(".pledge-card-modal.selected") != null) {
            document
                .querySelector(".pledge-card-modal.selected")
                .classList.remove("selected");
        }
        if (!event.currentTarget.classList.contains("out-of-stock")) {
            event.currentTarget.classList.add("selected");
            console.log("clicked!");
        }
    });
});