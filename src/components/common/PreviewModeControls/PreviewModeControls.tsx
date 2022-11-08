import { buttonBase } from '@styles/elements/button.css';
import { useRouter } from 'next/router';
import { Link } from '../Link/Link';
import * as s from './PreviewModeControls.css';

export const PreviewModeControls = () => {
  const { isPreview } = useRouter();

  if (!isPreview) return null;

  return (
    <div className={s.root}>
      <Link className={buttonBase} href="/api/preview/exit">
        Exit Preview
      </Link>
    </div>
  );
};
