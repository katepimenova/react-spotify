import {call, put} from 'redux-saga/effects';
import ApiArtists from '../api/artists';

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
