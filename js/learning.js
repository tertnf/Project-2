let tablinks = document.getElementsByClassName("tab_links");
let tabcontents = document.getElementsByClassName("tab_contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active_tab");
  }
  event.currentTarget.classList.add("active-link", "is_open");
  document.getElementById(tabname).classList.add("active_tab");
}

$summaries = document.querySelectorAll("li");

for (let i = 0; i < $summaries.length; i++) {
  const element = $summaries[i];
  element.addEventListener("click", function () {
    let id = this.id;
    let index = parseInt(id);
    let newid = `${index}t`;
    document.getElementById(newid).classList.toggle("hidden");
  });
}
// виявилось що цей код не потрібен. фон не треба міняти.))
// let detailsElements = document.querySelectorAll("details.qd");
// console.log(detailsElements);

// function handleClickOnDetails() {

//   for (const item of detailsElements) {
//     console.log(item);
//     if (item.hasAttribute("open")) {
//       item.parentNode.style.backgroundColor = "#EAEBF3";
//     } else item.parentNode.style.backgroundColor = "#C99B9B";
//   }
// }
// detailsElements.forEach(function (item) {
//   item.addEventListener("click", handleClickOnDetails);
// // });
// let cutPElement = document.querySelectorAll(".feedback-wrap");
// cutPElement.forEach((wrap) => {
//   let y = document.createElement("p");

//   console.log(y);
//   wrap.append(y);
// });
// console.log(cutPElement);
let feedbackText = document.querySelectorAll(".feedback-text");
let feedbackStyleClass = "feedback-text";
let feedbackStyleClassModified = "feedback-text-cut";
let feedbackCutLength = 100;

cutFeedbackTextCreation(
  feedbackText,
  feedbackCutLength,
  feedbackStyleClass,
  feedbackStyleClassModified
);

let articleText = document.querySelectorAll(".article-text");
let articleCutLength = 50;
let articleStyleClass = "article-text";
let articleStyleClassModified = "article-text-cut";
cutFeedbackTextCreation(
  articleText,
  articleCutLength,
  articleStyleClass,
  articleStyleClassModified
);

function cutFeedbackTextCreation(
  textOrigin,
  cutLength,
  styleClass,
  styleClassModified
) {
  textOrigin.forEach((element) => {
    let cutElement = element.textContent.slice(0, `${cutLength}`);
    let cutElementModify = `${cutElement}...`;
    let newP = document.createElement("p");

    newP.textContent = cutElementModify;
    element.parentNode.append(newP);
    newP.classList.add(`${styleClass}`);
    newP.classList.add(`${styleClassModified}`);
  });
}

[...document.querySelectorAll(".feedback-item")].forEach(function (item) {
  item.addEventListener("click", function () {
    item.style.height = "auto";

    item.getElementsByClassName("feedback-text")[0].classList.toggle("hidden");

    item
      .getElementsByClassName("feedback-text-cut")[0]
      .classList.toggle("hidden");
  });
});

[...document.querySelectorAll(".articles-item")].forEach(function (item) {
  item.addEventListener("click", function () {
    // item.style.height = "300px";

    if (
      item
        .getElementsByClassName("article-text")[0]
        .classList.contains("hidden")
    ) {
      item.getElementsByClassName("article-wrap")[0].style.height = "500px";
    } else {
      item.getElementsByClassName("article-wrap")[0].style.height = "auto";
    }

    item.getElementsByClassName("article-text")[0].classList.toggle("hidden");
    item.getElementsByClassName("article-button")[0].classList.toggle("hidden");
    item
      .getElementsByClassName("article-text-cut")[0]
      .classList.toggle("hidden");

    item
      .getElementsByClassName("article-wrap")[0]
      .firstChild.nextSibling.classList.toggle("article-img-transform");
    item
      .getElementsByClassName("article-text")[0]
      .classList.toggle("article-text-transform");
  });
});

const dropDownList = document.querySelector(".datalist-input");

let dataList = document.getElementsByClassName("datalist-list");
let contactForm = document.getElementsByClassName("contacts-form");

dropDownList.addEventListener("click", (event) => {
  dataList[0].classList.toggle("hidden");
  dataList[0].classList.toggle("is-open");
  if (dataList[0].classList.contains("is-open")) {
    contactForm[0].style.height = "434px";
  } else contactForm[0].style.height = "300px";
});

dataList[0].addEventListener("click", selectDatalistItem);

function selectDatalistItem(event) {
  if (event.target.nodeName !== "LI") {
    return;
  }
  dropDownList.value = event.target.textContent;
  dataList[0].classList.toggle("hidden");
  dataList[0].classList.toggle("is-open");
  contactForm[0].style.height = "300px";
}

// // mobile-menu
// let mobileMenu = querySelectorAll("nav");
// let burger = querySelectorAll("burger");
// let cross = querySelectorAll("cross");
// burger.addEventListener("click", function () {
//   mobileMenu.classList.remove("hidden");
//   cross.classList.remove("hidden");
// });
