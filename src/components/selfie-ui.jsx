import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Components
import Camera from "./camera";

// Libraries
import { addPhoto } from "../actions/photos";
import { clientIsSupported } from "../user-media";

const SelfieUI = function (props, context) {
  return {
    ...React.Component.prototype,
    props,
    context,
    state: {
      photos: []
    },

    render() {
      if (!clientIsSupported()) {
        return (<p>
          Your browser does not support user media. Please
          <a href="http://browsehappy.com/"> install a modern browser</a>!
        </p>);
      }

      // Rock and roll
      const { dispatch } = this.props;
      const boundActions = bindActionCreators({
        addPhoto
      }, dispatch);

      return (<div>
        <Camera
          width="640"
          height="480"
          onAddPhoto={boundActions.addPhoto}
        />
        {this.props.photosReducer.photos.map((photo, index) => {
          return (
            <img
              key={index}
              style={{ float: "left", "marginRight": "10px" }}
              width="160"
              height="120"
              src={photo.dataUrl}
            />
          );
        })}
      </div>);
    }
  };
};

const mapStateToProps = function (state) {
  return {
    photosReducer: state.photosReducer
  };
};

export default connect(mapStateToProps)(SelfieUI);
