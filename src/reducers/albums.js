const initialState = {
  isFetching: false
};

export default function albums(state=initialState, action) {
  switch (action.type) {
  case 'ARTIST_FETCH_ALBUMS':
    return {...state, isFetching: true};
  case 'ARTIST_DISPLAY_ALBUMS':
    return {...state, items: action.albums.items, isFetching: false};
  default:
    return state;
  }
}
