# StoneScan

StoneScan is a modern web application for detecting and analyzing kidney stones in medical scans using artificial intelligence. The application provides a user-friendly interface for doctors, radiologists, and patients to upload, view, and analyze medical scans.

## Project Structure

```
stonescan/
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── public/       # Static files
│   └── ...          # Frontend configuration files
└── README.md         # This file
```

## Getting Started

### Frontend Development

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend application will be available at `http://localhost:5173`

For more detailed information about the frontend, see the [frontend README](frontend/README.md).

## Features

- User Dashboard with quick access to key functions
- Secure authentication for different user roles
- Profile management for users
- Drag-and-drop scan upload with support for DICOM, PNG, and JPG formats
- Interactive scan viewer with zoom, pan, and contrast controls
- 3D visualization capabilities
- Downloadable PDF reports with AI findings
- Integration with PACS/RIS systems

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stonescan.git
cd stonescan
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_API_URL=your_api_url
VITE_PACS_URL=your_pacs_url
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Medical imaging libraries and tools
- AI/ML frameworks used for stone detection
- Contributors and maintainers 