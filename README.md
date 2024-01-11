# Dollerydoo Dockets

## Overview

Dollerydoo Dockets is a web application built with React, Next.js, TypeScript, and the Google Sheets API. It serves as an expense tracker, allowing users to generate a Google Sheets document with multiple sheets for each month.

## Features

- **User-Friendly Interface:** A clean and intuitive interface for entering and managing expense data.
- **Google Sheets Integration:** Seamless integration with the Google Sheets API to create and update expense records.
- **Monthly Sheets:** Automatically generates sheets for each month to organize expenses efficiently.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the Dollerydoo Dockets repository:

   ```bash
   git clone https://github.com/yourusername/dollerydoo-dockets.git

   ```

2. Install dependencies:
   `cd dollerydoo-dockets`
   `npm install`

### Configuration

1. Set up a project on the [Google Cloud Console](https://console.cloud.google.com/?_ga=2.237158848.1709651808.1705001131-1607468760.1705001131).
2. Enable the Google Sheets API and create OAuth 2.0 credentials.
3. Copy the credentials JSON file to the project's root and name it `credentials.json`

### Usage

1. Start the development server:
   `npm run dev`
2. Open your browser and go to `http://localhost:3000` to access the Dollerydoo Dockets application.

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

### Acknowledgements

- Special thanks to the [Google Sheets API documentation](https://developers.google.com/sheets/api/reference/rest) for guidance on integration.

### Disclaimer

Dollerydoo Dockets is developed for educational purposes and may not be suitable for production use.

Feel free to customize any other details according to your project's specific information.
