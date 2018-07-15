$(document).ready(function () {

    const constraints = {
        video: true
    };

    function hasGetUserMedia() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }

    if (hasGetUserMedia()) {
        // Good to go!
    } else {
        alert('getUserMedia() is not supported by your browser');
    }

    const img = document.querySelector('#screenshot-img');
    const video = document.querySelector('#screenshot-video');

    const canvas = document.createElement('canvas');

    video.onclick = video.onclick = function () {
        // canvas.width = video.videoWidth;
        canvas.width = 640;
        // canvas.height = video.videoHeight;
        canvas.height = 480;
        canvas.getContext('2d').drawImage(video, 0, 0);
        // Other browsers will fall back to image/png
        // img.src = canvas.toDataURL('image/webp');
        // img.src = canvas.toDataURL('image/png');
        img.src = canvas.toDataURL('image/jpeg', 1.0);
        // img.src = canvas.toDataURL({format: 'jpeg', width: 640, height: 480, quality: 1.0});
        console.log("img.src = " + img.src);
        var strippedImageSrc = img.src.substring(23, img.src.length);
        console.log("the stripped img.src = " + strippedImageSrc);
        // convertCanvasToImage(canvas);

        callFacePP(strippedImageSrc);
    };

    function handleSuccess(stream) {
        video.srcObject = stream;
    }

    function handleError(error) {
        console.error('Reeeejected!', error);
    }

    navigator.mediaDevices.getUserMedia(constraints).
        then(handleSuccess).catch(handleError);


    // Converts canvas to an image
    function convertCanvasToImage(canvas) {
        var image = new Image();
        image.src = canvas.toDataURL("image/jpeg");
        console.log("our image is: " + image.src);
        return image;
    }

    function callFacePP(img) {
        var API_URL = "https://api-us.faceplusplus.com/facepp/v3";
        var API_KEY = "paQtvvWUvJ3j0I_ISUA3_eCHhId9iZFl";
        var API_SECRET = "3lS34CClXxNX3LnlLfaK9Q4uP8lwiTZX";
        var face_attributes = "gender,age,smiling,eyestatus,emotion,ethnicity";

        $.ajax({
            url: API_URL + '/detect',
            method: "POST",
            data: {
                api_key: API_KEY,
                api_secret: API_SECRET,
                // image_file: img,
                image_base64: img,
                // image_url: "https://friendlydentalgroup.com/wp-content/uploads/2015/12/doc-alone-640x480.png",
                return_attributes: face_attributes
            },
            // dataType: 'jsonp',
            success: function (faces) {
                var json = JSON.stringify(faces, null, '  ');
                console.log("Success!  The result is:  " + json);
                console.log("attributes: " + face_attributes);
                // alert("Holy crap, you are a " + faces.faces[0].attributes.age.value +
                //     " year old " + faces.faces[0].attributes.ethnicity.value + " " + faces.faces[0].attributes.gender.value
                // );
            },
            error: function (error) {
                console.log("there was an error! " + JSON.stringify(error));
            },
            timeout: 10 * 1000
        });
    }
    // data: {
    //                 api_key: API_KEY,
    //                 api_secret: API_SECRET,
    //                 // image_url: img,
    //                 image_file: img,
    //                 // image_url: "https://friendlydentalgroup.com/wp-content/uploads/2015/12/doc-alone-640x480.png",
    //                 return_attributes: face_attributes
    //             },


    // Begin Code for Voter Survey
    //************************************************************************************************************************

    // VARIBALES
    //******************************************************************************************************************
    var movieArray = ["It", "The Hangover", "How Stella Got Her Grove Back", "Deadpool", "CaddyShack", "Blair Witch Project", "Bad Boys", "How to Loose A Guy in 10 Days", "Blair Witch Project", "Die Hard", "Black Panther"];

    var movieSurveyTime = 15

    // FUNCTIONS
    //******************************************************************************************************************
    function movieSurveyTimer() {
        intervalId = setInterval(decrementMovieSurveyTime, 1000);
    }

    function decrementMovieSurveyTime() {
        movieSurveyTime--;
        if (movieSurveyTime === 0) {
            stop();
            // What do you want to do once the 60 second is up?  Time by each rating having a time? Or the entire survey has time?
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    // MAIN PROCESS
    //******************************************************************************************************************

    movieSurveyTimer();

    // Loop to pull in all info from OMDB for movies in movieArray
    for (var i = 0; i < movieArray.length; i++) {
        var queryURL = "https://www.omdbapi.com/?t=" + movieArray[i] + "&y=&plot=short&apikey=trilogy";

        console.log(movieArray[i]);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    }

    $("#screenshot-button").click(function () {
        var zipcode = $("#zipcode").val().trim();
        console.log(zipcode);
    });



    $(".answerButton").click(function () {
        stop();
    });
});
