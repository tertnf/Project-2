// let tablinks = document.getElementsByClassName("tab-links");
// let tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (let tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (let tabcontent of tabcontents) {
//     tabcontent.classList.remove("active_tab");
//   }
//   event.currentTarget.classList.add("active-link", "is_open");
//   document.getElementById(tabname).classList.add("active_tab");
// }

// $summaries = document.querySelectorAll(".features-list li");

// for (let i = 0; i < $summaries.length; i++) {
//   const element = $summaries[i];
//   element.addEventListener("click", function () {
//     let id = this.id;
//     let index = parseInt(id);
//     let newid = `${index}t`;
//     document.getElementById(newid).classList.toggle("hidden");
//   });
// }
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
let feedbackCutLength = 120;

cutFeedbackTextCreation(
  feedbackText,
  feedbackCutLength,
  feedbackStyleClass,
  feedbackStyleClassModified
);

let articleText = document.querySelectorAll(".article-text");
let articleCutLength = 200;
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

const dropDownList = document.querySelector(".datalist-input-wrap");

let dataList = document.getElementsByClassName("datalist-list");
let contactForm = document.getElementsByClassName("contacts-form");

dropDownList.addEventListener("click", (event) => {
  dataList[0].classList.toggle("dropdown-list-hidden");
  dataList[0].classList.toggle("is-open");
  // if (dataList[0].classList.contains("is-open")) {
  //   contactForm[0].style.height = "434px";
  // } else contactForm[0].style.height = "300px";
});

dataList[0].addEventListener("click", selectDatalistItem);

function selectDatalistItem(event) {
  const listInput = document.querySelector(".datalist-input");
  if (event.target.nodeName !== "LI") {
    return;
  }
  listInput.value = event.target.textContent;
  dataList.classList.add("dropdown-list-hidden");
  dataList.classList.remove("is-open");
  // listInput.value =
  // contactForm[0].style.height = "300px";
}

// // mobile-menu
// let mobileMenu = querySelectorAll("nav");
// let burger = querySelectorAll("burger");
// let cross = querySelectorAll("cross");
// burger.addEventListener("click", function () {
//   mobileMenu.classList.remove("hidden");
//   cross.classList.remove("hidden");
// });
