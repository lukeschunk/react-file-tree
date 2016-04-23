const React = require('react');
const ReactDOM = require('react-dom');
const { Tree } = require('../src/Index')
const { Styles } = require('mx-react-components');

const App = React.createClass({
  _handleChildClick () {
    console.log("this is where you can handle the child click!")
  },

  render () {
    return (
      <Tree
        items={
          [
            {
              name: 'main Header Title One',
              // icon: 'list-view',
              children: [
                {
                  name: 'Second Level Header One',
                  // icon: 'list-view',
                  children: [
                    {
                      name: 'Third Level Header One',
                      // icon: 'document'
                    },
                    {
                      name: 'Third Level Header Two',
                      // icon: 'document'
                    },
                    {
                      name: 'Third Level Header Three',
                      icon: 'document'
                    }
                  ]
                },
                {
                  name: 'Second Level Header TwXXXo',
                  icon: 'list-view',
                  children: [
                    {
                      name: 'Third Level Header Four',
                      icon: 'document'
                    },
                    {
                      name: 'Third Level Header Five',
                      icon: 'document'
                    }
                  ]
                },
                {
                  name: 'Second Level Header Three',
                  icon: 'document',
                  children: []
                },
                {
                  name: 'Second Level Header Four',
                  icon: 'list-view',
                  children: [
                    {
                      name: 'Third Level Header 6',
                      icon: 'document'
                    }
                  ]
                }
              ]
            }
          ]
        }
      iconColor={Styles.Colors.PRIMARY}
      >
      </Tree>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('demo'));
