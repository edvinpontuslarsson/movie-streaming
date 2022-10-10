# movie-streaming

## Instructions

### Get Started

Create a file in the client directory with the file name ".env". Add the following line of text to that file:
`REACT_APP_MOVIEDB_API_KEY = '<<api_key>>'`

Replace "<<api_key>>" with a valid api key for themoviedb. See the file client/.env.example for an example.

### Run with Yarn

```console
cd client
yarn start
```

When finished, the web client will be available on port 3000

http://localhost:3000/

### Build and run with Docker

Be navigated to this root directory in a terminal and enter command:

`docker-compose up --build`

When finished, the web client will be available on port 3000

http://localhost:3000/

### Tear down

`docker-compose down`

### Run with Docker without building

`docker-compose up`
