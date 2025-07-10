import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, onClickModal }) => {
  return (
    <Item>
      <Image src={webformatURL} alt={tags} onClick={onClickModal} />
    </Item>
  );
};
