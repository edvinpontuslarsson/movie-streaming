# movie-streaming

## Instructions

### Get Started

Create a file with the file name ".env". Add the following line of text to that file:
`REACT_APP_MOVIEDB_API_KEY = '<<api_key>>'`

Replace "<<api_key>>" with a valid api key for themoviedb. See the file client/.env.example for an example.

### Run with Yarn

```console
cd client
yarn start
```

When finished, the web client will be available on port 3000

http://localhost:3000/

### Run with Docker

Be navigated to this root directory in a terminal and enter command:

`docker-compose up`

When finished, the web client will be available on port 3000

http://localhost:3000/

### Tear down

`docker-compose down`

### Rebuild

`docker-compose up --build`
