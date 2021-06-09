var prediction = "";

 Webcam.set({ 
     height : 300,
     width : 350,
     image_format : 'png',
     png_quality : 100
 });

 var camera = document.getElementById("camera");

 Webcam.attach('#camera');

  function takeSnapshot(){
      Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
      });
  }


  console.log('ml5 version : ', ml5.version);

  var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uzyfW48Jf/model.json",modelLoaded);

  function modelLoaded() {
      console.log("Model is Loaded !!");
  }

  function speak() {
    var synth = window.speechSynthesis;
    var speakdata = "The first prediction is " + prediction;
  }