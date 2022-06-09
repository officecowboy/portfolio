document.querySelector(".bio").addEventListener("mouseover", function () {
  document.querySelector(".floppy").style.display = "none";
})

document.querySelector(".bio").addEventListener("mouseout", function () {
  document.querySelector(".floppy").style.display = "block";
})

document.getElementById("raff").addEventListener("mouseover", function () {
  document.getElementById("raff-img").style.display = "block";
})

document.getElementById("raff").addEventListener("mouseout", function () {
  document.getElementById("raff-img").style.display = "none";
})

document.getElementById("rrc").addEventListener("mouseover", function () {
  document.getElementById("rrc-img").style.display = "block";
})

document.getElementById("rrc").addEventListener("mouseout", function () {
  document.getElementById("rrc-img").style.display = "none";
})

document.getElementById("pdf").addEventListener("mouseover", function () {
  document.getElementById("pdf-img").style.display = "block";
})

document.getElementById("pdf").addEventListener("mouseout", function () {
  document.getElementById("pdf-img").style.display = "none";
})

document.getElementById("jjn").addEventListener("mouseover", function () {
  document.getElementById("jjn-img").style.display = "block";
})

document.getElementById("jjn").addEventListener("mouseout", function () {
  document.getElementById("jjn-img").style.display = "none";
})

document.getElementById("mt").addEventListener("mouseover", function () {
  document.getElementById("mt-img").style.display = "block";
})

document.getElementById("mt").addEventListener("mouseout", function () {
  document.getElementById("mt-img").style.display = "none";
})

document.getElementById("am").addEventListener("mouseover", function () {
  document.getElementById("am-img").style.display = "block";
})

document.getElementById("am").addEventListener("mouseout", function () {
  document.getElementById("am-img").style.display = "none";
})

document.getElementById("se").addEventListener("mouseover", function () {
  document.getElementById("se-img").style.display = "block";
})

document.getElementById("se").addEventListener("mouseout", function () {
  document.getElementById("se-img").style.display = "none";
})

document.getElementById("ia").addEventListener("mouseover", function () {
  document.getElementById("ia-img").style.display = "block";
})

document.getElementById("ia").addEventListener("mouseout", function () {
  document.getElementById("ia-img").style.display = "none";
})

let vid = document.getElementById("bb-vid")

document.getElementById("bb").addEventListener("mouseover", function () {
  vid.style.display = "block";
  vid.play();
})

document.getElementById("bb").addEventListener("mouseout", function () {
  vid.style.display = "none";
  vid.pause();
})