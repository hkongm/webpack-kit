import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { plusOne, subtractOne } from './actions'

class Counter extends React.Component {

  render() {
    // debugger
    const { plusOne, subtractOne } = this.props
    return (
      <div>
        number: {this.props.counter}
        <button onClick={plusOne}>
          +按钮
        </button>
        <button onClick={subtractOne}>
          -按钮
        </button>
      </div>
    );
  }
}

// 组件将会监听 Redux store 的变化。
// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
function mapStateToProps(state) {
  return { counter: state.counter }
}

function mapDispatchToProps(dispatch) {
  // debugger
  return bindActionCreators({ plusOne, subtractOne }, dispatch)
}

// const mapDispatchToProps = dispatch => {
//   bindActionCreators({ plusOne, subtractOne }, dispatch)
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)