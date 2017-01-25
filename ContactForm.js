var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },

  render: function() {
    var oldContact = this.props.value;
    var onChange = this.props.onChange;
    
    return (
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name',
          value: this.props.value.name,
          onChange: function(e) {
            onChange(Object.assign({}, oldContact, {name: e.target.value}));
          },
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email address',
          value: this.props.value.email,
          onChange: function(e) {
            onChange(Object.assign({}, oldContact, {email: e.target.value}));
          },
        }),
        React.createElement('textarea', {
          placeholder: 'Description of yourself',
          value: this.props.value.description,
          onChange: function(e) {
            onChange(Object.assign({}, oldContact, {description: e.target.value}));
          },
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  },
});
