import React, { PropTypes } from "react";
import ReactDom from "react-dom";

import Button from "./button";
import Photo from "./photo";

import { requestUserVideo, capturePhoto } from "../user-media";
import log from "../logger";

export default function Camera(props, context) {
  return {
    ...React.Component.prototype,
    props,
    context,
    state: {
      streamUrl: null
    },

    componentWillMount() {
      const { width, height } = this.props;
      requestUserVideo(width, height)
        .then((mediaStream) => {
          const streamUrl = window.URL.createObjectURL(mediaStream);
          this.setState({ streamUrl });
        }, (err) => {
          log.error(err);
        });
    },

    getVideoEl() {
      const el = ReactDom.findDOMNode(this);
      return el.querySelector("video");
    },

    takePhoto() {
      capturePhoto(
        this.refs.video,
        this.refs.photo.getCanvasEl()
      );
    },
    render() {
      const { width, height } = this.props;
      return (<div>
        <Button buttonText="Take Photo" clickHandler={this.takePhoto.bind(this)} />
        <video
          ref="video"
          autoPlay="true"
          width={width}
          height={height}
          src={this.state.streamUrl}
        />
        <Photo
          ref="photo"
          width={width}
          height={height}
        />
      </div>);
    }
  };
}

Camera.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};
