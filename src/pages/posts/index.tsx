import { Link } from '@components/common/Link/Link';
import { heading } from '@styles/elements/heading.css';
import { NextSeo } from 'next-seo';

const PostList = () => (
  <main>
    <NextSeo title="Posts" />
    <div>
      <h1 className={heading()}>Post List</h1>
      <ul>
        <li>
          <Link href="/posts/1">Post 1</Link>
        </li>
      </ul>
    </div>
  </main>
);

export default PostList;
