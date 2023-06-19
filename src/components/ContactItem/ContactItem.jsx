import { useDispatch } from "react-redux";
import { ItemList, Contact, ContactBox, Button } from "./ContactItem.styled";
import { deleteContactsThunk } from "components/redux/thunk";

export function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContactsThunk(contactId));
    console.log(contactId);
  };

  return (
    <ItemList key={contact.id}>
      <ContactBox>
        <Contact>{contact.name}:</Contact> {contact.number}
      </ContactBox>
      <Button onClick={handleDelete(contact.id)}>delete</Button>
    </ItemList>
  );
}

export default ContactItem;
