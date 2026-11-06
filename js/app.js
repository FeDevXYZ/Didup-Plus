const scr1 = document.getElementById("scr1")
const scr2 = document.getElementById("scr2")
const scr3 = document.getElementById("scr3")
const scr4 = document.getElementById("scr4")
const scr5 = document.getElementById("scr5")
const scr6 = document.getElementById("scr6")
const scr7 = document.getElementById("scr7")
const scr8 = document.getElementById("scr8")

const home = document.getElementById("home")
const homework = document.getElementById("homework")
const whattoprepare = document.getElementById("whattoprepare")
const agenda = document.getElementById("agenda")
const documents = document.getElementById("documents")
const grades = document.getElementById("grades")
const teachers = document.getElementById("teachers")
const settings = document.getElementById("setting")

home.onclick = function () {
  scr1.style.display = "block";
  scr2.style.display = "none";
  scr3.style.display = "none";
  scr4.style.display = "none";
  scr5.style.display = "none";
  scr6.style.display = "none";
  scr7.style.display = "none";
  scr8.style.display = "none";
  this.classList.add("selected");
  homework.classList.remove("selected");
  whattoprepare.classList.remove("selected");
  agenda.classList.remove("selected");
  documents.classList.remove("selected");
  grades.classList.remove("selected");
  teachers.classList.remove("selected");
  settings.classList.remove("selected");
}
homework.onclick = function () {
  scr1.style.display = "none";
  scr2.style.display = "block";
  scr3.style.display = "none";
  scr4.style.display = "none";
  scr5.style.display = "none";
  scr6.style.display = "none";
  scr7.style.display = "none";
  scr8.style.display = "none";
  home.classList.remove("selected");
  homework.classList.add("selected");
  whattoprepare.classList.remove("selected");
  agenda.classList.remove("selected");
  documents.classList.remove("selected");
  grades.classList.remove("selected");
  teachers.classList.remove("selected");
  settings.classList.remove("selected");
}
whattoprepare.onclick = function () {
  scr1.style.display = "none";
  scr2.style.display = "none";
  scr3.style.display = "block";
  scr4.style.display = "none";
  scr5.style.display = "none";
  scr6.style.display = "none";
  scr7.style.display = "none";
  scr8.style.display = "none";
  home.classList.remove("selected");
  homework.classList.remove("selected");
  whattoprepare.classList.add("selected");
  agenda.classList.remove("selected");
  documents.classList.remove("selected");
  grades.classList.remove("selected");
  teachers.classList.remove("selected");
  settings.classList.remove("selected");
}
agenda.onclick = function () {
  scr1.style.display = "none";
  scr2.style.display = "none";
  scr3.style.display = "none";
  scr4.style.display = "block";
  scr5.style.display = "none";
  scr6.style.display = "none";
  scr7.style.display = "none";
  scr8.style.display = "none";
  home.classList.remove("selected");
  homework.classList.remove("selected");
  whattoprepare.classList.remove("selected");
  agenda.classList.add("selected");
  documents.classList.remove("selected");
  grades.classList.remove("selected");
  teachers.classList.remove("selected");
  settings.classList.remove("selected");
}
documents.onclick = function () {
  scr1.style.display = "none";
  scr2.style.display = "none";
  scr3.style.display = "none";
  scr4.style.display = "none";
  scr5.style.display = "block";
  scr6.style.display = "none";
  scr7.style.display = "none";
  scr8.style.display = "none";
  home.classList.remove("selected");
  homework.classList.remove("selected");
  whattoprepare.classList.remove("selected");
  agenda.classList.remove("selected");
  documents.classList.add("selected");
  grades.classList.remove("selected");
  teachers.classList.remove("selected");
  settings.classList.remove("selected");
}
grades.onclick = function () {
  scr1.style.display = "none";
  scr2.style.display = "none";
  scr3.style.display = "none";
  scr4.style.display = "none";
  scr5.style.display = "none";
  scr6.style.display = "block";
  scr7.style.display = "none";
  scr8.style.display = "none";
  home.classList.remove("selected");
  homework.classList.remove("selected");
  whattoprepare.classList.remove("selected");
  agenda.classList.remove("selected");
  documents.classList.remove("selected");
  grades.classList.add("selected");
  teachers.classList.remove("selected");
  settings.classList.remove("selected");
}
teachers.onclick = function () {
  scr1.style.display = "none";
  scr2.style.display = "none";
  scr3.style.display = "none";
  scr4.style.display = "none";
  scr5.style.display = "none";
  scr6.style.display = "none";
  scr7.style.display = "block";
  scr8.style.display = "none";
  home.classList.remove("selected");
  homework.classList.remove("selected");
  whattoprepare.classList.remove("selected");
  agenda.classList.remove("selected");
  documents.classList.remove("selected");
  grades.classList.remove("selected");
  teachers.classList.add("selected");
  settings.classList.remove("selected");
}
settings.onclick = function () {
  scr1.style.display = "none";
  scr2.style.display = "none";
  scr3.style.display = "none";
  scr4.style.display = "none";
  scr5.style.display = "none";
  scr6.style.display = "none";
  scr7.style.display = "none";
  scr8.style.display = "block";
  home.classList.remove("selected");
  homework.classList.remove("selected");
  whattoprepare.classList.remove("selected");
  agenda.classList.remove("selected");
  documents.classList.remove("selected");
  grades.classList.remove("selected");
  teachers.classList.remove("selected");
  settings.classList.add("selected");
}


