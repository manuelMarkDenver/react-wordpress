import { useEffect,  useState } from "react";
import axios from "axios";

import BookItem from './BookItem'

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/wp-json/wp/v2/books?_embed`)
        setBooks(response.data)
        setIsloaded(true)
      } catch (error) {
        console.log(error)
      }
        
    };

    fetchData();
  }, []);

  if(!isLoaded) {
    return <h3>Looading...</h3>
  }

  return (
    <>
      {books?.map((book) => (
        <BookItem key={book.id} book={book}/>
      ))}
    </>
  );
};

export default Books;
