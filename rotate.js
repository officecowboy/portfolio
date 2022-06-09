document.addEventListener("mousemove", function (event) {
  const x = event.pageX
  const y = event.pageY

  const midX = x - window.innerWidth / 2
  const midY = y - window.innerHeight / 2

  const box = document.querySelector(".floppy")

  box.style.left = x + "px"
  box.style.top = y + "px"

  box.style.cursor = "none"

  box.style.transform = "rotateX(" + (midY * 0.5) + "deg) rotateY(" + (midX * 0.5) + "deg)"
})