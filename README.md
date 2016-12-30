# The main goals

1. Here is a link to Spotify API - https://developer.spotify.com/web-api/user-guide/ (you have to use endpoints like ARTISTS, ALBUMS, SEARCH)
2. The app should request Spotify API about albums, artists and searching.
3. React should have some layer to get some informations from Spotify API and display in nice way.
4. The application should be able to searching albums and artist and display list of albums or artists songs ready to listen.

#What is being used 

- [react](https://github.com/facebook/react): the core *React* library.
- [redux](https://github.com/reactjs/redux): A predictable state container for JavaScript apps.
- [webpack](https://github.com/webpack/webpack): a packaging tool to generate the application bundle and run it on the 
web browser.

#Demo

[http://aenekrita.shn-host.ru/](http://aenekrita.shn-host.ru/)

# General project manipulations

    npm install 
    npm start

- install all dependencies, and run project locally.


      
    npm test

- run unit tests.



    npm run lint
    
- project syntax test.


# OAuth 2 explanation

I choose the "Client Credentials" authorization flow from Spotify WEB API. So, I prepared the php backend file which is 
responsible for generating access token using my client credentials (client ID and secret key).  Generated access 
token stored in localStorage. 

