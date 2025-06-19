import { useState, useEffect } from "react";
import { fetchImages } from "services/pixabayApi";
import { List } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({searchImage}) => {
      const [images, setImages] = useState([]);
      const [error, setError] = useState('');
      const [status, setStatus] = useState(false);
      const [page, setPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
      const [showModal, setShowModal] = useState(false);
      const [largeImage, setLargeImage] = useState('');
      
      useEffect(() => setPage(1), [searchImage]);

      useEffect(() => {
        if (!searchImage) {
          return
        }
        fetchImages(searchImage, page)
      }, []);

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.searchText !== this.props.searchText || prevState.page !== this.state.page) {
    //       this.setState({ isLoading: true });
    //       fetchImages(this.props.searchText, this.state.page)
    //         .then(response => response.json())
    //         .then(data => {
    //           this.setState({ images: data.data });
    //         })
    //         .catch(error => {
    //           this.setState({ error });
    //         })
    //         .finally(() => {
    //           this.setState({ isLoading: false });
    //         });
    //     }
    //   }

        return (
            <List>
                {images && images.map(img => {
                    return (
                        <ImageGalleryItem key={img.id} webFormatURL={img.webFormatURL}/>
                    )
                })}
            </List>
        );
    
}
 