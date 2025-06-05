import { Component } from 'react';
import { SearchBar, SearchButton, SearchForm, SearchInput, SearchLabel } from './GifSearch.styled';

class GifSearch extends Component {
  state = {
    value: ''
  };

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.value)
  }

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

export default GifSearch;
