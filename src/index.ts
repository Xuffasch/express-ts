// Required dependencies
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

/* Retrieve environment variables set in .env */
dotenv.config();

// App Variables

// If the PORT setting cannot be found, exit process with error code 1
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// App Configuration

app.use(helmet()); /* Set some fault HTTP headers related to security */
app.use(cors()); /* CORS setting to allow request from all domain */
app.use(
  express.json()
); /* Parse 'JSON' format payload sent by the client and save it in request.body */

// Server Activation
app.listen(PORT, () => {
  console.log(`Server up and ready, listening at port ${PORT} `);
});
