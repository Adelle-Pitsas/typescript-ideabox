

export const getArticles = (key: string) => {
  return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`)
  .then(response => response.json())
}