import { useDispatch } from "react-redux";
import { ItemList, Contact, ContactBox, Button } from "./ContactItem.styled";
import { deleteContactThunk } from "redux/thunk";

export function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
   dispatch(deleteContactThunk(contactId));
    
  };

  return (
    <ItemList key={contact.id}>
      <ContactBox>
        <Contact>{contact.name}:</Contact> {contact.phone}
      </ContactBox>
      <Button onClick={() => handleDelete(contact.id)}>delete</Button>
    </ItemList>
  );
}

export default ContactItem;
