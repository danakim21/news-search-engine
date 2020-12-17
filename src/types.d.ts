interface News {
  title: string;
  content: string | null;
  description: string | null;
  urlToImage: string | null;
  author: string | null;
  publishedAt: string;
  source: { id: string | null; name: string };
  url: string;
}
