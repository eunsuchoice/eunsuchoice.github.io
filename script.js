
document.getElementById("ticket1").addEventListener("mouseover", takeTicket1);
document.getElementById("ticket2").addEventListener("mouseover", takeTicket2);

function takeTicket1(){
  document.getElementById("ticket1").style.display = "none";
}

function takeTicket2(){
  document.getElementById("ticket2").style.display = "none";
}



function showVideo(){
  var x = document.getElementById("enter");

  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
}

document.getElementById("enter").style.display = "none";
