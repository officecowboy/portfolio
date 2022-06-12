function makeMarquee() {
  const title = 'TEXT (919) 750-0822 FOR EARLY TICKET ACCESS'

  const marqueeText = new Array(50).fill(title).join(' — ')

  const marquee = document.querySelector('.marquee span')

  marquee.innerHTML = marqueeText
}

makeMarquee()

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}








