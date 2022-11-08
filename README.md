# Elegant Seagull's Next.js TypeScript Starter

```bash
# install
yarn install

# run
yarn dev
```

## ENV Variables

Located in `./.env.local`

- `NEXT_PUBLIC_URL` - used to transform absolute links when applicable (omit `https://www`. ex: `elegantseagulls.com`)
- `NEXT_PUBLIC_NO_INDEX` - prevent search engines from crawling the website
- `NEXT_PUBLIC_BASE_PATH` - Allows us to dynamically change the basePath of the website
- `NEXT_PREVIEW_SECRET` - validate access to [Next.js Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode#securely-accessing-it-from-your-headless-cms)

### Recommended variables

- CMS/API urls
- API Access Tokens
- Anything that shouldn't be stored in github or visible on the front-end. _Remember that variables used on the front-end will be visible in bundled code._

## Aliased Files/Directories

- **styles** &rarr; `@styles/*`
- **utils** &rarr; `@utils/*`
- **components** &rarr; `@components/*`

**Example aliasing**

```tsx
/* src/components/MyComponent.tsx */

export const MyComponent = () => <div>I'm a Component</div>;

/* src/pages/MyPage.tsx */
import { MyComponent } from '@components/MyComponent';

const MyPage = () => (
  <div>
    <p>I'm a Page</p>
    <MyComponent />
  </div>
);

export default MyPage;
```

## 3rd Party Resources

- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Next SEO](https://github.com/garmeeh/next-seo)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [Vanilla Extract](https://vanilla-extract.style/)
- [Cypress](https://www.cypress.io/)
