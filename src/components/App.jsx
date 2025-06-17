import { Component } from "react";
import GifList from "./ImageGallery/ImageGallery";
import GifSearch from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    searchText: '',
  }

  handleSearch = (searchText) => {
    this.setState({searchText})
  }

  render() {
    return (
      <>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList searchText={this.state.searchText}/>
      </>
    )
  }
};
