import { Link, StyledLink } from '@components/common/Link/Link';
import { buttonBase } from '@styles/elements/button.css';
import { heading } from '@styles/elements/heading.css';
import { stack } from '@styles/primitives/stack.css';
import { text } from '@styles/primitives/text.css';
import { sprinkles } from '@styles/sprinkles.css';
import clsx from 'clsx';
import * as React from 'react';

const Home = () => {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <div
        className={clsx(
          stack(),
          sprinkles({ gap: { initial: 0, bp2: 3 }, padding: 3 }),
        )}
      >
        <h1 className={heading()}>next.js starter</h1>
        <p
          className={clsx(
            text({
              weight: 'bold',
              color: 'primary',
              limitX: true,
            }),
            sprinkles({ border: 'true' }),
          )}
        >
          test
        </p>
        <ul>
          <li>
            <StyledLink href="/posts/2">post #2</StyledLink>
          </li>
          <li>
            <StyledLink href="/posts/10">post #10</StyledLink>
          </li>
        </ul>
        <Link className={buttonBase} href="https://elegantseagulls.com">
          Seagulls
        </Link>
        <button
          className={buttonBase}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase &nbsp;&rarr;
        </button>{' '}
        {count}
      </div>
    </main>
  );
};

export default Home;
