$(document).ready(function () {

    // Global variables

    // These Maps will hold the data coming from Firebase and used to organize and feed data to amcharts
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

    // generate all 3 charts
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

    // generate the "fixed" columns for age data by ranges
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

    // the generateGraphs is used by all the charts since the thing in common to all graphs 
    // is the plotting of the 8 movies with the movie attributes (like the tooltip image)
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

    // this function will be called to dynamically generate the ethnicity chart data
    function generateEthnicityChartData(newEntry) {
        if (newEntry != null) {
            ethnicityData.push(newEntry);
            //console.log("**** ethnicityData now has: " + JSON.stringify(ethnicityData) + " ****");
        }
        return ethnicityData;
    }

    // this function will be called to dynamically generate the gender chart data
    function generateGenderChartData(newEntry) {
        if (newEntry != null) {
            genderData.push(newEntry);
            //console.log("**** genderData now has: " + JSON.stringify(genderData) + " ****");
        }
        return genderData;
    }

    connectToFB();

    // connect to Firebase
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

    // Handle callbacks from Firebase when an entry is added
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

    // Handle callbacks from Firebase when an entry is removed
    database.ref("/").on("child_removed", function (snapshot) {

        ageMap.clear();
        genderMap.clear();
        ethnicityMap.clear();
        updateCharts();
        generateAgeChartData();
        ageChart.validateData();
        generateEthnicityChartData();
        ethnicityChart.validateData();
        generateGenderChartData();
        genderChart.validateData();

        // If any errors are experienced, log them to console.
    }, function (errorObject) {
        //console.log("The read failed: " + errorObject.code);
    });

    // this function will handle a new Firebase entry and process/organize data by age
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

    // update the data by age for amcharts
    function updateAgeData(movie, age, indexToChartData, fistValue) {

        if (ageMap.get(age) == null) {
            ageMap.set(age, new Map().set(movie, [fistValue]));
            ageChart.dataProvider[indexToChartData][movie] = fistValue;
        } else {
            var ageRangeMap = ageMap.get(age);
            var array = ageRangeMap.get(movie);
            if (array == null) { array = []; }
            array.push(fistValue);
            ageRangeMap.set(movie, array);
            ageMap.set(age, ageRangeMap);
            var sum = 0;
            var i = 0;
            for (; i < ageMap.get(age).get(movie).length; i++) {
                sum += ageMap.get(age).get(movie)[i];
            }
            ageChart.dataProvider[indexToChartData][movie] = Math.round((sum / i) * 10) / 10;
        }
        ageChart.validateData();
        // console.log("****** age[" + age + "] and movie[" + movie + "] now makes chartdata: " + JSON.stringify(ageChart.dataProvider));
    }

    // this function will handle a new Firebase entry and process/organize data by ethnicity
    function processByEthnicity(snapshot) {
        var userEthnicity = snapshot.val().ethnicity;
        foundBool = false;
        var i = 0;
        // check our allEthnicities array to see if this is an ethnicity we saw before or a new one
        // If new, we have some extra processing to do to set up a new array 
        while (!foundBool && i < allEthnicities.length) {
            if (allEthnicities[i] === userEthnicity) {
                foundBool = true;
            } else {
                i++;
            }
        }
        if (!foundBool) {
            // since we didn't see this ethnicity before and chart it, add it as a new one to the chart
            allEthnicities.push(userEthnicity);

            // generate a new "template" of data for amcharts by ethnicity
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

    // update the data by age for amcharts
    function updateEthnicityData(movie, ethnicity, indexToChartData, fistValue) {

        if (ethnicityMap.get(ethnicity) == null) {
            ethnicityMap.set(ethnicity, new Map().set(movie, [fistValue]));
            ethnicityChart.dataProvider[indexToChartData][movie] = fistValue;
        } else {
            var ethnicityDetailMap = ethnicityMap.get(ethnicity);
            var array = ethnicityDetailMap.get(movie);
            if (array == null) { array = []; }
            array.push(fistValue);
            ethnicityDetailMap.set(movie, array);
            ethnicityMap.set(ethnicity, ethnicityDetailMap);
            var sum = 0;
            var j = 0;
            for (; j < ethnicityMap.get(ethnicity).get(movie).length; j++) {
                sum += ethnicityMap.get(ethnicity).get(movie)[j];
            }
            ethnicityChart.dataProvider[indexToChartData][movie] = Math.round((sum / j) * 10) / 10;
        }
        ethnicityChart.validateData();
    }

    // this function will handle a new Firebase entry and process/organize data by gender
    function processByGender(snapshot) {
        var userGender = snapshot.val().gender;
        foundBool = false;
        var i = 0;
        // check our allGenders array to see if this is a gender we saw before or a new one
        // If new, we have some extra processing to do to set up a new array 
        while (!foundBool && i < allGenders.length) {
            if (allGenders[i] === userGender) {
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

    // update the data by gender for amcharts
    function updateGenderData(movie, gender, indexToChartData, fistValue) {

        if (genderMap.get(gender) == null) {
            genderMap.set(gender, new Map().set(movie, [fistValue]));
            genderChart.dataProvider[indexToChartData][movie] = fistValue;
        } else {
            var genderDetailMap = genderMap.get(gender);
            var array = genderDetailMap.get(movie);
            if (array == null) { array = []; }
            array.push(fistValue);
            genderDetailMap.set(movie, array);
            genderMap.set(gender, genderDetailMap);
            var sum = 0;
            var j = 0;
            for (; j < genderMap.get(gender).get(movie).length; j++) {
                sum += genderMap.get(gender).get(movie)[j];
            }
            genderChart.dataProvider[indexToChartData][movie] = Math.round((sum / j) * 10) / 10;
        }
        genderChart.validateData();
        // console.log("****** gender[" + gender + "] and movie[" + movie + "] now makes chartdata: " + JSON.stringify(ageChart.dataProvider));
    }
});
