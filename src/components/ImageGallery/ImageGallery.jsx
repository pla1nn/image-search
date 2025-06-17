import { Component } from "react";
import { fetchImages } from "services/getGifApi";
import { Gif, Item, List } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

class GifList extends Component {
    state = {
        images: null,
        error: '',
        isLoading: false,
        page: 1
    } 

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchText !== this.props.searchText || prevState.page !== this.state.page) {
          this.setState({ isLoading: true });
          fetchImages(this.props.searchText, this.state.page)
            .then(response => response.json())
            .then(data => {
              this.setState({ images: data.data });
            })
            .catch(error => {
              this.setState({ error });
            })
            .finally(() => {
              this.setState({ isLoading: false });
            });
        }
      }

    render() { 
        return (
            <List>
                {this.state.images && this.state.images.map(img => {
                    return (
                        <ImageGalleryItem key={img.id} webFormatURL={img.webFormatURL}/>
                    )
                })}
            </List>
        );
    }
}
 
export default GifList;