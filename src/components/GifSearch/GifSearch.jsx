import { Component } from 'react';
import { SearchBar, SearchButton, SearchForm, SearchInput, SearchLabel } from './GifSearch.styled';

class GifSearch extends Component {
  state = {};
  render() {
    return (
      <SearchBar>
        <SearchForm>
          <SearchButton type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

export default GifSearch;
