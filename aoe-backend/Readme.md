# Aoe-Backend
Is a proyect that consumes the api of the proyect in whitch you can get the Civilizations of AOE II and you can login whit your username only and pick 3 favourites civilizations

This 

## Development server

Run `npm dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Production

Run `npm start` to execute the project.

## Docker

This proyect also have the dockerFile configurated only run `docker build .` and you can run the container the port that the container is 4000


# Endponts

## PUT `/api/fav/:id`

a fav array up to 3 numbers
Example:
```
body: {"fav": [2,3,4]}
```
## GET `/api/civilization/`

you dont need to send nothing this respons whith the 
## POST `/api/auth/`
You have to send the name obligatory but fav is optional

Example:
```
Body: {
    "name": "Fernando",
    "fav": [1,2,3]
}
```
