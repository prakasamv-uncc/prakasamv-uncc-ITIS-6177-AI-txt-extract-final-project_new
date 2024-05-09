# Final Project: 202410-Spring 2024-ITIS-6177-051-System Integration - Azure AI Document Intelligence Simple Text Extraction
## Project Details Azure AI Document Intelligence Simple Text Extractio
This project utilizes Azure AI Document Intelligence to extract text from documents. It provides a simple web interface for uploading documents and extracting text using Azure's text extraction service.
### URL to Live API
[Live API](http://159.65.246.42:3000/)
[Live Swagger](http://159.65.246.42:3000/api-docs/)
## Features

- Upload (.jpg, .jpeg, .png, .pdf) documents for text extraction
- Application Extract text from various document formats
- View extracted text on the Browser page
- Listed Header and Right side card contains GitHub and SwaggerHub doc URL's

## Prerequisites

Before running the project, ensure you have the following:

- Node.js installed on your machine `https://nodejs.org/en/learn/getting-started/how-to-install-nodejs`
- Azure account with access to the Document Intelligence service `https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence`
- API key and endpoint for the Document Intelligence service (Secure the API key and EndPoint)

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up environment variables for the API key and endpoint.
4. Run the server using `npm start`.
5. Access the application in your browser at `http://localhost:3000`.

## Usage

1. Upload a document(any of format .jpg, .jpeg, .png, .pdf) using the provided interface.
2. Click the "Extract Text" button to initiate text extraction.
3. View the extracted text on the web interface.

## Environment Variables

Ensure the following environment variables are set(Hidden from Repo):

- `API_KEY`: Your Azure Document Intelligence API key.
- `ENDPOINT`: The endpoint URL for the Azure Document Intelligence service.

### Technologies Used

#### Backend
- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js used to build the server-side logic and routes.
- **Multer**: Middleware for handling file uploads.
- **Azure AI Form Recognizer SDK**: Software development kit for integrating Azure AI Document Intelligence for text extraction.
- **Swagger UI Express**: Library for serving Swagger documentation in Express.js applications.

#### Frontend
- **HTML**: Markup language for structuring web pages.
- **CSS**: Stylesheet language for styling HTML elements.
- **JavaScript**: Programming language for implementing client-side logic.


## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--models\         # Models (data layer)
 |--routes\         # Routes
 |--index.js        # App entry point and Express app
```
### API Flow Diagram 

![New Wireframe 1 (1)](https://github.com/prakasamv-uncc/ITIS-6177-AI-txt-extract-final-project/assets/156151853/11e7f7bc-42b9-47a6-b6b5-f6164cd160c7)

#### API Documentation
To view the list of available APIs and their specifications, run the server and go to http://localhost:3000/api-docs/ in your browser.
## API Endpoints
# Extract Text route
POST /extractText - Extract Text by using Azure AI API

# Error Handling
The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling next(error)). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

The error handling middleware sends an error response, which has the following format:

{
  "code": 404,
  "message": "Not found"
}




## License

This project is licensed under the [MIT License](LICENSE).
