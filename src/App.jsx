import "./App.css";
import ContactList from "./components/contactList/ContactList";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <ContactsForm />
      <SearchBox/>
      <ContactList />
    </>
  );
}

export default App;
