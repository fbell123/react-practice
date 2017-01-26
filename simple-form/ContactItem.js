var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {className:'ContactItem'},
        React.createElement('h2', {className:'ContactItem-email'}, this.props.email),
        React.createElement('span', {className:'ContactItem-name'}, this.props.name)
      )
    );
  },
});
