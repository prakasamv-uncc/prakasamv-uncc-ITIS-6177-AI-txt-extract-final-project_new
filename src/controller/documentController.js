const DocumentModel = require('../models/documentModel');
const path = require('path');
const config = require('./../../config');


const documentIntelligenceEndpoint = config.DOC_INTELLIGENCE_ENDPOINT;
const documentIntelligenceApiKey = config.DOC_INTELLIGENCE_API_KEY ;

const documentModel = new DocumentModel(documentIntelligenceEndpoint, documentIntelligenceApiKey);

exports.extractText = async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const filePath = path.join(__dirname, './../../', '/public', 'docDB', file.filename);
        const content = await documentModel.extractText(filePath);
        res.status(200).json({ document: { content } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
