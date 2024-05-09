const { DocumentAnalysisClient, AzureKeyCredential } = require('@azure/ai-form-recognizer');
const config = require('./../../config');
const fs = require('fs');

config
class DocumentModel {
    constructor(documentIntelligenceEndpoint, documentIntelligenceApiKey) {
        this.documentIntelligenceEndpoint = documentIntelligenceEndpoint;
        this.documentIntelligenceApiKey = documentIntelligenceApiKey;
    }

    async extractText(filePath) {
        try {
            const fileStream = fs.createReadStream(filePath);
            const documentAnalysisClient = new DocumentAnalysisClient(config.DOC_INTELLIGENCE_ENDPOINT, new AzureKeyCredential(config.DOC_INTELLIGENCE_SUBSCRIPTION_KEY));
            const poller = await documentAnalysisClient.beginAnalyzeDocument("prebuilt-read", fileStream);
            const { content } = await poller.pollUntilDone();
            return content;
        } catch (error) {
            console.error('Error processing file:', error);
            throw error;
        }
    }
}

module.exports = DocumentModel;
