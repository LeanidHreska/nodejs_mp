import app from './app';

import sequelize from './src/db/connect';
import mongooseConnect from './src/db/connectMongo';

import productRouter from './src/routes/products';
import userRouter from './src/routes/users';
import cityRouter from './src/routes/cities';
import authRouter from './src/routes/auth';

const port = process.env.PORT || 8020;

sequelize.sync().then(() => {
  app.use('/', productRouter);
  app.use('/', userRouter);
  app.use('/', cityRouter);
  app.use('/', authRouter);
  
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});

mongooseConnect();
