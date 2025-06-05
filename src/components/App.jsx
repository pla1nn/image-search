import { Component } from "react";
import GifList from "./GifList/GifList";
import GifSearch from "./GifSearch/GifSearch";

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
