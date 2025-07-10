import { useState, useEffect } from "react";
import { fetchImages } from "services/pixabayApi";
import { List } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { toast } from "react-toastify";
import { Loader } from "components/Loader/Loader";
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'

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

        setStatus('pending')

        fetchImages(searchImage, page).then((imgs) => {
          setImages(prevState => {
            return page > 1 ? [...prevState, ...imgs.hits] : imgs.hits
          })
          if (page === 1) {
            setTotalPages(Math.ceil(imgs.totalHits / 12))
          }
          setStatus('resolved')

          if (!imgs.hits.lenght) {
            setImages([])
            setStatus('rejected')
            toast.error(`Sorry, there is no ${searchImage} `)
          }
        }).catch(error => {
          setError(error)
          setStatus('rejected')
        })
      }, [searchImage, page]);

      function onLoadMore() {
        setPage(prevState => prevState + 1)
      }

      function toggleModal(img) {
        setShowModal(!showModal)
        setLargeImage(img)
      }

        return (
          <>
            {status === 'rejected' && <h1>{error}</h1>}
            <List>
                {images && images.map(img => {
                    return (
                        <ImageGalleryItem key={img.id} webFormatURL={img.webFormatURL} tags={img.tags} onClickModal={() => toggleModal(largeImage)}/>
                    )
                })}
            </List>

            {status === 'pending' && <Loader></Loader>}
            {page !== totalPages && status === 'resolved' && (
              <Button onLoadMore={onLoadMore}></Button>
            )}

            {showModal && <Modal><img src={largeImage} /></Modal>}
          </>
        );
    
}
 