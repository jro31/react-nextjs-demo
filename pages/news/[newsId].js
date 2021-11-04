// Using square-brackets in the filename, it tells Next.js that this will be a dynamic page
// so should be loaded for different values in our path
// This page will be available by all 'my-domain.com/news/something' URLs, for example:
// 'my-domain.com/news/test', 'my-domain.com/news/wtf', 'my-domain.com/news/balls' will all render this page

import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();

  const newsId = router.query.newsId;
  // Fetches the ID that we used in the URL
  // So, for example, if the URL was 'my-domain.com/news/praise-jethro'
  // Then 'newsId' here would be 'praise-jethro'
  // Note that 'newsId' in 'router.query.newsId' must match the filename

  // We could send a request to the backend API to fetch the news item with 'newsId', for example

  return <h1>The Detail Page</h1>;
};

export default Detail;
