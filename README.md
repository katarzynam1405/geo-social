# Instagram Geolocalized Photos

Example app for regular WebUI engineer training

## Application description

This application is showing Instagram photos which has been taken close to user localisation.

## Acceptance criteria

- application should have button "Start" to start loading images
- application should ask user for using HTML5 localisation API after clicking on button
- application should show red alert on top if user decline localisaton
- application should start loading images from Instagram API when localisation is received
- application should have button "Load more" at end of images list
- application should load more images when "Load more" button is clicked
- application should have architecture which allows to easily add integration with other image APIs with geolocalisation like Twitter photos, Facebook etc.
- application functionality should be test covered

## Stack

- ES6 + Stage 2 TC39 features
- Webpack 3
- Jest
- Twitter Bootstrap