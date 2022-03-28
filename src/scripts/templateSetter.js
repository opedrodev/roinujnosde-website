// button title
setTemplate(".link-box .link", "#button-template", "More info -›");

// icons
setTemplate(".header__links", "#icons-template");
setTemplate(".links-section__links", "#icons-template");

function setTemplate(path, templateId, alternativeContent) {
  const template = document.querySelector(templateId);
  const element = document.querySelectorAll(path);

  if ("content" in document.createElement("template")) {
    for (let i = 0; i < element.length; i++) {
      const clone = template.content.cloneNode(true);
      element[i].appendChild(clone);
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      element.item(i).textContent = alternativeContent;
    }
  }
}
