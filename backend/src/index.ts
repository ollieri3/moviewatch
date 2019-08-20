import "reflect-metadata";
import dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server";
import { createConnection } from "typeorm";

import { Movie } from "./entity/movie";

dotenv.config();

createConnection({
  type: "postgres",
  host: (process.env as any).POSTGRES_HOST,
  port: (process.env as any).POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Movie],
  synchronize: true,
  logging: false
})
  .then(() => console.log("TypeORM Connected"))
  .catch(err => console.log(err));

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
    movies: () => [
      {
        title: "Test",
        year: 2019,
        description: "test",
        imdbRating: 9.2,
        director: "Test",
        runTime: 175,
        thumbnail: "a url goes here"
      }
    ]
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
