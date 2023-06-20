import { useDispatch, useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';
import { List } from '../Contacts/Contacts.styled';
import { useEffect } from 'react';
import { getContactThunk } from 'redux/thunk';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/selectors';

function ContactsList() {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);




  const items = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContactThunk());
  }, [dispatch]);


  return (
    <div>
      {isLoading && <h3> Please wait. Contacts are downloading</h3>}

      {items && Array.isArray(items) && items.length !== 0 ? (
        <List>
          {items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())).map(contact => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
        </List>
      ) : (
        'Your contact list is empty'
      )}
      {error && <h3>Oops. Something went wrong.</h3>}
    </div>
  );
}

export default ContactsList;
