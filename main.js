Webcam.set({
    width : 310,
    height : 300,
    png_quality : 90,
    image_format : 'png',

constraints: {
    facingMode: 'enviroment'


}
});


camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5version', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
    }
}