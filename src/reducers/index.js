import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import search from './search';
import artists from './artists';
import artist from './artist';
import albums from './albums';
import album from './album';

export const reducers = combineReducers({
  routing: routerReducer,
  search: search,
  artists: artists,
  artist: artist,
  albums: albums,
  album: album
});
