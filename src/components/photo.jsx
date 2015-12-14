import React, { PropTypes } from "react";
import ReactDom from "react-dom";

import log from "../logger";

// TODO Generate canvas element on the fly in userMedia.capturePhoto instead of using this component
export default function Photo(props, context) {
  return {
    ...React.Component.prototype,
    props,
    context,
    getCanvasEl() {
      const el = ReactDom.findDOMNode(this);
      return el.querySelector("canvas");
    },
    render() {
      const { width, height } = this.props;
      log.debug(width, height);
      return (
        <div
          style={{ display: "none" }}
        >
          <canvas
            width={width}
            height={height}
          />
        </div>
      );
    }
  };
}

Photo.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};
