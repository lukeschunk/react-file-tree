const React = require('react');
const ReactDOM = require('react-dom');
const { Tree } = require('../src/Index')

const App = React.createClass({
  _handleChildClick () {
    console.log("this is where you can handle the child click!")
  },

  render () {
    return (
      <Tree
        heading='Tree Demo'
        handleChildClick={this._handleChildClick}
        contents={[
          (<Tree heading='One Level contents' contents={[(<Tree heading='contents Tree' contents={['one', 'two', 'three']}/>), 'three']} />), (<Tree heading='New Tree' contents={['one', 'two', 'three']} />), 'Lukey', 'Another One', 'Final one']}
      >
      </Tree>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('demo'));
