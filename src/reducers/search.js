export default function search(state = {}, action) {
  switch (action.type) {
  case 'SET_ARTIST_NAME':
    return {...state, artistName: action.artistName};
  default:
    return state;
  }
}
