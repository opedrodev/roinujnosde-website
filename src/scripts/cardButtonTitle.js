if (
  "content" in document.createElement("template")
    ? setButtonTitle()
    : setButtonTitleOldBrowsers()
);

function setButtonTitle() {
  const buttonTitle = document.querySelectorAll(".link-box .link");
  const template = document.querySelector("#button-template");

  for (let i = 0; i < buttonTitle.length; i++) {
    const clone = template.content.cloneNode(true);
    buttonTitle[i].appendChild(clone);
  }
}

function setButtonTitleOldBrowsers() {
  const buttonTitle = document.querySelectorAll(".link-box .link");

  for (let i = 0; i < buttonTitle.length; i++) {
    buttonTitle.item(i).textContent = "More info -›";
  }
}
