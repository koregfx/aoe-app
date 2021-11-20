# Aoe-Backend
It's a backend that consumes the api of the proyect, in which you can get the Civilizations of AOE II. You can login only with your username and pick 3 favourites civilizations.


## Development server

Run `npm dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Production

Run `npm start` to execute the project.

## Docker

This proyect also have the dockerFile configurated only run `docker build .` and you can run the container, the port that the container expose is 4000.


# Endponts

## PUT `/api/fav/:id`

The fav array up to 3 numbers
Example:
```
body: {"fav": [2,3,4]}
```
## GET `/api/civilization/`

You don't need to send anything, it responds with the civilizations list.

## POST `/api/auth/`
You have to send the name obligatory, but fav is optional.

Example:
```
Body: {
    "name": "Fernando",
    "fav": [1,2,3]
}
```
