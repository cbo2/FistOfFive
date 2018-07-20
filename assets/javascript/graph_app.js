$(document).ready(function () {

    // Global variables

    // K = age, V = Map (K = title, V = array of vote values)
    var ageMap = new Map();

    // K = ethnicity, V = Map (K = title, V = array of vote values)
    var ethnicityMap = new Map();

    // K = gender, V = Map (K = title, V = array of vote values)
    var genderMap = new Map();


    // This code will send data to Firebase
    var database = Object;

    // Chart data
    var ageChart = "";
    var genderChart = "";
    var ethnicityChart = "";
    var allEthnicities = [];
    var ethnicityData = [];
    var allGenders = [];
    var genderData = [];


    updateCharts();

    function updateCharts() {

        // generate the age chart
        ageChart = AmCharts.makeChart("age-graph", {
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
            "graphs": generateGraphs(),
            "plotAreaFillAlphas": 0.1,
            "categoryField": "age",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "export": {
                "enabled": true
            }
        });

        // generate the ethnicity chart
        ethnicityChart = AmCharts.makeChart("ethnicity-graph", {
            "theme": "none",
            "type": "serial",
            "legend": {
                "equalWidths": false,
                "position": "top",
                "valueAlign": "left",
                "valueWidth": 100,
            },
            "dataProvider": generateEthnicityChartData(),
            "valueAxes": [{
                "position": "left",
                "gridCount": 10,
                // "autoGridCount": "true",
                // "min": 0,
                // "max": 100,
                "title": "Fist of Five Rating",
            }],
            "startDuration": 1,
            "graphs": generateGraphs(),
            "plotAreaFillAlphas": 0.1,
            "categoryField": "ethnicity",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "export": {
                "enabled": true
            }
        });

        // generate the ethnicity chart
        genderChart = AmCharts.makeChart("gender-graph", {
            "theme": "none",
            "type": "serial",
            "legend": {
                "equalWidths": false,
                "position": "top",
                "valueAlign": "left",
                "valueWidth": 100,
            },
            "dataProvider": generateGenderChartData(),
            "valueAxes": [{
                "position": "left",
                "title": "Fist of Five Rating",
            }],
            "startDuration": 1,
            "graphs": generateGraphs(),
            "plotAreaFillAlphas": 0.1,
            "categoryField": "gender",
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

    function generateGraphs() {
        return [{
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
        }];
    }

    function generateEthnicityChartData(newEntry) {
        if (newEntry != null) {
            ethnicityData.push(newEntry);
            //console.log("**** ethnicityData now has: " + JSON.stringify(ethnicityData) + " ****");
        }
        return ethnicityData;
    }

    function generateGenderChartData(newEntry) {
        if (newEntry != null) {
            genderData.push(newEntry);
            //console.log("**** genderData now has: " + JSON.stringify(genderData) + " ****");
        }
        return genderData;
    }

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


    // testFB();
    function testFB() {
        var genderOptions = ['Female', 'Male'];
        var ethnicityOptions = ['BLACK', 'WHITE', 'ASIAN', 'INDIA'];
        var ageOptions = [22, 32, 42, 52, 23, 33, 43, 53, 24, 34, 44, 54];
        var movieOptions = ["It", "The Hangover", "The Notebook", "Deadpool", "Bad Boys", "Caddyshack", "Die Hard", "Black Panther"];

        for (i = 0; i < 40; i++) {    // simulate 40 users entering data
            for (j = 0; j < movieOptions.length; j++) {  // go through all 8 movies for each user
                var testMovie = movieOptions[Math.floor((Math.random() * movieOptions.length))];
                var testFist = Math.floor((Math.random() * 5));
                var testGender = genderOptions[Math.floor((Math.random() * genderOptions.length))];
                var testEthnicity = ethnicityOptions[Math.floor((Math.random() * ethnicityOptions.length))];
                var testAge = ageOptions[Math.floor((Math.random() * ageOptions.length))];
                console.log("test with[" + testMovie + "," + testFist + "," + testGender + "," + testEthnicity + "," + testAge + "]");
                database.ref("/").push({
                    'movieTitle': testMovie,
                    'fistOfFive': testFist,
                    'gender': testGender,
                    'ethnicity': testEthnicity,
                    'age': testAge,
                    'zipcode': 60606
                });
            }
        }
    }


    // "It", "The Hangover", "The Notebook", "Deadpool", "Bad Boys", "Caddyshack", "Die Hard", "Black Panther"
    // TODO - if we don't have access to the movieTitle, need to do this:
    //     database.ref("/Caddyshack").on("child_added", function(snapshot) {
    //     database.ref("/Bad Boys").on("child_added", function(snapshot) {
    //     ...
    //database.ref("/CaddyShack").on("child_added", function (snapshot) {
    database.ref("/").on("child_added", function (snapshot) {

        // Print the local data to the console.
        //console.log(snapshot.val());
        processByAge(snapshot);
        processByEthnicity(snapshot);
        processByGender(snapshot);

        // If any errors are experienced, log them to console.
    }, function (errorObject) {
        //console.log("The read failed: " + errorObject.code);
    });

    function processByAge(snapshot) {
        //console.log("age is: " + snapshot.val().age);
        if (snapshot.val().age < 30) {
            updateAgeData(snapshot.val().movieTitle, "under 30", 0, snapshot.val().fistOfFive);
        }
        else if (snapshot.val().age < 40) {
            updateAgeData(snapshot.val().movieTitle, "under 40", 1, snapshot.val().fistOfFive);
        }
        else if (snapshot.val().age < 50) {
            updateAgeData(snapshot.val().movieTitle, "under 50", 2, snapshot.val().fistOfFive);
        }
        else {
            updateAgeData(snapshot.val().movieTitle, "over 50", 3, snapshot.val().fistOfFive);
        }
    }

    function updateAgeData(movie, age, indexToChartData, fistValue) {

        // var ageData = ageMap.get(age);
        if (ageMap.get(age) == null) {
            ageMap.set(age, new Map().set(movie, [fistValue]));
            //console.log("the ageMap now has: " + ageMap.get(age));
            //console.log("==== " + ageMap.get(age).get(movie) + " ====");
            ageChart.dataProvider[indexToChartData][movie] = fistValue;
        } else {
            var ageRangeMap = ageMap.get(age);
            //console.log("the current ageRangeMap is: " + ageRangeMap);
            var array = ageRangeMap.get(movie);
            if (array == null) { array = []; }
            //console.log("the array is: " + array);
            array.push(fistValue);
            ageRangeMap.set(movie, array);
            ageMap.set(age, ageRangeMap);
            var sum = 0;
            var i = 0;
            for (; i < ageMap.get(age).get(movie).length; i++) {
                sum += ageMap.get(age).get(movie)[i];
            }
            //console.log("current avg is: " + Math.round((sum / i) * 100) / 100);
            ageChart.dataProvider[indexToChartData][movie] = Math.round((sum / i) * 10) / 10;
        }
        ageChart.validateData();
        console.log("****** age[" + age + "] and movie[" + movie + "] now makes chartdata: " + JSON.stringify(ageChart.dataProvider));
        //console.log("****** the chart is: " + JSON.stringify(ageChart.dataProvider));
    }

    function processByEthnicity(snapshot) {
        var userEthnicity = snapshot.val().ethnicity;
        //console.log("ethnicity is: " + userEthnicity);
        foundBool = false;
        var i = 0;
        // for (; i < allEthnicities.length; i++) {
        while (!foundBool && i < allEthnicities.length) {
            if (allEthnicities[i] === userEthnicity) {
                //console.log("ethnicity found and using index: " + i);
                foundBool = true;
            } else {
                i++;
            }
        }
        if (!foundBool) {
            // since we didn't see this ethnicity before and chart it, add it as a new one to the chart
            allEthnicities.push(userEthnicity);

            generateEthnicityChartData(
                {
                    "ethnicity": userEthnicity,
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
            ethnicityChart.validateData();

        }
        updateEthnicityData(snapshot.val().movieTitle, userEthnicity, i, snapshot.val().fistOfFive);
    }

    function updateEthnicityData(movie, ethnicity, indexToChartData, fistValue) {

        if (ethnicityMap.get(ethnicity) == null) {
            ethnicityMap.set(ethnicity, new Map().set(movie, [fistValue]));
            //console.log("the ethnicityMap now has: " + JSON.stringify(ethnicityMap.get(ethnicity)));
            //console.log("==== " + ethnicityMap.get(ethnicity).get(movie) + " ====");
            ethnicityChart.dataProvider[indexToChartData][movie] = fistValue;
        } else {
            var ethnicityDetailMap = ethnicityMap.get(ethnicity);
            //console.log("the current ethnicityDetailMap is: " + JSON.stringify(ethnicityDetailMap));
            var array = ethnicityDetailMap.get(movie);
            if (array == null) { array = []; }
            //console.log("the array is: " + array);
            array.push(fistValue);
            ethnicityDetailMap.set(movie, array);
            ethnicityMap.set(ethnicity, ethnicityDetailMap);
            var sum = 0;
            var j = 0;
            for (; j < ethnicityMap.get(ethnicity).get(movie).length; j++) {
                sum += ethnicityMap.get(ethnicity).get(movie)[j];
            }
            //console.log("current avg is: " + Math.round((sum / j) * 100) / 100);
            ethnicityChart.dataProvider[indexToChartData][movie] = Math.round((sum / j) * 10) / 10;
        }
        ethnicityChart.validateData();
        console.log("****** ethnicity[" + ethnicity + "] and movie[" + movie + "] now makes chartdata: " + JSON.stringify(ageChart.dataProvider));
        //console.log("****** the ethnicity chart is: " + JSON.stringify(ethnicityChart.dataProvider));
    }

    function processByGender(snapshot) {
        var userGender = snapshot.val().gender;
        //console.log("gender is: " + userGender);
        foundBool = false;
        var i = 0;
        // for (; i < allEthnicities.length; i++) {
        while (!foundBool && i < allGenders.length) {
            if (allGenders[i] === userGender) {
                //console.log("gender found and using index: " + i);
                foundBool = true;
            } else {
                i++;
            }
        }
        if (!foundBool) {
            // since we didn't see this gender before and chart it, add it as a new one to the chart
            allGenders.push(userGender);
            // i++;  //  need to advance the value of i up by 1 used to index our data in the chart

            generateGenderChartData(
                {
                    "gender": userGender,
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
            genderChart.validateData();

        }
        updateGenderData(snapshot.val().movieTitle, userGender, i, snapshot.val().fistOfFive);
    }

    function updateGenderData(movie, gender, indexToChartData, fistValue) {

        if (genderMap.get(gender) == null) {
            genderMap.set(gender, new Map().set(movie, [fistValue]));
            //console.log("the genderMap now has: " + JSON.stringify(genderMap.get(gender)));
            //console.log("==== " + genderMap.get(gender).get(movie) + " ====");
            genderChart.dataProvider[indexToChartData][movie] = fistValue;
        } else {
            var genderDetailMap = genderMap.get(gender);
            //console.log("the current genderDetailMap is: " + JSON.stringify(genderDetailMap));
            var array = genderDetailMap.get(movie);
            if (array == null) { array = []; }
            //console.log("the array is: " + array);
            array.push(fistValue);
            genderDetailMap.set(movie, array);
            genderMap.set(gender, genderDetailMap);
            var sum = 0;
            var j = 0;
            for (; j < genderMap.get(gender).get(movie).length; j++) {
                sum += genderMap.get(gender).get(movie)[j];
            }
            //console.log("current avg is: " + Math.round((sum / j) * 100) / 100);
            genderChart.dataProvider[indexToChartData][movie] = Math.round((sum / j) * 10) / 10;
        }
        genderChart.validateData();
        console.log("****** gender[" + gender + "] and movie[" + movie + "] now makes chartdata: " + JSON.stringify(ageChart.dataProvider));
        //console.log("****** the gender chart is: " + JSON.stringify(genderChart.dataProvider));
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