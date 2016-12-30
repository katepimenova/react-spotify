import {call, put} from 'redux-saga/effects';
import assert from 'assert';
import {artistFetchDetails} from '../../src/sagas/artists';
import ApiArtists from '../../src/api/spotify';

// unit tests for the artists saga
describe('Artists saga', () => {
  describe('artistFetchDetails()', () => {
    const action = {
      artistID: 'ttttttt'
    };
    const generator = artistFetchDetails(action);

    it('should return the ApiArtists.getArtistsList call', () => {
      assert.deepEqual(generator.next().value, call(ApiArtists.artistFetchDetails, action.artistID));
    });

    it('should return the ARTISTS_DISPLAY_LIST action', () => {
      assert.deepEqual(generator.next().value, put({
        type: 'ARTIST_DISPLAY_DETAILS',
        artist: undefined
      }));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });
});
