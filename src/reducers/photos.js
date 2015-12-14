import { ADD_PHOTO } from '../actions/photos';

const defaultState = {
  photos: []
};

export default function photos(state = defaultState, action) {
  switch (action.type) {
    case ADD_PHOTO:
      return Object.assign({}, state, {
        photos: state.photos.concat(action.payload.photo)
      });
    default:
      return state;
  }
};
