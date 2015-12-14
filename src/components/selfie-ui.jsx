import React from "react";

// Components
import Camera from "./camera";

// Libraries
import { clientIsSupported } from "../user-media";

export default function SelfieUI(props, context) {
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
      return (<div>
        <Camera
          width="640"
          height="480"
        />
        {this.state.photos.map((photo) => {
          return (
            <img
              style={{ float: "left", "margin-right": "10px" }}
              width="160"
              height="120"
              src={photo.url}
            />
          );
        })}
      </div>);
    }
  };
}
