import app from './app';

import productRouter from './src/routes/products';
import userRouter from './src/routes/users';
import authRouter from './src/routes/auth';

const port = process.env.PORT || 8070;

app.use('/', productRouter);
app.use('/', userRouter);
app.use('/', authRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
