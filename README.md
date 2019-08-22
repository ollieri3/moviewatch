# Moviewatch 🎥

Moviewatch App typescript challenge

## Installation:

1. Bring up the API and Database:

```BASH
docker-compose up
```

2. Bring up the Frontend development server:

```BASH
cd frontend && npm install && npm start
```

## Challenges:

1. Convert the Movies component to Typescript! 
Head to `frontend/screens/Movies/index.js` and convert to a `.tsx` Typescript component. 

    **Tip**: Try using a Typescript Interface to descibe the Movie object.

    **Tip**: Use the GraphQL Schema documentation at [localhost:5000](http://localhost:5000) to help write the interface for a movie!

    **Tip**: [Using Apollo With Typescript](https://www.apollographql.com/docs/react/recipes/static-typing/)

2. Convert the MovieCard component to Typescript! 
Head to `frontend/screens/Movies/components/MovieCard.js` and convert to a `.tsx` Typescript component. 

3. In the Movies screen component, create a mutation which adds a movie to your watch list when clicked. Don't forget to type your mutation!, Use the [schema documentation](http://localhost:5000)

    **Tip**: Use the GraphQL Schema documentation at localhost:5000 to help write the interface for a movie!
    
    **Tip**: [Apollo useMutation hook](https://www.apollographql.com/docs/react/essentials/mutations/#the-usemutation-hook)

4. Within the `WatchList` component write a query to retrieve all the movies in your watch list. You can use the `WatchListItem` component to render your movies!

5. Estimate your binge! Within the footer area of the WatchList component, create a new component that displays the total run time of all the films in your watch list.
