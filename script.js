var a = JSON.parse(data)


function animalCrossing() {
  var set = document.getElementById('set').value
  var start = 24 * (set - 1)
  var villagers = []
  var random = Math.floor(Math.random() * 24)

  for (var i = start; i < start + 24; i++) {
      villagers.push(i)
  }

  var buttons = document.getElementsByClassName('label')
  console.log(buttons)

  for (var i = 0; i < villagers.length; i++) {
    animal = villagers[i]
    icon = a['Icon Image'][animal]
    button = buttons[i]
    button.style.backgroundImage = "url('" + icon + "')"
    button.style.backgroundColor = "white"

    if (i == random) {
      button.style.backgroundColor = "gray"
    }
  }
}

function clicked(id) {
  var button = document.getElementById(id)

  if (button.style.backgroundColor == "white") {
    button.style.backgroundColor = "gray"

  } else {
    button.style.backgroundColor = "white"
  }
}
