# GroupProject1
This will be the work of don, josh, and cbo (Fist of Five Enterprises) -- line added by cbo on 7/9/2018

Functionality:
    - present user with an initial screen that shows a box with their live camera.  This screen also can take a zip code and has a "Get Started" button.  Once they hit that button we will snap their pic and hold the demographic data.
    - present users with the same 10 movie images to rate (just store in a fixed array)
    - present users with 1 movie at a time before going to the next one
    - use fist of five to rate
    - reward for user is to recognize the genre they like and go find a movie they would like and suggest it to them (the suggestion will be a random movie based on genre)
    - while they hit their rating snap a pic and pass to face++
    - BTW, we will need to have some kind of box onscreen to show their face (not the still, but the cam)
    - the fist of five icon could be a giphy or pic of some kind as a button (reuse Josh diamond project)
    - as users complete votes we would push to firebase.  As firebase gets populated we will have our callback update dashboard graphs.
    - 

Roles:
    - UI
    - backend APIs
    - presentation
    - trello master (Don) (https://trello.com/)

APIs used:
    - interacting with the camera in html5 (https://www.w3schools.com/graphics/canvas_intro.asp and https://canvasjs.com)
    - face++  (for demographic detection - https://www.faceplusplus.com)
    - omdb (for cover art and genre)
    - charting with amcharts API (https://www.amcharts.com/demos/)
    - persistence with Firebase (https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=0#on)
    - zipcode use to graph on a map?

Presentation part:
    - kiosk would have control over tech and not run into issues with older software
    - present our idea as some kind of kiosk that would be able to snap the image without showing
    - comment about privacy
    - vision about marketing this to someone like Redbox (perhaps voting, auto company, news media for exit polling - use your imagination)
    - ask some audience to use cell phones and others to use laptops
    - grab zipcode?  then we can plot votes on a map as well


Tasks:
    - Don has fist of five images
    - Testing:
        - mobile responsive

Persistence:
    - our js will hold the demographic info taken from their pic
    - after each movie is voted on we will store the following to firebase:
        - Project will be FistOfFive
        - Each directory will be the name of the movie
        - genre
        - User info (user plus random info to make unique)
            - gender
            - age
            - ethnicity
            - zipcode
