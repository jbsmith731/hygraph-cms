import { BASE_PATH } from '@utils/constants/path.constants';
import {
  sendUnauthorized,
  serverSideRedirect,
} from '@utils/helpers/apiRoute.helpers';
import { NextApiRequest, NextApiResponse } from 'next';

const preview = (req: NextApiRequest, res: NextApiResponse) => {
  const { secret, slug } = req.query;

  if (secret !== process.env.NEXT_PREVIEW_SECRET || !slug) {
    return sendUnauthorized(res, 'Invalid token or slug');
  }

  // Replace with API request in preview mode
  const data = null;

  // If the page data doesn't exist prevent preview mode from being enabled
  if (!data) {
    return sendUnauthorized(
      res,
      'No page data to display. Slug may be invalid.',
    );
  }

  /**
   * Calling setPreviewData sets a preview cookies that turn on the preview mode.
   * Any requests to Next.js containing these cookies will be seen as preview mode
   */
  res.setPreviewData({
    maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
  });

  serverSideRedirect(res, `${BASE_PATH}/${slug}`, 307);

  res.end();
};

export default preview;
