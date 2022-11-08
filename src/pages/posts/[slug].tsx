import { heading } from '@styles/elements/heading.css';
import { text } from '@styles/primitives/text.css';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { NextSeo } from 'next-seo';

const SinglePost = ({
  postId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <NextSeo
        title={`Post ${postId}`}
        openGraph={{
          title: `Post ${postId}`,
          description: 'I am description',
        }}
      />
      <div>
        <div>
          <h1 className={heading()}>My blog post #{postId}</h1>
          <p className={text({ leading: 3, limitX: true })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps<{ postId: string }> = ({
  params,
}) => ({
  props: { postId: params?.slug as string },
});

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [
    { params: { slug: '1' } },
    { params: { slug: '2' } },
    { params: { slug: '10' } },
  ],
  fallback: false,
});

export default SinglePost;
