export interface Post {
  id: int; 
  title: string;
  slug: string;
  content: string;
  image: string;
  published: boolean;
  author: string;
  authorId: in;
}