import { Component } from "react";
import { getGifs } from "services/getGifApi";
import { Gif, Item, List } from "./GifList.styled";

class GifList extends Component {
    state = {
        gifs: null,
        error: '',
        isLoading: false
    } 

    componentDidUpdate(prevProps) {
        if (prevProps.searchText !== this.props.searchText) {
          this.setState({ isLoading: true });
          getGifs(this.props.searchText)
            .then(response => response.json())
            .then(data => {
              this.setState({ gifs: data.data });
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
                {this.state.gifs && this.state.gifs.map(gif => {
                    return (
                        <Item key={gif.id}>
                            <Gif src={gif.images.fixed_height.url} alt={gif.title} />
                        </Item>
                    )
                })}
            </List>
        );
    }
}
 
export default GifList;