var ContactView = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
    onNewContactChange: React.PropTypes.func.isRequired,
  },

  render: function() {
    var listElements = this.props.contacts
      .filter(function(contact) { return contact.email })
      .map(function(contact) { return React.createElement(ContactItem, contact) })

    return (
      React.createElement('div', {className:'ContactView'},
        React.createElement('h1', {className:'ContactView-title'}, "Contacts"),
        React.createElement('ul', {className:'ContactView-list'}, listElements),
        React.createElement(ContactForm, {
          value: this.props.newContact,
          onChange: this.props.onNewContactChange,
        })
      )
    );
  },
});
