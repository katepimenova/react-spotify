import SpotifyWebApi from 'spotify-web-api-js';

export default class ApiArtists {
  static getArtistsList() {
    return new SpotifyWebApi().searchArtists(arguments[0]);
  }

  static artistFetchDetails() {
    return new SpotifyWebApi().getArtist(arguments[0]);
  }

  static artistFetchAlbums() {
    return new SpotifyWebApi().getArtistAlbums(arguments[0], {limit: 40});
  }
}
