import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css";


export default function App() {
  const [usersData, setUsersData] = useState(() => {
    const savedUsers = localStorage.getItem("saved-users");
    if (savedUsers !== null) {
      return JSON.parse(savedUsers);
    }
    return [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]
  });

  const [filter, setFilter] = useState('');

  const addUser = (newUser) => {
    setUsersData((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  const deleteUser = (userId) => {
    setUsersData((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  const visibleUser = usersData.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    localStorage.setItem("saved-users", JSON.stringify(usersData));
  }, [usersData]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox onFilter={setFilter} value={filter} />
      <ContactList users={visibleUser} onDelete={deleteUser} />
    </div>
  );

}
