import _ from 'lodash';
import SpotifyWebApi from 'spotify-web-api-js';
import {getAccessToken} from './token.helper';


export default class ApiArtists {
  static getArtistsList() {
    return new SpotifyWebApi().searchArtists(_.first(arguments));
  }

  static artistFetchDetails() {
    return new SpotifyWebApi().getArtist(_.first(arguments));
  }

  static artistFetchAlbums() {
    return new SpotifyWebApi().getArtistAlbums(_.first(arguments), {limit: 40});
  }

  static fetchAlbum() {
    const spotifyApi = new SpotifyWebApi();
    const spotifyToken = getAccessToken();
    spotifyApi.setAccessToken(spotifyToken);
    var response = spotifyApi.getAlbum(_.first(arguments));
    return response;
  }
}
