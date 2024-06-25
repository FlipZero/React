const APP_ID = 'c5aafbe9';
const APP_KEY = '9b984edc5a7559f2f2c94ee71f75d5db';

export const fetchRecipes = async (query) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  return data.hits;
};
