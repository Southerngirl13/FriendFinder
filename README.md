# FriendFinder 
- A compatability app that compares user's survey's results to determine  the user's compatability to other users.

## Getting Started

- Create the following files inside of FriendFinder folder: 
    * .gitignore
    * app (folder)
      * data (folder)
        - friends.js
      * public (folder)
        - home.html
        - survey.html
      * routing (folder)
        - apiRoutes.js
        - htmlRoutes.js
    * node_modules 
    * package.json
    * server.js


- Run command in Terminal or Gitbash 'npm install express body-parser'
- Run command in Terminal or Gitbash 'node server.js
- Run 'ctrl + c' to exit each mode

### What Each JavaScript Does

1. `friends.js`

    * Display's user's survey results.

    * Add's new user's survey results.

-----------------------

2. `apiRoutes.js`

    * Takes the user's data and compares it to the all data.
    * Finds the best match by obtaining the totalDifference and comparing it to the other data.
    * Display's the best match
-----------------------

3. `htmlRoutes.js`
    * Exports the home page and survey page based on the api path called.

## Technologies used
- Node.js
- Express NPM Package (https://www.npmjs.com/package/express)
- Body-Parser NPM Package (https://www.npmjs.com/package/body-parser)

## Built With

* Visual Studio Code - Text Editor
* Gitbash
* Heroku
