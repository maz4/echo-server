import express, { NextFunction, Request, Response }  from 'express'
import path from 'path';
import {getData} from './src/getData'

const app = express();
const PORT = 8080;
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', getData)

// Serve compiled chunk
app.use(express.static(path.join(__dirname, '../build')));

// Listen to localhost only
app.listen(PORT, () => {
  console.log(`Server started at localhost: ${PORT}`);
});

export default app;