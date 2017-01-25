var CONTACT_TEMPLATE = {name: "", email: "", description: "", errors: null};

var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Jim", email: "jim@example.com"},
  {key: 3, name: "Joe"},
]

function updateNewContact(contact) {
  setState({ newContact: contact });
}

var state = {};

setState({
  contacts: [
    {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
    {key: 2, name: "Jim", email: "jim@example.com"},
  ],
  newContact: Object.assign({}, CONTACT_TEMPLATE),
});

function updateNewContact(contact) {
  setState({ newContact: contact });
}
function submitNewContact() {
  var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});

  if (contact.name && contact.email) {
    setState(
      Object.keys(contact.errors).length === 0
      ? {
        newContact: Object.assign({}, CONTACT_TEMPLATE),
        contacts: state.contacts.slice(0).concat(contact),
      }
      : { newContact: contact }
    );
  }
}

function setState(changes) {
  Object.assign(state, changes);

  ReactDOM.render(
    React.createElement(ContactView, Object.assign({}, state, {
      onNewContactChange: updateNewContact,
      onNewContactSubmit: submitNewContact,
    })),
    document.getElementById('react-app')
  );
}
