import { toast } from 'react-toastify';
import { useState } from 'react';
import { SearchContainer, SearchButton, SearchForm, SearchInput, SearchLabel } from './Searchbar.styled';

export const SearchBar = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('enter something')
      return
    }
    onSubmit(value)
  }

    return (
      <SearchContainer>
        <SearchForm onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={value}
          />
        </SearchForm>
      </SearchContainer>
    );
  }
