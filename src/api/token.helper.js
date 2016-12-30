const TOKEN_KEY = 'spotify-token';
const TOKEN_GENERATOR_URL = 'http://aenekrita.shn-host.ru/token/';
let isFetching = false;

export function fetchAndStoreSpotifyAccessToken() {
  const storedTokenData = localStorage.getItem(TOKEN_KEY);

  if (storedTokenData) {
    const storedToken = JSON.parse(storedTokenData);
    // If it's still valid, we don't need to make a server request :)
    if (isTokenStillValid(storedToken)) return;
  }

  // Don't allow multiple fetches to occur simultaneously.
  if ( isFetching ) return;
  isFetching = true;

  fetch(TOKEN_GENERATOR_URL)
    .then(response => {
      isFetching = false;
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    //.catch( err => console.error('Error fetching token from server', err) )
    .then( response => {
      const expiresInMs = (response.expires_in - 20) * 1000;
      const expirationTimestamp = Date.now() + expiresInMs;

      const token = {
        value: response.access_token,
        expiration: expirationTimestamp
      };
      localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    });
}

export function getAccessToken() {
  const accessTokenObject = JSON.parse(localStorage.getItem(TOKEN_KEY));

  if ( !accessTokenObject ) return null;
  if (isTokenStillValid(accessTokenObject)) return accessTokenObject.value;
  fetchAndStoreSpotifyAccessToken();
  return null;
}

function isTokenStillValid(token) {
  return Date.now() < token.expiration;
}
