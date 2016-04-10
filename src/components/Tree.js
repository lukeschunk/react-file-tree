const React = require('react');

const { Icon, Styles } = require('mx-react-components');


const Tree = React.createClass({
  propTypes: {
    childIconType: React.PropTypes.string,
    contents: React.PropTypes.array,
    handleChildClick: React.PropTypes.func,
    heading: React.PropTypes.string.isRequired,
    iconColor: React.PropTypes.string,
    parentIconType: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      childIconType: 'document',
      iconColor: Styles.Colors.PRIMARY,
      parentIconType: 'list-view'
    };
  },

  getInitialState () {
    return {
      triangleOrientation: 'rotate(-90deg)',
      displayChildren: false
    };
  },

  _handleParentClick () {
    const triangleOrientation = this.state.triangleOrientation === 'rotate(-90deg)' ? 'rotate(0deg)' : 'rotate(-90deg)';

    this.setState({
      triangleOrientation,
      displayChildren: !this.state.displayChildren
    });
  },

  render () {
    const styles = this.styles();

    return (
      <div className='react-file-tree'>
        <div onClick={this._handleParentClick} style={styles.parent}>
          <div style={styles.triangle}>▾</div>
          <Icon
            size={20}
            style={{ color: this.props.iconColor }}
            type={this.props.parentIconType}
          />
          <span style={styles.heading}>{this.props.heading}</span>
        </div>
        {this.state.displayChildren ? (
          <div style={styles.children}>
            <ul style={styles.list}>
              {this.props.contents.map((node, index) => {
                return (
                  <div key={index} style={styles.parent}>
                    {typeof node === 'string' ? (
                      <div style={styles.test} onClick={this.props.handleChildClick}>
                        <Icon
                          size={20}
                          style={{ color: this.props.iconColor }}
                          type='apple'/>
                        <span style={styles.heading}>{node}</span>
                      </div>
                    ) : (<div>XXX{node}</div>)
                    }
                  </div>
                );
              })}
            </ul>
          </div>
        ) : null }
      </div>
    );
  },

  styles () {
    return {
      heading: {
        margin: 0,
        display: 'inline-block',
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 8,
        fontFamily: Styles.Fonts.THIN
      },
      iconHolder: {
        border: '1px solid gray',
        padding: 2,
        borderRadius: 5,
        display: 'inline-block'
      },
      list: {
        listStyleType: 'none',
        margin: 0,
        paddingLeft: 20
      },
      test: {
        zIndex: 1000
      },
      triangle: {
        transform: this.state.triangleOrientation,
        display: 'inline-block',
        position: 'absolute',
        left: '-20px',
        top: 10
      },
      parent: {
        cursor: 'pointer',
        position: 'relative'
      }
    };
  }

});

module.exports = Tree;
