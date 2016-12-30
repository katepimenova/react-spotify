import {call, put} from 'redux-saga/effects';
import ApiArtists from '../api/spotify';

export function* artistsFetchList(action) {
  const response = yield call(ApiArtists.getArtistsList, action.artistName);

  yield put({
    type: 'ARTISTS_DISPLAY_LIST',
    artists: response.artists
  });
}

export function* artistFetchDetails(action) {
  const response = yield call(ApiArtists.artistFetchDetails, action.artistID);

  yield put({
    type: 'ARTIST_DISPLAY_DETAILS',
    artist: response
  });
}


export function* artistFetchAlbums(action) {
  const response = yield call(ApiArtists.artistFetchAlbums, action.artistID);

  yield put({
    type: 'ARTIST_DISPLAY_ALBUMS',
    albums: response
  });
}

export function* fetchAlbum(action) {
  const response = yield call(ApiArtists.fetchAlbum, action.albumID);

  yield put({
    type: 'DISPLAY_ALBUM',
    album: response
  });
}
