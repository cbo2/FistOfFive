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
            'ethnicity': "white",
            'age': 31,
            'zipcode': 60606
        });
        database.ref("/").push({
            'movieTitle': "Bad Boys",
            'fistOfFive': 3,
            'gender': "female",
            'ethnicity': "white",
            'age': 32,
            'zipcode': 60606
        });
        database.ref("/").push({
            'movieTitle': "Bad Boys",
            'fistOfFive': 5,
            'gender': "female",
            'ethnicity': "white",
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

        } else if (snapshot.val().age < 40) {
            console.log("****** the chart is: " + JSON.stringify(chart.dataProvider));
            chart.dataProvider[1]["It"] = 1;
            // chartData = chart;
            chart.validateData();
            console.log("****** the chart is: " + JSON.stringify(chart.dataProvider));
            var ageData = ageMap.get(30);
            if (ageData == null) {
                ageMap.set(30, new Map().set(snapshot.val().movieTitle, [snapshot.val().fistOfFive]));
                //  ageMap.set(30, {
                //     'movieTitle' : snapshot.val().movieTitle, 
                //     'fistArray' : [snapshot.val().fistOfFive]
                // });
                console.log("got to under 40 bucket, but was empty and now contains: " + JSON.stringify(ageMap.get(30)));
                console.log("the fistarray is: " + ageMap.get(30).get(snapshot.val().movieTitle) );
            } else {
                // var array = ageMap.get(30).fistArray;
                // console.log("the current array is: " + array);
                // array.push(snapshot.val().fistOfFive);
                // console.log("the updated array is: " + array);
                // ageMap.set(30, {
                //     'movieTitle' : snapshot.val().movieTitle, 
                //     'fistArray' : array
                // });
                // console.log("the updated ageMap for 40 is: " + JSON.stringify(ageMap.get(30)));
                // console.log("current count is: " + ageMap.get(30).fistArray.length);
                // var sum = 0;
                // var i = 0;
                // for (; i < ageMap.get(30).fistArray.length; i++) {
                //     sum += ageMap.get(30).fistArray[i];
                // }
                // console.log("current avg is: " + (sum / i));

                var ageRangeMap = ageMap.get(30);
                var array = ageRangeMap.get(snapshot.val().movieTitle);
                console.log("the current array is: " + array);
                array.push(snapshot.val().fistOfFive);
                console.log("the updated array is: " + array);
                ageRangeMap.set(snapshot.val().movieTitle, array);
                console.log("The value of the ageRangeMap is: " + ageRangeMap.get(snapshot.val().movieTitle));
                ageMap.set(30, ageRangeMap);
                console.log("the updated ageMap for 30 is: " + (ageMap.get(30)));
                console.log("the array from this movie is: " + ageMap.get(30).get(snapshot.val().movieTitle));
                console.log("current count is: " + ageMap.get(30).get(snapshot.val().movieTitle).length);
                var sum = 0;
                var i = 0;
                for (; i < ageMap.get(30).get(snapshot.val().movieTitle).length; i++) {
                    sum += ageMap.get(30).get(snapshot.val().movieTitle)[i];
                }
                console.log("current avg is: " + (sum / i));
                chart.dataProvider[1][snapshot.val().movieTitle] = (sum / i);
                chart.validateData();
                console.log("****** the chart is: " + JSON.stringify(chart.dataProvider));
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