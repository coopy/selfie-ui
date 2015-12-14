import React, { PropTypes } from "react";

export default function Button(props, context) {
  return {
    ...React.Component.prototype,
    props,
    context,
    render() {
      const { clickHandler, buttonText } = this.props;
      return (<button onClick={clickHandler}>
        {buttonText}
      </button>);
    }
  };
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};
