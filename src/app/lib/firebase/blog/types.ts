// types.ts
export interface BlogPost {
    postId: string;
    title: string;
    content: string;
    imageUrl: string;
    date: { seconds: number; nanoseconds: number };
    // Add other properties as needed
  }
  
  export interface BlogPostData {
    title?: string;
    content?: string;
    imageUrl?: string;
    date?: { seconds: number; nanoseconds: number };
    // Add other properties as needed
  }
  