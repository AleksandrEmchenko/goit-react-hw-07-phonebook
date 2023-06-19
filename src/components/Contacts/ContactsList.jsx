import { useDispatch, useSelector } from "react-redux";
// import { getFilter } from "components/redux/selector";
import ContactItem from "components/ContactItem/ContactItem";
import { List } from "../Contacts/Contacts.styled";
import { useEffect } from "react";
import { getContactsThunk } from "components/redux/thunk";

// const getVisiblesContacts = contacts.filter((contact) => contact.name.includes(filter));
// const getVisiblesContacts = (contacts, setStatusFilter) => {
//   contacts.filter((contact) => contact.name.includes(filter));
// };

function ContactsList() {

  const dispatch = useDispatch();

  const items = useSelector((store) => store.contacts.contacts.items);
  const error = useSelector((store) => store.contacts.contacts.error);
  const isLoading = useSelector((store) => store.contacts.contacts.loading);



 
  // const { items, isLoading, error } = useSelector((store) => store.contacts);

  useEffect(() => {
    dispatch(getContactsThunk());
    
  }, [dispatch]);
  

  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  console.log(items);
  console.log(isLoading);

  // const filteredContacts = (contacts, filter) => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const visibleContacts = filteredContacts(contacts, filter);

  // const visibleContacts = (contacts, setStatusFilter) => {
  //   return contacts.filter(contact => !contact.name.includes(filter));
  // }

  return (
    <div>
      {isLoading && <h3> Please wait. Contacts are downloading</h3>}

      {items && Array.isArray(items) && items.length !== 0 ? (
        <List>
          {items.map((contact) => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
        </List>
      ) : (
        "Your contact list is empty"
      )}
      {error && <h3>Oops. Something went wrong.</h3>}
    </div>
  );
}

export default ContactsList;
