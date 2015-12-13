import React from "react";

import { requestUserVideo } from "../user-media";
import log from "../logger";

const Camera = function (props, context) {
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
    handleMetadataLoaded(ev) {
      log.info("Metadata loaded", ev);
    },
    render() {
      const { width, height } = this.props;
      return (<div>
        <video
          autoPlay="true"
          width={width}
          height={height}
          src={this.state.streamUrl}
          // onLoadedmetadata={this.handleMetadataLoaded}
        />
      </div>);
    }
  };
};

export default Camera;
