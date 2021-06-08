# Readme
Weather app
Lets create a weather app that based on a users location can find the relevant weather for that user.

Sign up for api key
Go to https://openweathermap.org/appid and sign up for an api key. This key we will use for getting access to the weather api.

First call to the weather api
We are going to be using the current weather api: https://openweathermap.org/current

To get some data from the api go to https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=YOUR_APP_ID, where YOUR_APP_ID is substituted with the key you signed up for in the first step.

If you go to the above url and see some weather json data then congrats 🎉.

If not, try and read the error 💻 and see if you can figure out what went wrong. Or ask in the slack group :)

Fetch weather data from a city
Create a javascript file and an html file and import the javascript file in the html file.

Fetch weather json data from the api using a city a user has specified: Add an input element and a button to the html. When the button is clicked, get the text from the input (which should be a city name) and fetch the relevant weather data from that city.

Remember to show some loading text. What if a user writes nothing in the input?

Display the data
This data should be showed in your app:

The chosen city
Temperature
Icon for the weather type
Wind speed
How clowdy it is
When sunrise and sunset is
Optional a map showing where the city is located
You decide how the data should be displayed. You could maybe be inspired by googling for "weather app ui".

Your feature here
Now its your time to come up with a feature. No matter how big or small.

Use my current position optional
Investigate the geo location api. Add a button to your page, clicking this button will get the users current position. Use that position to fetch weather data from that position.

Hint: We have to change the weather api url, so we are not using city but position. Look into the documentation!

Save my location optional
Imagine if a user did not have to either write a city or click the get my position button, but could just save the location. Lets do that!

When a user has gotten a location through either the input element or the geo location api, save that location using localstorage. Localstorage is a way to save data even when you close the browser.

Now when loading the page and there is a city in the localstorage, use that to get the current weather.

