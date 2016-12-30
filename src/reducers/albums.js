const initialState = {
  isFetching: false
};

export default function albums(state=initialState, action) {
  switch (action.type) {
  case 'ARTIST_FETCH_ALBUMS':
    return {isFetching: true};
  case 'ARTIST_DISPLAY_ALBUMS':
    return {...action.albums, isFetching: false};
  default:
    return state;
  }
}
