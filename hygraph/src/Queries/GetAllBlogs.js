export const GetAllBlogs = `
query AllBlogs {
    blogPosts {
      title
      blogDescription
      blogAuthor
    }
  }`;
