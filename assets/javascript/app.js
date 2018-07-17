$(document).ready(function () {

    // VARIBALES
    //******************************************************************************************************************
    //******************************************************************************************************************

    const constraints = {
        video: true
    };

    const img = document.querySelector('#screenshot-img');
    const video = document.querySelector('#screenshot-video');
    const canvas = document.createElement('canvas');

    // Array to hold movies that will be in the survey
    var movieArray = ["It", "The Hangover", "The Notebook", "Deadpool", "Bad Boys", "Caddyshack", "Die Hard", "Black Panther"];

    // Array index to ensure movies goes in order of the above movieArray
    var movieArrayIndex = 0;

    // Map will hold all of the movie data from OMDB
    var movieDataMap = new Map();

    // To be used? If so, then either each question will have a timer or the survey overall will have a timer
    var movieSurveyTime = 15

    // FUNCTIONS
    //******************************************************************************************************************
    //******************************************************************************************************************

    // Function to check if window supports camera functionality
    function hasGetUserMedia() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }

    // Function for video, but for what?????????????????????
    function handleSuccess(stream) {
        video.srcObject = stream;
    }

    // Function for video, but for what?????????????????????
    function handleError(error) {
        console.error('Reeeejected!', error);
    }

    // Function to send picture to Face++ and retrieve back data on the picture of the person
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
                image_base64: img,
                return_attributes: face_attributes
            },
            // dataType: 'jsonp',
            success: function (faces) {
                var json = JSON.stringify(faces, null, '  ');
                console.log("Success!  The result is:  " + json);
                console.log("attributes: " + face_attributes);
            },
            error: function (error) {
                console.log("there was an error! " + JSON.stringify(error));
            },
            timeout: 10 * 1000
        });
    }

    // Function removes information from movie just rated and adds info for the next movie in index.html
    function movieSurvey() {
        // Assign the movie poster URL to vairable imgURL
        var imgURL = movieDataMap.get(movieArray[movieArrayIndex]).Poster;
        // Assign <img> element to variable movieImg
        var movieImg = $("<img>");
        // Assign src and alt to the movieImg element
        movieImg.attr({
            "class" : "img-fluid rounded",
            "src": imgURL,
            "alt": movieArray[movieArrayIndex] + " Poster"
        });
        // Append the movie poster into movie-image div in index.html
        $("#movie-image").append(movieImg);
        // Append the movie info into movie-info div in index.html
        $("#movie-info").append("<p>Title: " + movieDataMap.get(movieArray[movieArrayIndex]).Title + "</p>");
        $("#movie-info").append("<p>Actors: " + movieDataMap.get(movieArray[movieArrayIndex]).Actors + "</p>");
        $("#movie-info").append("<p>Genre: " + movieDataMap.get(movieArray[movieArrayIndex]).Genre + "</p>");
        console.log(movieArrayIndex);
    }

    // Function to run decrementMovieSurveyTime function every second
    function movieSurveyTimer() {
        intervalId = setInterval(decrementMovieSurveyTime, 1000);
    }

    // Function run every second (currently only decrmenting the time until variable movieSurveyTime equals 0)
    function decrementMovieSurveyTime() {
        movieSurveyTime--;
        if (movieSurveyTime === 0) {
            stop();
            // What do you want to do once the 60 second is up?  Time by each rating having a time? Or the entire survey has time?
        }
    }

    // Function to stop decrementing once movieSurveyTime equals 0
    function stop() {
        clearInterval(intervalId);
    }

    // MAIN PROCESS
    //******************************************************************************************************************
    //******************************************************************************************************************

    // Loop to pull in all info from OMDB for movies in movieArray
    for (var i = 0; i < movieArray.length; i++) {
        var queryURL = "https://www.omdbapi.com/?t=" + movieArray[i] + "&y=&plot=short&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            movieDataMap.set(response.Title, response);
        });
    }

    // Check if window supports camera functionality
    if (hasGetUserMedia()) {
        // Good to go!
    } else {
        alert('getUserMedia() is not supported by your browser');
    }

    // If user clicks on video camera feed, then execute the below code
    video.onclick = video.onclick = function () {
        // Extract Zip Code
        var zipcode = $("#zipcode").val().trim();
        console.log(zipcode);
        canvas.width = 640;
        canvas.height = 480;
        canvas.getContext('2d').drawImage(video, 0, 0);
        img.src = canvas.toDataURL('image/jpeg', 1.0);
        var strippedImageSrc = img.src.substring(23, img.src.length);

        callFacePP(strippedImageSrc);

        // Remove button used to begin survey
        $("#modalIntializeButton").remove();

        // Function removes information from movie just rated and adds info for the next movie in index.html
        movieSurvey();

        // Creates five buttons for ratings
        for (var i = 0; i < 5; i++) {
            // Assign a new button element to variable ratingButton
            var ratingButton = $("<button>");
            // Assign class, id, and value to each ratingButton
            ratingButton.attr({
                "class": "ratingButtons",
                "id": "ratingButton" + (i + 1),
                "ratingValue": i + 1
            });
            // Add ratingButton to the movie-rating div in index.html
            $("#movie-rating").append(ratingButton);
        }
        console.log(movieDataMap);
    };

    // This code relates to the camera video.
    navigator.mediaDevices.getUserMedia(constraints).
        then(handleSuccess).catch(handleError);

    // Intiates timer that is currently not being used for any purpose
    movieSurveyTimer();

    // If user rates a movie, then execute the below code to move to the next movie until rated all movies
    $(document).on('click', ".ratingButtons", function () {

        // Run this code if not all of the movies have been rated
        if (movieArrayIndex < movieArray.length - 1) {
            // Empty contents of movie-image div in index.html
            $("#movie-image").empty();
            // Empty contents of movie-info div in index.html
            $("#movie-info").empty();
            // Assign the value of the rating to variable userRating when clicked
            var userRating = parseInt($(this).attr("ratingValue"));
            // Append the movie rating into rating-history div in index.html
            $("#rating-history").append(movieArray[movieArrayIndex] + ": " + userRating + "<br><hr>");
            // Increase movieArrayIndex by one
            movieArrayIndex++;
            // Function removes information from movie just rated and adds info for the next movie in index.html
            movieSurvey();

        // Run this code if all movies have been rated
        } else {
            // Assign the value of the rating to variable userRating when clicked for last movie rated in survey
            var userRating = parseInt($(this).attr("ratingValue"));
            $("#rating-history").append(movieArray[movieArrayIndex] + ": " + userRating + "<br><hr>");
            // Empty contents of movie-image div in index.html
            $("#movie-image").empty();
            // Empty contents of movie-info div in index.html
            $("#movie-info").empty();
            // Empty contents of movie-rating div in index.html
            $("#movie-rating").empty();
            // Append a final message once movie survey is completed in index.html
            $("#movie-rating").append("<h1>All Done! Thanks for taking the survey!</h1>")

            var closeWindowButton = $("<button>");
            closeWindowButton.attr({
                "type": "button",
                "class": "btn btn-primary",
                "onclick": "javacript:window.close()"
            })
            closeWindowButton.text("Click to Close");
            $("#movie-rating").append(closeWindowButton);
        }
    });

    // This code will send data to Firebase
    var database = Object;

    function connectToFB() {
        var config = {
            apiKey: "AIzaSyADB08nKl5i9oLbYvr1G3NwyJ1LGFw13ME",
            authDomain: "fistoffiverating.firebaseapp.com",
            databaseURL: "https://fistoffiverating.firebaseio.com",
            projectId: "fistoffiverating",
            storageBucket: "fistoffiverating.appspot.com",
            messagingSenderId: "665383282847"
        };

        firebase.initializeApp(config);
        database = firebase.database();
    }

    function addForMovie(movieTitle, gender, ethnicity, age, zipcode) {
        console.log("The movie title is: " + movieTitle);
        database.ref("/" + movieTitle).push({
            'gender': gender,
            'ethnicity': ethnicity,
            'age': age,
            'zipcode': zipcode
        });
    }

});
