export interface Photo {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowContents: boolean;
  likes: number;
  comments: number;
  userId: number;
}