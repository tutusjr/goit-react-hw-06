import "./App.css";
import ContactList from "./components/ContactList/ContactList";
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
