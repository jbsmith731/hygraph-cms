import clsx from 'clsx';
import NextLink from 'next/link';
import * as React from 'react';
import * as s from './Link.css';

if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_URL) {
  // eslint-disable-next-line no-console
  console.warn('Link.jsx: No NEXT_PUBLIC_URL set in .env');
}

interface LinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  openInNewTab?: boolean;
  target?: string;
  rel?: string;
}

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<LinkProps>
>(
  (
    { href = '/', children, openInNewTab, rel, target, ...rest },
    forwardedRef,
  ) => {
    const siteUrl = new RegExp(
      `https?://(www.)?${process.env.NEXT_PUBLIC_URL}/?`,
      'g',
    );

    const formattedUrl = href.replace(siteUrl, '/');

    return (
      <NextLink
        href={formattedUrl}
        ref={forwardedRef}
        rel={openInNewTab ? 'noopener norefferer' : rel}
        target={openInNewTab ? '_blank' : target}
        {...rest}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = 'Link';

export const StyledLink = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<LinkProps>
>(({ className, ...rest }, forwardedRef) => {
  return (
    <Link {...rest} className={clsx(s.root, className)} ref={forwardedRef} />
  );
});

StyledLink.displayName = 'StyledLink';
