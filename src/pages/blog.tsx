import type { GetStaticProps } from 'next';
import { fetchAxiosData, type Article } from '../api/zenn';
import Blog from '../components/BlogSample';
import Header from '../components/Header';

type Props = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await fetchAxiosData();
  return {
    props: {
      articles,
    },
  };
};

const BlogPage = ({ articles }: Props) => {
  return (
    <div>
      <Header />
      <Blog articles={articles} />
    </div>
  );
};

export default BlogPage;
