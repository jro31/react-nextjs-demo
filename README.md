Starting from [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), this repo is the first project based on *'Section 23: A (Pretty Deep Dive) Introduction to Next.js'* of Academind's *['React - The Complete Guide'](https://acad.link/reactjs)* course, and demos the absolute basics of using Next.js. Commits are examples of:

* Adding two new components: The 'Homepage' and the 'News' page - [Commit link](https://github.com/jro31/react-nextjs-demo/commit/90127b987d56e5e9045bb9e75af743aebd2b24ab)
  * Using some Next.js voodoo magic shit, this is enough to make these pages available at `my-domain.com` (for the homepage) and `my-domain.com/news` (for the news page)
* Adding nested routes - [Commit link](https://github.com/jro31/react-nextjs-demo/commit/60a5276c1449dbbab7646fddc7760a4b70484213)
  * Moving the `pages/news/js` file to `pages/news/index.js` file, it is still available at `my-domain.com/news`
  * Also added a `pages/news/something-important.js` file, which is available at `my-domain.com/news/something-important`
* Creating a dynamic page - [Commit link](https://github.com/jro31/react-nextjs-demo/commit/2e73b1071b164bdb2257091046881d73cdb8b117)
  * By using square brackets in the filename, replacing the `pages/news/something-important.js` file with `pages/news/[newsId].js` creates a dynamic page, meaning that `my-domain.com/news/absolutely-anything` will now render this page
* Extracting the dynamic parameter value (from the previous commit) - [Commit link](https://github.com/jro31/react-nextjs-demo/commit/00b675572b56c68205b34bf85a6c7e03dfd4ddc6)
  * So, for example, if we go to `my-domain.com/news/yabadabadoo`, it loads the `pages/news/[newsId].js` file and sets a `newsId` variable that equals `yabadabadoo`.
    * We aren't doing anything with that variable here, but it could be used, for example, to fetch the correct news article from a database
* Adding links to different pages using the Next.js `<Link>` component - [Commit link](https://github.com/jro31/react-nextjs-demo/commit/5433e3b5b11a3153d46c1470a65c960114aea076)
  * Which, much like the React `<Link>` component, allows you to navigate without reloading the page, so maintaining all state
