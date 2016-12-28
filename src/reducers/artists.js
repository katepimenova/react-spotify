const initialState = {
  isFetching: false,
  items: {}
};

export default function artists(state=initialState, action) {
  switch (action.type) {
  case 'ARTISTS_FETCH_LIST':
    return {...state, isFetching: true};
  case 'ARTISTS_DISPLAY_LIST':
    return {...action.artists, isFetching: false};
  default:
    return state;
  }
}
