let synth = new Tone.PolySynth().toMaster();


document.body.addEventListener('keypress', (event) => {
  if(event.key == '1'){
    synth.triggerAttackRelease(['C3','E4','G4'], '4n')
    document.body.style.backgroundColor = "orange";
  }else if(event.key == '2'){
    synth.triggerAttackRelease(['D3','C4','F4','A4'], '4n')
    document.body.style.backgroundColor = "cyan";
  }else if(event.key == '3'){
    synth.triggerAttackRelease(['E3','B4','D4','G4'], '4n')
    document.body.style.backgroundColor = "green";
  }else if(event.key == '4'){
    synth.triggerAttackRelease(['F2','A4','F4','C5'], '4n')
    document.body.style.backgroundColor = "lightblue";
  }else if(event.key == '5'){
    synth.triggerAttackRelease(['G2','B4','D5','G4'], '4n')
    document.body.style.backgroundColor = "white";
  }else if(event.key == '6'){
    synth.triggerAttackRelease(['A3','C4','E5','A4'], '4n')
    document.body.style.backgroundColor = "lightgreen";
  }else if(event.key == '7'){
    synth.triggerAttackRelease(['B3','D4','B4','F5'], '4n')
    document.body.style.backgroundColor = "red";
  }else if(event.key == '8'){
    synth.triggerAttackRelease(['C3','E4','C4','G5'], '4n')
    document.body.style.backgroundColor = "orange";
    }
})








let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

interactable.addEventListener('mouseenter', () => {
  player.play();
})

interactable.addEventListener('mouseleave', () => {
  player.pause();
})

player.addEventListener('pause', () => {
  document.body.style.backgroundColor = "yellow";
  console.log("it's paused");
})

player.addEventListener('play', () => {
  document.body.style.backgroundColor = "purple";
  console.log("it's playing");
})

player.addEventListener('timeupdate',() => {
  console.log("the current time is", player.currentTime)

  if(player.currentTime > 5){
    interactable.style.borderRadius = "30px";
  }
} )
