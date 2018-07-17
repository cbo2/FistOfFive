$(document).ready(function () {

    updateCharts();

    function updateCharts() {
        var chart = AmCharts.makeChart("age-graph", {
            "theme": "none",
            "type": "serial",
            "dataProvider": generateAgeChartData(),
            "valueAxes": [{
                "position": "left",
                "title": "Fist of Five Rating",
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "It",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "It",
                "type": "column",
                "valueField": "It"
            }, {
                "balloonText": "The Hangover",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "The Hangover",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.5,
                "valueField": "The Hangover"
            }, {
                "balloonText": "The Notebook",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "The Notebook",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.45,
                "valueField": "The Notebook"
            }, {
                "balloonText": "Deadpool",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Deadpool",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.4,
                "valueField": "Deadpool"
            }, {
                "balloonText": "Bad Boys",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Bad Boys",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.35,
                "valueField": "Bad Boys"
            }, {
                "balloonText": "Caddyshack",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Caddyshack",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.3,
                "valueField": "Caddyshack"
            }, {
                "balloonText": "Die Hard",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Die Hard",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.25,
                "valueField": "Die Hard"
            }, {
                "balloonText": "Black Panther",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Black Panther",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.2,
                "valueField": "Black Panther"
            }],
            "plotAreaFillAlphas": 0.1,
            "categoryField": "age",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "export": {
                "enabled": true
            }

        });
    }

    function generateAgeChartData() {
        var ageData = [];


        ageData.push(
            {
                "age": "<20",
                "It": 5,
                "The Hangover": 4.3,
                "The Notebook": 3.9,
                "Deadpool": 4.8,
                "Bad Boys": 3.8,
                "Caddyshack": 2,
                "Die Hard": 2.5,
                "Black Panther": 4.1
            }
        );
        ageData.push(
            {
                "age": "20-29",
                "It": 4.8,
                "Bad Boys": 3.3,
                "Caddyshack": 3.7
            }
        );
        ageData.push(
            {
                "age": "30-39",
                "It": 3.2,
                "Bad Boys": 4,
                "Caddyshack": 4.2
            }
        );
        ageData.push(
            {
                "age": "40--49",
                "It": 2.0,
                "Bad Boys": 4.2,
                "Caddyshack": 5.0
            }
        );
        ageData.push(
            {
                "age": ">50",
                "It": 1.4,
                "The Hangover": 2.9,
                "The Notebook": 3,
                "Deadpool": 4.1,
                "Bad Boys": 3.9,
                "Caddyshack": 5,
                "Die Hard": 5,
                "Black Panther": 3.7
            }
        );

        return ageData;
    }

    var ageMap = new Map();

    // This code will send data to Firebase
    var database = Object;
    connectToFB();

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

    // "It", "The Hangover", "The Notebook", "Deadpool", "Bad Boys", "Caddyshack", "Die Hard", "Black Panther"
    // TODO - if we don't have access to the movieTitle, need to do this:
    //     database.ref("/Caddyshack").on("child_added", function(snapshot) {
    //     database.ref("/Bad Boys").on("child_added", function(snapshot) {
    //     ...
    database.ref("/CaddyShack").on("child_added", function (snapshot) {

        // Print the local data to the console.
        console.log(snapshot.val());
        console.log("age is: " + snapshot.val().age);
        if (snapshot.val().age < 30) {

        } else if (snapshot.val().age < 40) {
            if (ageMap.get(40) == null) {
                console.log("got to 40, but bucket is empty");
            }
        } else if (snapshot.val().age < 50) {

        } else {

        }

        // If any errors are experienced, log them to console.
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

});

/**
 * Format and output data as JSON
 */
// $data = array();
// foreach( $rows as $row ) {
//   $data[] = array(
//     'country'   => $row[0],
//     'sessions'  => $row[1]
//   );
// }

// echo json_encode( $data );