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
                      parentId: '2',
                      id: '4',
                      name: 'Third Level Header Two',
                      // icon: 'document'
                    },
                    {
                      parentId: '2',
                      id: '5',
                      name: 'Third Level Header Three',
                      icon: 'document'
                    }
                  ]
                },
                {
                  parentId: '0',
                  id: '6',
                  name: 'Second Level Header TwXXXo',
                  icon: 'list-view',
                  children: [
                    {
                      parentId: '6',
                      id: '7',
                      name: 'Third Level Header Four',
                      icon: 'document'
                    },
                    {
                      parentId: '6',
                      id: '8',
                      name: 'Third Level Header Five',
                      icon: 'document'
                    }
                  ]
                },
                {
                  parentId: null,
                  id: '9',
                  name: 'Second Level Header Three',
                  icon: 'document',
                  children: []
                },
                {
                  parentId: '0',
                  id: '10',
                  name: 'Second Level Header Four',
                  icon: 'list-view',
                  children: [
                    {
                      parentId: '10',
                      id: '11',
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
