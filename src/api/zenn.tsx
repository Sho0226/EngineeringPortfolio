import axios from 'axios';

export type Article = {
  id: number;
  post_type: 'Article';
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: 'tech';
  emoji: string;
  is_suspending_private: boolean;
  published_at: Date;
  body_updated_at: Date;
  source_repo_updated_at: null;
  pinned: boolean;
  path: string;
  user: { id: number; username: string; name: string; avatar_small_url: string };
  publication: null;
};

const url = 'https://zenn.dev/api/articles?username=sho0226&order=latest&page=1';

export const fetchAxiosData = async (): Promise<Article[]> => {
  const response = await axios.get(url);
  return response.data.articles as Article[];
};
