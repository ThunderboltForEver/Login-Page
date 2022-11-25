let getFormSpan = document.querySelectorAll("form div span ");
let getFormInput = document.querySelectorAll("form div input");
let getFormInputEmailValue = "";
let getFormInputPasswordValue = "";

getFormInput.forEach((item) => {
  item.addEventListener("change", () => {
    if (item.type === "email") {
      getFormInputEmailValue = item.value;
    } else {
      getFormInputPasswordValue = item.value;
    }
  });

  item.addEventListener("focusin", () => {
    item.nextElementSibling.classList.add("styled");
  });

  item.addEventListener("focusout", () => {
    if (getFormInputEmailValue === "" && getFormInputPasswordValue === "") {
      item.nextElementSibling.classList.remove("styled");
    }
  });

  item.nextElementSibling.addEventListener("click", () => {
    item.addEventListener("focus", null);
    if (!item.nextElementSibling.classList.contains("styled")) {
      item.nextElementSibling.classList.add("styled");
    }
  });
});

window.addEventListener("click", (e) => {
  getFormInput.forEach((item4) => {
    window.addEventListener("click", (e) => {
      if (
        e.target.tagName != "INPUT" &&
        e.target.tagName !== item4.nextElementSibling.tagName &&
        item4.nextElementSibling.classList.contains("styled") &&
        getFormInputEmailValue === "" &&
        getFormInputPasswordValue === ""
      ) {
        item4.nextElementSibling.classList.remove("styled");
      } else if (
        e.target.tagName != "INPUT" &&
        e.target.tagName !== item4.nextElementSibling.tagName &&
        item4.nextElementSibling.classList.contains("styled") &&
        item4.type === "email" &&
        getFormInputEmailValue === ""
      ) {
        item4.nextElementSibling.classList.remove("styled");
      } else if (
        e.target.tagName != "INPUT" &&
        e.target.tagName !== item4.nextElementSibling.tagName &&
        item4.nextElementSibling.classList.contains("styled") &&
        item4.type === "password" &&
        getFormInputPasswordValue === ""
      ) {
        item4.nextElementSibling.classList.remove("styled");
      }
    });
  });
});
