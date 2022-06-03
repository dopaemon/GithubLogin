"use strict";

let ButtonContinueEmail = document.querySelector(".button_continue_email");
let ButtonContinuePassword = document.querySelector(
  ".button_continue_password"
);
let ButtonContinueUsername = document.querySelector(
  ".button_continue_username"
);
let ButtonContinueAnnouncements = document.querySelector(
  ".button_continue_announcements"
);
let ButtonCreateAccount = document.querySelector(".button_create_account");

let SectionPasswordContentRegister = document.querySelector(
  ".section_password_content_register"
);
let SectionUsernameContentRegister = document.querySelector(
  ".section_username_content_register"
);
let SectionAnnouncementsContentRegister = document.querySelector(
  ".section_announcements_content_register"
);
let SectionVerifyContentRegister = document.querySelector(
  ".section_verify_content_register"
);

let InputEmail = document.querySelector(".input_email");
let InputPassword = document.querySelector(".input_password");
let InputUsername = document.querySelector(".input_username");
let InputAnnouncements = document.querySelector(".input_announcements");

let TextError = document.querySelector(".text_error");

let RegexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm;

InputEmail.focus();

ButtonContinueEmail.addEventListener("click", () => {
  if (InputEmail.value.match(RegexEmail)) {
    SectionPasswordContentRegister.style.display = "flex";
    TextError.style.display = "none";
    InputPassword.focus();
  } else {
    TextError.innerHTML = "Email was not valid";
    TextError.style.display = "flex";
  }
});

ButtonContinuePassword.addEventListener("click", () => {
  if (InputPassword.value !== "" && InputPassword.value.length >= 8) {
    SectionUsernameContentRegister.style.display = "flex";
    TextError.style.display = "none";
    InputUsername.focus();
  } else {
    TextError.innerHTML = "Password was not valid";
    TextError.style.display = "flex";
  }
});

ButtonContinueUsername.addEventListener("click", () => {
  if (InputUsername.value !== "") {
    SectionAnnouncementsContentRegister.style.display = "flex";
    TextError.style.display = "none";
    InputAnnouncements.focus();
  } else {
    TextError.innerHTML = "UserName was not valid";
    TextError.style.display = "flex";
  }
});

ButtonContinueAnnouncements.addEventListener("click", () => {
  if (
    (InputAnnouncements.value !== "" && InputAnnouncements.value === "y") ||
    InputAnnouncements.value === "n" ||
    InputAnnouncements.value === "Y" ||
    InputAnnouncements.value === "N"
  ) {
    SectionVerifyContentRegister.style.display = "flex";
    TextError.style.display = "none";
    ButtonCreateAccount.style.display = "block";
  } else {
    TextError.innerHTML = "Announcements must y or n be";
    TextError.style.display = "flex";
  }
});

ButtonCreateAccount.addEventListener("click", () => {});
