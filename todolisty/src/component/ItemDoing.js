import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { doneList, deleteArrayDoingt } from "../redux/actions/actionApp";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    doneList: bindActionCreators(doneList, dispatch),
    deleteArrayDoingt: bindActionCreators(deleteArrayDoingt, dispatch)
  };
};

class ItemDoing extends Component {
  constructor(props) {
    super(props);
    this.done = this.done.bind(this);
  }

  done() {
    this.props.doneList(this.props.textDoing);
    this.props.deleteArrayDoingt(this.props.textDoing);
  }

  render() {
    let { textDoing } = this.props;
    // console.log(this.context)

    return (
      <div>
        {textDoing}
        <button onClick={this.done}>DONE</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDoing);
