import app from './app';

import mongooseConnect from './src/db/connectMongo';
import swaggerInit from './src/swagger';

import productRouter from './src/routes/products';
import userRouter from './src/routes/users';
import cityRouter from './src/routes/cities';
import authRouter from './src/routes/auth';

const port = process.env.PORT || 8020;


app.use('/', productRouter);
app.use('/', userRouter);
app.use('/', cityRouter);
app.use('/', authRouter);

swaggerInit(app);

app.listen(port, () => console.log(`App listening on port ${port}!`));

mongooseConnect();
