import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import appRouter from './routes/appRouter.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import bodyParser from 'body-parser';
import schema from './graphql/graphqlSchema.js';

dotenv.config();

const PORT = process.env.PORT || 8080;

await connectDb();

const app = express();
const httpServer = http.createServer(app);
const graphqlServer = new ApolloServer({
    ...schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await graphqlServer.start();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', appRouter);

app.use('/graphql', bodyParser.json(), expressMiddleware(graphqlServer));

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
