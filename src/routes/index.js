const express = require('express');
const documentController = require('./../controller/documentController');
const uploadFile = require('./../middleware/upload');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const router = express.Router();

// Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Document Intelligence API',
            description: 'API for extracting text from documents using Azure AI Document Intelligence',
            version: '1.0.0'
        },
        servers: [{
            url: 'http://localhost:3000',
            description: 'Development server'
        }]
    },
    apis: ['./../../index.js'] // Specify the file that contains your route definitions
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
// Serve Swagger documentation
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
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
router.post('/extractText', uploadFile, documentController.extractText);

module.exports = router;

