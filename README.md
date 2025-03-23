# AI-Enhanced Resume Builder

This application helps users create tailored resumes and cover letters by leveraging AI to match their profile with job descriptions. The app allows importing profiles from JSON or PDF, offers multiple resume styles, and exports the final documents as PDFs.

## 📋 Features

- Import user profiles from JSON or PDF
- Import job descriptions
- Multiple resume template styles
- Customizable cover letter with different speech styles
- AI-powered matching of skills to job requirements
- PDF export for both resume and cover letter

## 🏗️ Project Architecture

This project uses a monorepo structure managed by pnpm workspaces and Turborepo for efficient dependency management and task orchestration.

### Repository Structure

```
resume-builder/
├── apps/                  # Application packages
│   ├── web/               # Frontend Vite React application
│   └── api/               # Serverless functions for AI integration
├── packages/              # Shared packages
│   ├── shared/            # Shared types, utilities, and constants
│   ├── ui/                # Reusable styled components
│   ├── ai/                # AI prompt engineering and processing
│   └── pdf/               # PDF generation and parsing utilities
├── pnpm-workspace.yaml    # pnpm workspace configuration
├── turbo.json             # Turborepo configuration
└── package.json           # Root package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- pnpm package manager

### Installation

1. **Install pnpm** (if not already installed):
   ```bash
   npm install -g pnpm
   ```

2. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd resume-builder
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the `apps/api` directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

5. **Start the development server**:
   ```bash
   pnpm dev
   ```
   This will start both the frontend and API development servers.

## 📝 Important Commands

### Development

- **Start all development servers**:
  ```bash
  pnpm dev
  ```

- **Start only the frontend**:
  ```bash
  pnpm --filter ./apps/web dev
  ```

- **Start only the API server**:
  ```bash
  pnpm --filter ./apps/api dev
  ```

### Building

- **Build all packages**:
  ```bash
  pnpm build
  ```

- **Build a specific package**:
  ```bash
  pnpm --filter ./apps/web build
  ```

### Managing Dependencies

- **Add a dependency to a specific package**:
  ```bash
  pnpm add react --filter ./apps/web
  ```

- **Add a development dependency to a specific package**:
  ```bash
  pnpm add -D typescript --filter ./apps/web
  ```

- **Add a shared package as a dependency**:
  ```bash
  pnpm add @resume-builder/shared --filter ./apps/web --workspace
  ```

- **Add a dependency to the entire monorepo (root)**:
  ```bash
  pnpm add -w turbo
  ```

### Creating New Packages

To create a new package in the monorepo:

1. Create a new directory in the appropriate location:
   ```bash
   mkdir -p packages/new-package
   ```

2. Initialize a package.json:
   ```bash
   cd packages/new-package
   pnpm init
   ```

3. Ensure the package name in package.json follows the naming convention:
   ```json
   {
     "name": "@resume-builder/new-package",
     "version": "0.1.0"
   }
   ```

## 🧩 Component Structure

### Frontend (apps/web)

The frontend is built with Vite, React, TypeScript, styled-components, and SCSS. Key components include:

- **FileUploader**: Handles JSON and PDF imports
- **ProfileEditor**: Allows editing of imported profile data
- **JobDescriptionEditor**: Lets users input and edit job descriptions
- **ResumeTemplates**: Collection of different resume styles
- **CoverLetterTemplates**: Collection of cover letter styles with speech options
- **PDFExporter**: Handles exporting documents as PDFs

### API (apps/api)

The API consists of serverless functions for AI integration. Key functions include:

- **generateResume**: Creates tailored resume content based on profile and job description
- **generateCoverLetter**: Creates cover letter content with specified speech style
- **extractProfileFromPDF**: Extracts structured data from uploaded PDF resumes

## 🔄 Data Flow

1. User uploads profile (JSON/PDF) and job description
2. Data is parsed and structured using shared type definitions
3. User selects template styles and customization options
4. AI generates tailored content based on profile and job description
5. User previews and edits generated content
6. User exports final documents as PDFs

## 🔧 Configuration

### Turborepo Configuration

The `turbo.json` file defines the build pipeline and task dependencies. You can modify this to change how tasks are executed and cached.

### Environment Variables

- **OPENAI_API_KEY**: Required for AI functionality in the API
- **PDF_EXPORT_QUALITY**: Optional, controls the quality of exported PDFs (default: 1)
- **DEBUG_MODE**: Optional, enables additional logging when set to "true"

## 📚 Technologies Used

- **Frontend**: Vite, React, TypeScript, styled-components, SCSS
- **Backend**: Serverless functions (Vercel/Netlify/Firebase)
- **AI Integration**: OpenAI API (GPT models)
- **PDF Processing**: pdf-lib, pdf-parse
- **Monorepo Management**: pnpm workspaces, Turborepo

## ⚠️ Common Issues and Solutions

### PDF Parsing Issues

If you encounter problems with PDF parsing, ensure:
- The PDF is not password-protected
- The PDF contains text layers (not just images)
- You're using the latest version of the pdf-parse library

### OpenAI API Errors

If AI generation fails:
- Verify your API key is correct
- Check your OpenAI account has available credits
- Ensure your prompts aren't too large (reduce input size if needed)

### Build Errors

If you encounter build errors:
- Clear the Turborepo cache: `pnpm dlx turbo clean`
- Update all dependencies: `pnpm update -r`
- Check for type errors across packages

## 🤝 Contributing

To contribute to the project:

1. Create a new branch for your feature/fix
2. Make your changes
3. Run `pnpm lint` and `pnpm build` to ensure everything works
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.