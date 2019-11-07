import React from "react";
import ReactDOM from "react-dom";

class Portal extends React.Component {
  componentDidMount() {
    let modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.setAttribute("id", "modal-root");
      document.body.appendChild(modalRoot);
    }
    this.element = document.querySelector(this.props.selector);
    this.forceUpdate();
  }
  render() {
    if (this.element === undefined) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

export default Portal;
