import React from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd, change, text}) => {
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button
        onClick={dec}
        className="btn btn-primary btn-lg"> DEC
      </button>
      <button
        onClick={inc}
        className="btn btn-primary btn-lg">INC
      </button>
      <button
        onClick={rnd}
        className="btn btn-primary btn-lg"> RND
      </button>
      <input onChange={(e) => change(e.target.value)}/>
      <span>{text}</span>
    </div>
  )
};

const mapStateToProps = (store) => {
  console.log(store);
  return {
    counter: store.countShow,
    text: store.text,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
