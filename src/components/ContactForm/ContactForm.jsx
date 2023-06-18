// import { useDispatch } from "react-redux";
// import { addContact } from "components/redux/1_contactSlice";


// import {
//   Container,
//   ContactFild,
//   ContactLabel,
//   ButtonSub,
// } from "./ContactForm.styled";

// function ContactForm() {
//   const dispatch = useDispatch();


//   const handleSubmitForm = (event) => {
//     event.preventDefault();

//     const form = event.target;
//     dispatch(addContact(form.elements.name.value, form.elements.number.value));
//     form.reset();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmitForm}>
//         <Container>
//           <ContactLabel>
//             Name
//             <ContactFild
//               type="text"
//               name="name"
//               placeholder="Enter name"
//               // value={name}
//               // onChange={handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </ContactLabel>
//           <ContactLabel>
//             Number
//             <ContactFild
//               type="tel"
//               name="number"
//               placeholder="Enter number"
//               // value={number}
//               // onChange={handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </ContactLabel>
//         </Container>

//         <ButtonSub type="submit">Add contact</ButtonSub>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
