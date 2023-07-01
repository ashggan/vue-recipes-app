export const recipeListApi = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/list',
  params: {
    limit: '18',
    start: '0'
  },
  headers: {
    'X-RapidAPI-Key': '5f7f1e224dmsh0ae426966b1cedfp1a3ab4jsn450cb63d12d5',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};
