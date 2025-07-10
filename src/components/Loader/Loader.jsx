import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  <LoaderStyled>
    <ThreeDots color="blue" height={50} width={50} ariaLabel="loading" />
  </LoaderStyled>;
};
