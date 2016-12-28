export default function artist(state={}, action) {
  switch (action.type) {
  case 'ARTIST_DISPLAY_DETAILS':
    return action.artist;
  default:
    return state;
  }
}
