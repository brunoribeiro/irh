
## Technologies

- **NodeJS, ExpressJS, MongoDB, docker and docker-compose**.

## Details
1. Authentication - to authenticate against the api it's needed an API key set in a **x-auth header** (any string containing **ironhack**, base64 encoded) ex: **x-auth, ZnNmZHNmaXJvbmhhY2tkZmRmZGQK**
2. Users are be able to **add/create new movies**.
3. Users are be able to **see the list of all movies**, no time for pagination
3. Users are be able to **see the details page of each movie**.
4. Users are be able to **update existing movies**.
5. Users are be able to **delete movies**.

The **schema for a movie** includes:
- title
- poster image URL
- director
- release date
- score (1 to 10)
- plot description

## Building and running

- npm i
- docker-compose build
- docker-compose up

**http://localhost:8080/movies**