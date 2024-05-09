const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const { route } = require('./src/routes');



const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/src/views' });
})
// Routes
app.use(require('./src/routes'));
// Configure Multer for handling file uploads
//const upload = multer({ dest: 'public/uploads/' });

// Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Document Intelligence API',
            description: 'API for extracting text from documents using Azure AI Document Intelligence',
            version: '1.0.0'
        },
        servers: [{
            url: 'http://159.65.246.42:3000',
            description: 'Development server'
        }]
    },
    apis: ['./index.js'] // Specify the file that contains your route definitions
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /extractText:
 *   post:
 *     summary: Extract text from a document
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         required: true
 *         description: The document file to be processed
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 document:
 *                   type: object
 *                   properties:
 *                     content:
 *                       type: string
 *                       description: Extracted text from the document
 */

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
