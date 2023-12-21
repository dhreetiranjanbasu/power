import { User } from "@prisma/client";

export interface PostTypes {
  id: string;
  title: string;
  img: string;
  desc: string;
  featured: boolean;
  topPost: boolean;
  category: string;
  authorImage: string;
  authorName: string;
  publishDate: string;
  createdAt: string;
  user: User;
}
