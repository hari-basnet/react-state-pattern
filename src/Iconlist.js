import React from "react";

class Iconlist extends React.Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bone",
      "car",
      "cloud",
      "couch"
    ]
  };

  constructor(props) {
    super(props);
    this.state = { icons: [] };
    this.addIcon = this.addIcon.bind(this);
  }

  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.state.options[idx];
  }
  render() {
    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    return (
      <div className="icon">
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Click to make icons</button>
      </div>
    );
  }
}

export default Iconlist;
