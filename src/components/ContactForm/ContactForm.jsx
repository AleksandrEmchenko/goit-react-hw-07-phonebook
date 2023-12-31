import { useDispatch } from "react-redux";

import {
  Container,
  ContactFild,
  ContactLabel,
  ButtonSub,
} from "./ContactForm.styled";
import { useState } from "react";
import { createContactThunk } from "redux/thunk";

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "number":
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    dispatch(createContactThunk({ name: name, number: number }));
    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <Container>
          <ContactLabel>
            Name
            <ContactFild
              type="text"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactLabel>
          <ContactLabel>
            Number
            <ContactFild
              type="tel"
              name="number"
              placeholder="Enter number"
              value={number}
              onChange={handleChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactLabel>
        <ButtonSub type="submit">Add contact</ButtonSub>
        </Container>

      </form>
    </div>
  );
}

export default ContactForm;
