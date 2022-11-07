import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookPage = () => {
  const { id } = useParams();

  const [book, setBook] = useState();
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/wp-json/wp/v2/books/${id}`);
        setBook(response.data);
        setIsloaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, []);

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <>
      <Link to="/">Go Back</Link>
      <hr />
      <h1>{book.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: book.content.rendered }}></div>
      <h4>Publisher: {book.acf.publisher}</h4>
    </>
  );
};

export default BookPage;
