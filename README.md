# React Example App

This is a React application built with Vite and Tailwind CSS.

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory and add your API keys:

    ```env
    GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:3000`.

## Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## Deploying to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

1.  **Make sure your remote is set correctly.**

2.  **Run the deploy script:**

    ```bash
    npm run deploy
    ```

    This command will:
    -   Build the project (`npm run build`).
    -   Push the `dist` folder to the `gh-pages` branch of your repository.

3.  **Configure GitHub Pages:**

    -   Go to your repository settings on GitHub.
    -   Navigate to **Pages**.
    -   Under **Source**, select `Deploy from a branch`.
    -   Select the `gh-pages` branch and `/ (root)` folder.
    -   Click **Save**.

Your app should now be live at `https://<your-username>.github.io/<repo-name>/`.

## Troubleshooting

-   **Blank page on deploy:** Ensure the `base` in `vite.config.ts` matches your repository name or is set to `'./'`. Currently it is set to `'./'`.
-   **API Key issues:** Since the API key is baked into the build (via `vite.config.ts`), make sure your `.env` file has the correct key *before* running `npm run deploy`.
