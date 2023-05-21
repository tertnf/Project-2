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
