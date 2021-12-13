AOS.init()
// Click images to go to websites
// Click link buttons to go to Github pages

$("#30MFF").click(() => {
  window.open('https://eunsuchoice.github.io/30mff/meet.html');
});
$("#link30MFF").click(() => {
  window.open('https://github.com/eunsuchoice/eunsuchoice.github.io/tree/main/30mff');
});

$("#cow").click(() => {
  window.open('https://chinoukaegbu.github.io/comicassignment.github.io/');
});
$("#linkcow").click(() => {
  window.open('https://github.com/ChinoUkaegbu/comicassignment.github.io');
});

$("#sow").click(() => {
  window.open('https://jjeongin.github.io/way-back-home/');
});
$("#linksow").click(() => {
  window.open('https://github.com/jjeongin/way-back-home');
});

$("#vow").click(() => {
  window.open('https://nouf-alabbasi.github.io/Origami/options.html');
});
$("#linkvow").click(() => {
  window.open('https://github.com/Nouf-Alabbasi/Origami');
});





//collapsible for descriptions
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
