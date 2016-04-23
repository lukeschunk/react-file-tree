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
              name: 'Demo File Structure',
              // icon: 'list-view',
              children: [
                {
                  name: 'Second Level Folder',
                  // icon: 'list-view',
                  children: [
                    {
                      name: 'file-demo.js',
                      // icon: 'document'
                    },
                    {
                      name: 'another file.html',
                      // icon: 'document'
                    },
                    {
                      name: 'and a third file',
                      icon: 'document'
                    }
                  ]
                },
                {
                  name: 'Second Level Header Two',
                  icon: 'list-view',
                  children: [
                    {
                      name: 'a file with the icon specified',
                      icon: 'check'
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
