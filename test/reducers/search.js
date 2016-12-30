import assert from 'assert';
import Search from '../../src/reducers/search';

// unit tests for the search reducer
describe('Search reducer', () => {
  describe('SET_ARTIST_NAME', () => {
    it('should return search input value', () => {
      assert.deepEqual(
        Search({}, {
          type: 'SET_ARTIST_NAME',
          artistName: 'test name'
        }), {
          artistName: 'test name'
        }
      );
    });
  });
});
