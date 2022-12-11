
export const responseUser = async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

export const responsePhotos = async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();
  return data;
};

export const responsePosts = async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};