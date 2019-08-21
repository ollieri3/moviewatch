import "reflect-metadata";
import dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server";
import { createConnection } from "typeorm";

import { Movie } from "./entity/movie";

dotenv.config();

(async () => {
  const connection = await createConnection({
    type: "postgres",
    host: (process.env as any).POSTGRES_HOST,
    port: (process.env as any).POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [Movie],
    synchronize: true,
    logging: false
  });

  const typeDefs = gql`
    type Movie {
      id: ID!
      title: String!
      year: Int!
      description: String!
      director: String!
      imdbRating: Float!
      runTime: Int!
      thumbnail: String!
    }

    type Query {
      movies: [Movie]
    }
  `;

  const resolvers = {
    Query: {
      movies: async () => {
        const allMovies = await connection.getRepository(Movie).find();
        return allMovies.map(movie => ({
          id: movie.id,
          title: movie.title,
          year: movie.year,
          description: movie.description,
          director: movie.director,
          imdbRating: movie.imdb_rating,
          runTime: movie.run_time,
          thumbnail: movie.thumbnail
        }));
      }
    }
  };

  new ApolloServer({
    typeDefs,
    resolvers
  })
    .listen({
      port: 3000
    })
    .then(({ url }: { url: string }) => {
      console.log(`Server ready at ${url}`);
    });
})();
