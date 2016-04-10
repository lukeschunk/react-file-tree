const React = require('react');
const ReactDOM = require('react-dom');

const Test = React.createClass({
  render () {
    return (
      <div>
        <h1>TESTING ONE TWO THREE</h1>
      </div>
    )
  }
});

ReactDOM.render(<Test />, document.getElementById('demo'));
