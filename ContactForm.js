var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },

  onNameInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));
  },

  onEmailInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));
  },

  onSubmit: function(e) {
    e.preventDefault();
    this.refs.email.focus();
    this.props.onSubmit();
  },

  componentDidUpdate: function(prevProps) {
    var value = this.props.value;
    var prevValue = prevProps.value;

    if (this.isMounted && value.errors && value.errors != prevValue.errors) {
      if (value.errors.email) {
        this.refs.email.focus();
      }
      else if (value.errors.name) {
        this.refs.name.focus();
      }
    }
  },

  render: function() {
    var errors = this.props.value.errors || {};

    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm', noValidate: true},
        React.createElement('input', {
          type: 'email',
          className: errors.email && 'ContactForm-error',
          placeholder: 'Email address',
          value: this.props.value.email,
          onChange: this.onEmailInput,
          ref: 'email',
          autoFocus: true,
        }),
        React.createElement('input', {
          type: 'text',
          className: errors.name && 'ContactForm-error',
          placeholder: 'Name',
          value: this.props.value.name,
          onChange: this.onNameInput,
          ref: 'name',
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  },
});
