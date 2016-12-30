const initialState = {
  isShown: false
};

export default function album(state=initialState, action) {
  switch (action.type) {
  case 'DISPLAY_ALBUM':
    return {...action.album, isShown: true};
  case 'HIDE_ALBUM':
    return initialState;
  default:
    return state;
  }
}
