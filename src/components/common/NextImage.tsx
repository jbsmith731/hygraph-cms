import { BASE_PATH } from '@utils/constants/path.constants';
import Image, { ImageProps } from 'next/image';

export const NextImage = ({ src, alt, ...rest }: ImageProps) => {
  const imageSrc = typeof src === 'string' ? `${BASE_PATH}${src}` : src;

  return <Image {...rest} src={imageSrc} alt={alt || ''} />;
};
