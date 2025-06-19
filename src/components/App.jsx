import { useState } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchBar} from "./Searchbar/Searchbar";
// import { SearchBar } from "./Searchbar/Searchbar.styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const App = () => {
  const [searchImage, setSearchImage] = useState('')

  

    return (
      <>
        <SearchBar onSubmit={setSearchImage}/>
        <ImageGallery searchImage={searchImage}/>
        <ToastContainer autoClose={3000}/>
      </>
    )
  
};
