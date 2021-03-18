# Web Client & Server Prog. (CPNT-262)

### Author/Creator: Makayla Martineau Raymundo

## JSON gallery endpoint with fetch
This assignment includes:
- Create a 3-page website served with rendered view engine templates.
- Fetch a list of gallery items using fetch().
- Serve a JSON GET /gallery endpoint using app.get() and a custom module.

The image gallery was used from assignment CPNT262-a2.


This project includes `npm`, `express`, `dayjs`, `dotenv`, `fetch()`, `routes`, `views` and a custom 404 page. All deployed from a live Heroku server.

## Links

GitHub Repository: https://github.com/MakaylaMR/cpnt262-a4

Heroku App: https://json-gallery.herokuapp.com/

## `npm` Project Setup

The `npm` was setup using the [npm: getting started](https://gist.github.com/acidtone/d57f41d7c18d0d198263c7bc3ab230e3). The `package.json` and `node_modules` can be found in the root project of CPNT262-a3. `npm` was installed on 2021-03-10 and did not require an update.

### `dotenv`
The `dotenv` can be found inside:
`package.json` (inside dependencies)
- line 13

`package-lock.json`
- lines 84 - 87

`server.js`
- lines 4, 5 and 11

Created a text file `.env` and can be found in the root project of CPNT262-a3.

### `express`
`express` was imported into the `server.js` file and created as an app object.
- lines 1 -2

Used `express` to create a static web server and to send the `public` directory as a response (inside `server.js`).
- line 8 

## Server Setup
In brackets is which file the lines of code can be found.

`express` imported with `require()` (`server.js`)
- line 1

Serve static assets from a `public` directory using `express.static()`(`server.js`)
- line 8

A default port of `3000` when `process.env.PORT` is not found (`server.js`)
- line 4

Define the development port as port `3000` in an environment variable (`.env`)
- line 1

Import the port environment variable using the `dotenv` package. (`server.js`)
- line 4

## Custom 404 Page
Return a custom 404 page when a static file cannot be found (`server.js`)
- lines 19 - 22

Include a `404` response code (`server.js`)
- line 20

A valid HTML page
`server.js`
- line 21

HTML page can be found in `public/404.html`

## Heroku Deployment
Link to Heroku app above under links.

## Attributions

| Author/Creator |                                              Original Work                                               |                                                                 License |
| -------------- | :------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------------------: |
| Steve Griffith         |                    [Youtube](https://www.youtube.com/watch?v=5WFyhsnU4Ik)                    |             N/A |
| Smashicons   | [404 SVG](https://www.flaticon.com/free-icon/sad_396818?term=sad%20face&page=1&position=90&page=1&position=90&related_id=396818&origin=tag) | [License Summary](https://www.flaticon.com/free-icon/sad_396818?term=sad%20face&page=1&position=90&page=1&position=90&related_id=396818&origin=tag) |
| Techdiaries Team        |                    [The sendFile() Method](https://www.techiediaries.com/express-sendfile-serve-static-files/)                    |             N/A |

## Attributions (in-class)

| Person      |                                  Links/Contribution                                   |
| ----------- | :----------------------------------------------------------------------: |
| Vitaly Gins + Aidan O'Reilly | Sent link to for the .env video|