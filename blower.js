window.alert("Please turn your volume up for the best results.");

var c = new AudioContext, oscillator;

var setTone = function (val) {

	if (oscillator) {
    oscillator.stop();
  }
  
  oscillator = c.createOscillator();
  oscillator.frequency.value = val * 13
	oscillator.connect(c.destination);
  oscillator.start(0);

};

function blow(){
  window.location.replace("blower.html");
}


function stop_blow(){
    window.location.replace("index.html")
}
function min(){
  
  document.getElementById("image-fan-moving-1").style.display="inline-block";
  document.getElementById("image-fan").style.display="none";
  document.getElementById("image-fan-moving-2").style.display="none";
  document.getElementById("image-fan-moving-3").style.display="none";
  setTone(10);
}function med(){
  setTone(30);
  document.getElementById("image-fan-moving-1").style.display="none";
  document.getElementById("image-fan").style.display="none";
  document.getElementById("image-fan-moving-2").style.display="inline-block";
  document.getElementById("image-fan-moving-3").style.display="none";
}function max(){
  setTone(50);
  document.getElementById("image-fan-moving-1").style.display="none";
  document.getElementById("image-fan").style.display="none";
  document.getElementById("image-fan-moving-2").style.display="none";
  document.getElementById("image-fan-moving-3").style.display="inline-block";
}
