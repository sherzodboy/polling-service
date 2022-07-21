"use strict";

// Test your knowladge
const options = document.querySelectorAll(".options-label");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    for (let k = 0; k < options.length; k++) {
      if (options[k].classList.contains("selected")) {
        options[k].classList.remove("selected");
      }
    }

    options[i].classList.add("selected");

    for (let j = 0; j < options.length; j++) {
      options[j].classList.add("selectall");
    }
  });
}

// Checkboxes
const checkboxes = document.querySelectorAll("input[type = 'checkbox']");

function checkAll(myCheckbox) {
  if (myCheckbox.checked == true) {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });
  } else {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  }
}
