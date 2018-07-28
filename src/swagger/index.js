import swagger from 'swagger-node-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const swaggerDefinition = {
  info: {
    title: 'API for node.js mp',
  },
  host: `localhost:${process.env.PORT || 8020}`,
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: [
    './src/swagger/*.yaml'
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default function swaggerInit(app) {
  app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  swagger.setAppHandler(app);
}
