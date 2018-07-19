$(document).ready(function () {
    var chart = "";
    // var chartData = generateAgeChartData();

    updateCharts();

    function updateCharts() {
        chart = AmCharts.makeChart("age-graph", {
            "theme": "none",
            "type": "serial",
            "legend": {
                "equalWidths": false,
                "position": "top",
                "valueAlign": "left",
                "valueWidth": 100,
            },
            "dataProvider": generateAgeChartData(),
            "valueAxes": [{
                "position": "left",
                "title": "Fist of Five Rating",
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<img src='https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg'style='vertical-align:bottom; margin-right: 10px; width:38px; height:61px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "It",
                "type": "column",
                "valueField": "It"
            }, {
                "balloonText": "<img src='https://m.media-amazon.com/images/M/MV5BNDAxMTZmZGItZmM2NC00M2E1LWI1NmEtZjhhODM2MGU0ZmJlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'style='vertical-align:bottom; margin-right: 10px; width:38px; height:61px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "The Hangover",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.5,
                "valueField": "The Hangover"
            }, {
                "balloonText": "<img src='https://ia.media-imdb.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_SX300.jpg'style='vertical-align:bottom; margin-right: 10px; width:38px; height:61px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "The Notebook",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.45,
                "valueField": "The Notebook"
            }, {
                "balloonText": "<img src='https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'style='vertical-align:bottom; margin-right: 10px; width:38px; height:61px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Deadpool",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.4,
                "valueField": "Deadpool"
            }, {
                "balloonText": "<img src='https://m.media-amazon.com/images/M/MV5BMGE1ZTQ0ZTEtZTEwZS00NWE0LTlmMDUtMTE1ZWJiZTYzZTQ2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'style='vertical-align:bottom; margin-right: 10px; width:38px; height:61px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Bad Boys",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.35,
                "valueField": "Bad Boys"
            }, {
                "balloonText": "<img src='https://m.media-amazon.com/images/M/MV5BY2I1NWE2NzctNzNkYS00Nzg5LWEwZTQtN2I3Nzk3MTQwMDY2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'style='vertical-align:bottom; margin-right: 10px; width:38px; height:61px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Caddyshack",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.3,
                "valueField": "Caddyshack"
            }, {
                "balloonText": "<img src='https://m.media-amazon.com/images/M/MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_SX300.jpg'style='vertical-align:bottom; margin-right: 10px; width:38px; height:61px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Die Hard",
                "type": "column",
                "clustered": false,
                "columnWidth": 0.25,
                "valueField": "Die Hard"
            }, {
                "balloonText": "<img src='https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg'style='vertical-align:bottom; margin-right: 10px; width:38px; height:61px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
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


        // ageData.push(
        //     {
        //         "age": "<20",
        //         "It": 5,
        //         "The Hangover": 4.3,
        //         "The Notebook": 3.9,
        //         "Deadpool": 4.8,
        //         "Bad Boys": 3.8,
        //         "Caddyshack": 2,
        //         "Die Hard": 2.5,
        //         "Black Panther": 4.1
        //     }
        // );
        ageData.push(
            {
                "age": "<30",
                "It": 0,
                "The Hangover": 0,
                "The Notebook": 0,
                "Deadpool": 0,
                "Bad Boys": 0,
                "Caddyshack": 0,
                "Die Hard": 0,
                "Black Panther": 0
            }
        );
        ageData.push(
            {
                "age": "30-39",
                "It": 0,
                "The Hangover": 0,
                "The Notebook": 0,
                "Deadpool": 0,
                "Bad Boys": 0,
                "Caddyshack": 0,
                "Die Hard": 0,
                "Black Panther": 0
            }
        );
        ageData.push(
            {
                "age": "40--49",
                "It": 0,
                "The Hangover": 0,
                "The Notebook": 0,
                "Deadpool": 0,
                "Bad Boys": 0,
                "Caddyshack": 0,
                "Die Hard": 0,
                "Black Panther": 0
            }
        );
        ageData.push(
            {
                "age": ">50",
                "It": 0,
                "The Hangover": 0,
                "The Notebook": 0,
                "Deadpool": 0,
                "Bad Boys": 0,
                "Caddyshack": 0,
                "Die Hard": 0,
                "Black Panther": 0
            }
        );

        return ageData;
    }

    // K = age, V = Map (K = title, V = array of vote values)
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

    testFB();
    function testFB() {
        database.ref("/").push({
            'movieTitle': "Bad Boys",
            'fistOfFive': 2,
            'gender': "female",
            'ethnicity': "WHITE",
            'age': 31,
            'zipcode': 60606
        });
        database.ref("/").push({
            'movieTitle': "Bad Boys",
            'fistOfFive': 3,
            'gender': "female",
            'ethnicity': "WHITE",
            'age': 32,
            'zipcode': 60606
        });
        database.ref("/").push({
            'movieTitle': "Bad Boys",
            'fistOfFive': 5,
            'gender': "female",
            'ethnicity': "WHITE",
            'age': 39,
            'zipcode': 60606
        });
    }


    // "It", "The Hangover", "The Notebook", "Deadpool", "Bad Boys", "Caddyshack", "Die Hard", "Black Panther"
    // TODO - if we don't have access to the movieTitle, need to do this:
    //     database.ref("/Caddyshack").on("child_added", function(snapshot) {
    //     database.ref("/Bad Boys").on("child_added", function(snapshot) {
    //     ...
    //database.ref("/CaddyShack").on("child_added", function (snapshot) {
    database.ref("/").on("child_added", function (snapshot) {

        // Print the local data to the console.
        console.log(snapshot.val());
        console.log("age is: " + snapshot.val().age);
        if (snapshot.val().age < 30) {
            updateAgeData(snapshot.val().movieTitle, "under 30", 0, snapshot.val().fistOfFive);
        } else if (snapshot.val().age < 40) {
            updateAgeData(snapshot.val().movieTitle, "under 40", 1, snapshot.val().fistOfFive);
        } else if (snapshot.val().age < 50) {
            updateAgeData(snapshot.val().movieTitle, "under 50", 2, snapshot.val().fistOfFive);
        } else {
            updateAgeData(snapshot.val().movieTitle, "over 50", 3, snapshot.val().fistOfFive);
        }

        // If any errors are experienced, log them to console.
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

    function updateAgeData(movie, age, indexToChartData, fistValue) {

        var ageData = ageMap.get(age);
        if (ageData == null) {
            ageMap.set(age, new Map().set(movie, [fistValue]));
            console.log("the ageMap now has: " + ageMap.get(age));
            console.log("==== " + ageMap.get(age).get(movie) + " ====");
            chart.dataProvider[indexToChartData][movie] = fistValue;
        } else {
            var ageRangeMap = ageMap.get(age);
            console.log("the current ageRangeMap is: " + ageRangeMap);
            var array = ageRangeMap.get(movie);
            if (array == null) { array = []; }
            console.log("the array is: " + array);
            array.push(fistValue);
            ageRangeMap.set(movie, array);
            ageMap.set(age, ageRangeMap);
            var sum = 0;
            var i = 0;
            for (; i < ageMap.get(age).get(movie).length; i++) {
                sum += ageMap.get(age).get(movie)[i];
            }
            console.log("current avg is: " + (sum / i));
            chart.dataProvider[indexToChartData][movie] = (sum / i);
        }
        chart.validateData();
        console.log("****** the chart is: " + JSON.stringify(chart.dataProvider));
    }

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