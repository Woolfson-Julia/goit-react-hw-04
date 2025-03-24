// import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
  const [values, setValues] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  }
  const handleInputChange = (event) => {
    setValues(event.target.value);   
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
