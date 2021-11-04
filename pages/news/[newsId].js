// Using square-brackets in the filename, it tells Next.js that this will be a dynamic page
// so should be loaded for different values in our path
// This page will be available by all 'my-domain.com/news/something' URLs, for example:
// 'my-domain.com/news/test', 'my-domain.com/news/wtf', 'my-domain.com/news/balls' will all render this page

const Detail = () => {
  return <h1>The Detail Page</h1>;
};

export default Detail;
