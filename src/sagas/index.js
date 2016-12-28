import {takeLatest} from 'redux-saga';
import {fork} from 'redux-saga/effects';
import {artistsFetchList, artistFetchDetails, artistFetchAlbums} from './artists';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'ARTISTS_FETCH_LIST', artistsFetchList),
    fork(takeLatest, 'ARTIST_FETCH_DETAILS', artistFetchDetails),
    fork(takeLatest, 'ARTIST_FETCH_ALBUMS', artistFetchAlbums)
  ];
}
