var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },

  onNameInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}))
  },

  onEmailInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}))
  },

  onDescriptionInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}))
  },

  onSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmit();
  },

  render: function() {
    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm', noValidate:true},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name',
          value: this.props.value.name,
          onChange: this.onNameInput,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email address',
          value: this.props.value.email,
          onChange: this.onEmailInput,
        }),
        React.createElement('textarea', {
          placeholder: 'Description of yourself',
          value: this.props.value.description,
          onChange: this.onDescriptionInput,
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  },
});
