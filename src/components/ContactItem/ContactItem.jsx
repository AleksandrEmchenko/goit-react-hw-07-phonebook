import { useDispatch } from "react-redux";
// import { deleteContact } from "components/redux/contactSlice";
import { ItemList, Contact, ContactBox, Button } from "./ContactItem.styled";

export function ContactItem({ contact }) {
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ItemList key={contact.id}>
      <ContactBox>
        <Contact>{contact.name}:</Contact> {contact.number}
      </ContactBox>
      {/* <Button onClick={handleDelete}>delete</Button> */}
    </ItemList>
  );
}

export default ContactItem;
