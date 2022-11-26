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

  item.addEventListener("focusout", (e) => {
    if (e.target.type === "email" && getFormInputEmailValue === "") {
      e.target.nextElementSibling.classList.remove("styled");
    } else if (
      e.target.type === "password" &&
      getFormInputPasswordValue === ""
    ) {
      e.target.nextElementSibling.classList.remove("styled");
    }
  });

  item.nextElementSibling.addEventListener("click", () => {
    item.focus();
    if (!item.nextElementSibling.classList.contains("styled")) {
      item.nextElementSibling.classList.add("styled");
    }
  });
});
