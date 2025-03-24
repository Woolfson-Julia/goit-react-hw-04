import { useState } from "react";
import toast from "react-hot-toast";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList"

import { fetchImages } from "../imagesService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";



export default function App() {

  const [images, setImages] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // const [images, setImages] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  const handleSearch = async (topic) => {
    try {
      setError(false);
      setIsLoading(true);
      setImages([]);
      const data = await fetchImages(topic);
      setImages(data);
    } catch {
      setError(true);
      toast.error("Please reload there was an error!!!!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <LoadMoreBtn />
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ImageModal />
    </div>
  );
}



// export default function App() {
//   const [usersData, setUsersData] = useState(() => {
//     const savedUsers = localStorage.getItem("saved-users");
//     if (savedUsers !== null) {
//       return JSON.parse(savedUsers);
//     }
//     return [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ]
//   });

//   const [filter, setFilter] = useState('');

//   const addUser = (newUser) => {
//     setUsersData((prevUsers) => {
//       return [...prevUsers, newUser];
//     });
//   };

//   const deleteUser = (userId) => {
//     setUsersData((prevUsers) => {
//       return prevUsers.filter((user) => user.id !== userId);
//     });
//   };

//   const visibleUser = usersData.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

//   useEffect(() => {
//     localStorage.setItem("saved-users", JSON.stringify(usersData));
//   }, [usersData]);

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onAdd={addUser} />
//       <SearchBox onFilter={setFilter} value={filter} />
//       <ContactList users={visibleUser} onDelete={deleteUser} />
//     </div>
//   );

// }
