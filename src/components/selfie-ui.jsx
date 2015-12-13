import React from "react";

// Components
import Button from "./button";
import Camera from "./camera";

// Libraries
import { clientIsSupported } from "../user-media";

const SelfieUI = function (props, context) {
  return {
    ...React.Component.prototype,
    props,
    context,
    state: {
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
          width="800"
          height="600"
        />
        <Button />
      </div>);
    }
  };
};

export default SelfieUI;
