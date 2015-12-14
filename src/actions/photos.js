export const ADD_PHOTO = "ADD_PHOTO";

export const addPhoto = function (dataUrl) {
  return {
    type: ADD_PHOTO,
    payload: {
      photo: { dataUrl }
    }
  };
};
