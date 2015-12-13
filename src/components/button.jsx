import React from "react";

const Button = function (props, context) {
  return {
    ...React.Component.prototype,
    props,
    context,
    state: {
      message: "Instances through Extension"
    },
    render() {
      return (<button onClick={() => this.setState({ message: "stateful!" })}>
        {this.state.message}
      </button>);
    }
  };
};

export default Button;
