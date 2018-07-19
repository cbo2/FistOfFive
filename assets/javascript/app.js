$(document).ready(function () {

    // VARIBALES
    //******************************************************************************************************************
    //******************************************************************************************************************

    // Video camera
    const constraints = {
        video: true
    };

    const img = document.querySelector('#screenshot-img');
    const video = document.querySelector('#screenshot-video');
    const canvas = document.createElement('canvas');

    // Object vairable to store data to be sent to Firebase
    var database = Object;

    // Array to hold movies that will be in the survey
    var movieArray = ["It", "The Hangover", "The Notebook", "Deadpool", "Bad Boys", "Caddyshack", "Die Hard", "Black Panther"];

    // Array index to ensure movies goes in order of the above movieArray
    var movieArrayIndex = 0;

    // Map will hold all of the movie data from OMDB
    var movieDataMap = new Map();

    // demographic data
    var age = 0;
    var ethnicity = "";
    var gender = "";
    var zipcode = "";

    // FUNCTIONS
    //******************************************************************************************************************
    //******************************************************************************************************************

    // Function to initialize connection to Firebase
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

    // Function to check if window supports camera functionality
    function hasGetUserMedia() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }

    // Function for video to determine if video stream works
    function handleSuccess(stream) {
        video.srcObject = stream;
    }

    // Function if video stream fails
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
                age = faces.faces[0].attributes.age.value;
                ethnicity = faces.faces[0].attributes.ethnicity.value;
                gender = faces.faces[0].attributes.gender.value;

                console.log("Success!  The result is:  " + json);
                console.log("====== age is: " + age);
                console.log("====== ethnicity is: " + ethnicity);
                console.log("====== gender is: " + gender);
                console.log("attributes: " + face_attributes);
            },
            error: function (error) {
                console.log("there was an error! " + JSON.stringify(error));
            },
            timeout: 10 * 1000
        });
    }

    // Function to remove information from movie just rated and adds info for the next movie in index.html
    function movieSurvey() {
        // Assign the movie poster URL to vairable imgURL
        var imgURL = movieDataMap.get(movieArray[movieArrayIndex]).Poster;
        // Assign <img> element to variable movieImg
        var movieImg = $("<img>");
        // Assign src and alt to the movieImg element
        movieImg.attr({
            "class": "img-fluid rounded mx-auto d-block",
            "id": "movie-poster",
            "src": imgURL,
            "alt": movieArray[movieArrayIndex] + " Poster",
        });
        // Append the movie poster into movie-posters div in index.html
        $("#movie-posters").append(movieImg);
        // Append the movie info into movie-info div in index.html
        $("#movie-info").append("<h2>Title</h2>");
        $("#movie-info").append("<h4>" + movieDataMap.get(movieArray[movieArrayIndex]).Title + "</h4><br>");
        $("#movie-info").append("<h2>Actors/Actresses</h2>");
        $("#movie-info").append("<h4>" + movieDataMap.get(movieArray[movieArrayIndex]).Actors + "</h4><br>");
        $("#movie-info").append("<h2>Genre</h2>");
        $("#movie-info").append("<h4>" + movieDataMap.get(movieArray[movieArrayIndex]).Genre + "</h4><br>");
    }

    // Function to send data of each rating to Firebase
    function addForMovie(movieTitle, fistOfFiveVote, gender, ethnicity, age, zipcode) {
        console.log("The movie title is: " + movieTitle);
        database.ref("/").push({
            'movieTitle': movieTitle,
            'fistOfFive': fistOfFiveVote,
            'gender': gender,
            'ethnicity': ethnicity,
            'age': age,
            'zipcode': zipcode
        });
    }

    // Function to close out window at end
    function closeWin() {
        // Closes the window
        myWindow.close();
    }

    // MAIN PROCESS
    //******************************************************************************************************************
    //******************************************************************************************************************

    // Call function to initialize Firebase
    connectToFB();

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

    // If user clicks on Start Survey button, then execute the below code
    $("#modalIntializeButton").on('click', function () {
        //Prevent modal from closing by clicking outside of modal to be coded
    });

    // If user clicks on video camera feed, then execute the below code
    video.onclick = video.onclick = function () {
        // Extract Zip Code
        zipcode = $("#zipcode").val().trim();
        // If zipcode equals to blank or zipcode is less than or greater than 5, then execute below code
        if (zipcode === "" || zipcode.length < 5 || zipcode.length > 5) {
            $("#zipcodeErrorModal").modal("show");
            // If zipcode filled in properly, then execute below code
        } else {
            // Sets canvas width to 640 pixels
            canvas.width = 640;
            // Sets canvas height to 480 pixels
            canvas.height = 480;
            // Creates picture to pass to Face++
            canvas.getContext('2d').drawImage(video, 0, 0);
            
            // Saves data into a url
            img.src = canvas.toDataURL('image/jpeg', 1.0);
            // Removes part of binary code to work with Face++
            var strippedImageSrc = img.src.substring(23, img.src.length);

            // Passes photo taken to Face++
            callFacePP(strippedImageSrc);

            // This will hide the modal that is brought up when user clicks on the submit survey button
            $("#startSurveyModal").modal("hide")

            // Remove button used to begin survey
            $("#modalIntializeButton").remove();

            // Function removes information from movie just rated and adds info for the next movie in index.html
            movieSurvey();

            // Displays content existing in the rating-history div in index.html
            $("#rating-history").attr("style", "display: block");

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
        }
    }

    // This code relates to the camera video.
    navigator.mediaDevices.getUserMedia(constraints).
        then(handleSuccess).catch(handleError);

    // If user rates a movie, then execute the below code to move to the next movie until rated all movies
    $(document).on('click', ".ratingButtons", function () {

        // Run this code if not all of the movies have been rated
        if (movieArrayIndex < movieArray.length - 1) {
            // Empty contents of movie-posters div in index.html
            $("#movie-posters").empty();
            // Empty contents of movie-info div in index.html
            $("#movie-info").empty();
            // Assign the value of the rating to variable userRating when clicked
            var userRating = parseInt($(this).attr("ratingValue"));
            // Append the movie rating into rating-history div in index.html
            $("#rating-history").append(movieArray[movieArrayIndex] + ": " + userRating + "<br><hr>");
            
            console.log("User just rated " + movieArray[movieArrayIndex] + " with a value of: " + userRating);
            // persist the rating for this movie
            addForMovie(movieArray[movieArrayIndex], userRating, gender, ethnicity, age, zipcode);
            // Increase movieArrayIndex by one
            movieArrayIndex++;
            // Function removes information from movie just rated and adds info for the next movie in index.html
            movieSurvey();

            // Run this code if all movies have been rated
        } else {
            // Assign the value of the rating to variable userRating when clicked for last movie rated in survey
            var userRating = parseInt($(this).attr("ratingValue"));
            $("#rating-history").append(movieArray[movieArrayIndex] + ": " + userRating + "<br><hr>");
            // persist the rating for the last movie 
            addForMovie(movieArray[movieArrayIndex], userRating, gender, ethnicity, age, zipcode);
            // Empty contents of movie-posters div in index.html
            $("#movie-posters").empty();
            // Empty contents of movie-info div in index.html
            $("#movie-info").empty();
            // Empty contents of movie-rating div in index.html
            $("#movie-rating").empty();
            // Append a final message once movie survey is completed in index.html
            $("#end-div").append("<h1 class=text-center>All Done! Thanks for taking the survey!</h1><br>")

            // Assign a new button element to variable closeWindowButton
            var closeWindowButton = $("<button>");
            // Assign type, class, and id to variable closeWindowButton
            closeWindowButton.attr({
                "type" : "button",
                "class" : "btn-lg btn-primary",
                "id" : "close-window-button"
            })
            // Add text to be displayed in closeWindowButton
            closeWindowButton.text("Click to Close");
            // Append button to the end-button-div div in index.html
            $("#end-button-div").append(closeWindowButton);
            // Prepend a <br> to the rating-history div in index.html for aesthetics
            $("#rating-history").prepend("<br>");
        }
    });

    // If user clicks the Click to Close button, then execute the below code to close window
    $(document).on('click', "#close-window-button", function () {
        // Closes current window
        window.close();
    });
});
