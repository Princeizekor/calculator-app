let log = console.log
const btns = Array.from( document.getElementsByClassName('btn') )
const screen = document.querySelector('.screen')
const digit = document.querySelector('.digit') 
const times = document.querySelector('.times')
const reset = document.querySelector('.reset')
const del = document.querySelector('.del')
const equal = document.querySelector('.equal')
const left = document.querySelector('.left')
const float = document.querySelector('.float')
const togo = document.querySelector('.togo')
const swi = document.querySelector('.switch')
const root = document.querySelector(':root')
let darkMode = false;
const previousStyle = getComputedStyle(root);
if (darkMode != true) {
    swi.addEventListener("click", function() {
        root.style.setProperty("--theme1", "hsl(0, 0%, 90%)")
        root.style.setProperty("--togo1", "hsl(0, 5%, 81%)")
        root.style.setProperty("--screen1", "hsl(0, 0%, 93%)")
        root.style.setProperty("--keybg1", "hsl(185, 42%, 37%)")
        root.style.setProperty("--keysh", "hsl(185, 58%, 25%)")
        root.style.setProperty("--redkey1", "hsl(25, 98%, 40%)")
        root.style.setProperty("--redsh1", "hsl(25, 99%, 27%)")
        root.style.setProperty("--greybg1", "hsl(45, 7%, 89%)")
        root.style.setProperty("--greysh1", "hsl(35, 11%, 61%)")
        root.style.setProperty("--dark1", "hsl(60, 10%, 19%)")
        root.style.setProperty("--white", "hsl(60, 10%, 19%)")
        root.style.setProperty("--dell", "hsl(185, 57%, 42%)")
        swi.style.display = 'none';
        left.style.display = 'block'
    })
    left.style.display = 'none'
    float.style.display = 'none'
}

let lightMode = false;
if (lightMode != true) {
    left.addEventListener("click", function() {
      root.style.setProperty("--theme1", "hsl(268, 75%, 9%)")
      root.style.setProperty("--togo1", "hsl(268, 71%, 12%)")
      root.style.setProperty("--screen1", "hsl(268, 71%, 12%)")
      root.style.setProperty("--keybg1", "hsl(281, 89%, 26%)")
      root.style.setProperty("--keysh", "hsl(285, 91%, 52%)")
      root.style.setProperty("--redkey1", "hsl(176, 100%, 44%)")
      root.style.setProperty("--redsh1", "hsl(177, 92%, 70%)")
      root.style.setProperty("--greybg1", "hsl(268, 47%, 21%)")
      root.style.setProperty("--greysh1", "hsl(290, 70%, 36%)")
      root.style.setProperty("--dark1", "hsl(52, 100%, 62%)")
      root.style.setProperty("--white", "hsl(52, 100%, 62%)")
      root.style.setProperty("--dell", "hsl(281, 64%, 39%)")
      root.style.setProperty("--equal", "hsl(176, 61%, 64%)")
      root.style.setProperty("--button", "hsl(269, 53%, 39%)")
      left.style.display = 'none';
      float.style.display = 'block'

    })
}

let replay = false;
if (replay != true) {
  float.addEventListener("click", () => {
    root.style.setProperty("--theme1", "hsl(222, 26%, 31%)")
    root.style.setProperty("--togo1", "hsl(223, 31%, 20%)")
    root.style.setProperty("--screen1", "hsl(224, 36%, 15%)")
    root.style.setProperty("--keybg1", "hsl(225, 21%, 49%)")
    root.style.setProperty("--keysh", "hsl(224, 28%, 35%)")
    root.style.setProperty("--redkey1", "hsl(6, 63%, 50%)")
    root.style.setProperty("--redsh1", "hsl(6, 70%, 34%)")
    root.style.setProperty("--greybg1", "hsl(30, 25%, 89%)")
    root.style.setProperty("--greysh1", "hsl(28, 16%, 65%)")
    root.style.setProperty("--dark1", "hsl(221, 14%, 31%)")
    root.style.setProperty("--white", "hsl(0, 0%, 100%)")
    root.style.setProperty("--dell", "hsl(225, 24%, 70%)")
    root.style.setProperty("--equal", "hsl(6, 85%, 63%)")
    root.style.setProperty("--button", "hsl(0, 0%, 100%)")
    float.style.display = 'none';
    swi.style.display = 'block'
  })
}
btns.map( btn => {
   btn.addEventListener('click', (e) => {
     e.preventDefault()
     if (e.target.innerHTML) {
      digit.innerText += e.target.innerHTML
      
     }
   })
})

equal.addEventListener('click', () => {
  if (digit.innerText == "") {
    return ""
  } else {
    digit.innerText = eval(digit.innerText);
  }

})

reset.addEventListener('click', () => {
  digit.innerText = ''
})

del.addEventListener('click', (g) => {
 if (g) {
  digit.innerText = digit.innerText.slice(0, -1)
 }
})









