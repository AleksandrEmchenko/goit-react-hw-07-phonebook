// import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import ContactsList from "./Contacts";
import Filter from "./Filter";


function App() {
  // const isLoading = useSelector((store) => store.contacts.contacts.loading);
  return (
    <div>
      <h1>Phonebook</h1>

      {/* <ContactForm /> */}

      <h2>Contacts</h2>

      {/* <Filter /> */}
      {/* {isLoading && <h3> Please wait. Contacts are downloading</h3>} */}
      <ContactsList />
    </div>
  );
}

export default App;
