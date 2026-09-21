import React from "react";
//  1. Fetch data from a REST API endpoint
const getPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

// 2. Fetch data from a REST API endpoint with error handling
// const getPromise2 = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (error) {
//     throw new Error("Failed to fetch data");
//   }
// };

// 3. Fetch data from a REST API endpoint with error handling and response status check
// const getPromise3 = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const PostsPage = async () => {
  
  // 1. Fetch data from a REST API endpoint
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const postData = await response.json();

  const postData = await getPromise();

  console.log(postData);

  return (
    <div>
      <h2>Posts Page: {postData.length}</h2>
    </div>
  );
};

export default PostsPage;
