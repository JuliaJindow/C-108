var prediction1 = "";
var prediction2 = "";

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

  var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5uyicomNu/model.json",modelLoaded);

  function modelLoaded() {
      console.log("Model is Loaded !!");
  }

  function speak() {
    var synth = window.speechSynthesis;
    var speakdata1 = "The first prediction is " + prediction1;
    var speakdata2 = "The second prediction is " + prediction2;
    var utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterthis);
  }

  function check() {
      var img = document.getElementById("captured_image");
      classifier.classify(img,gotResult);
  }

  function gotResult(error,results) {
      if (error) {
          console.error(error);
      } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if (results[0].label == "happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if (results[0].label == "sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if (results[0].label == "angry") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
        if (results[0].label == "surprised") {
            document.getElementById("update_emoji").innerHTML = "&#128562;";
        }
        if (results[1].label == "happy") {
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }
        if (results[1].label == "sad") {
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }
        if (results[1].label == "angry") {
            document.getElementById("update_emoji2").innerHTML = "&#128548;";
        }
        if (results[1].label == "surprised") {
            document.getElementById("update_emoji2").innerHTML = "&#128562;";
        }
      }
  }