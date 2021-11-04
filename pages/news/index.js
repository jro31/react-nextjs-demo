// 'my-domain.com/news'

import Link from 'next/link';
import { Fragment } from 'react';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/my-first-news-article'>My first news article</Link>
        </li>
        <li>
          <Link href='/news/my-second-news-article'>My second news article</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
