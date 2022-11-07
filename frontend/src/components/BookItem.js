import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

const BookItem = (props) => {
  const [isloaded, setIsLoaded] = useState(false);

  const { id, title, excerpt } = props?.book;
  const imgUrl = props?.book?._embedded["wp:featuredmedia"][0]?.source_url;
  const author = props?.book?._embedded?.author[0].name;

  if (!props) {
    setIsLoaded(false);
  }

  useEffect(() => {
    if (!isloaded) {
      setIsLoaded(!isloaded);
    }
  }, [isloaded]);
  // const [media, setMedia] = useState();
  // const [fetchedAuthor, setFetchedAuthor] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const getImageUrl = await axios.get(
  //         `/wp-json/wp/v2/media/${featured_media}`
  //       );
  //       const getAuthor = await axios.get(`/wp-json/wp/v2/users/${author}`);

  //       const response = await Promise.all([getImageUrl, getAuthor]);
  //       setMedia(response[0]?.data.media_details.sizes.full.source_url);
  //       setFetchedAuthor(response[1]?.data.name);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (!isloaded) return <h2>Loading...</h2>;

  return (
    <>
      <h2 style={{ marginBottom: 0 }}>{title.rendered}</h2>
      <small>
        Review by <strong>{author}</strong>
      </small>
      <img style={{ width: "100%" }} src={imgUrl} alt={title.rendered} />
      <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
      <Link to={`/book/${id}`}>Read Review</Link>
    </>
  );
};

export default BookItem;
