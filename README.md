# AG MANPOWER SECURITY Website

This project is a modern, dynamic, and responsive website for AG Security Service, showcasing their services, company information, and providing a contact channel.

## Technology Stack

*   **Backend:** Node.js, Express.js
*   **Email:** Nodemailer (for contact form submissions)
*   **Deployment:** Configured for Netlify and Replit.
*   **Frontend:** (Assumed to be a modern JavaScript framework like React, Vue, or Svelte, based on the build process)

## Setup and Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd AG_MANPOWER_SECURITY
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the project root directory and add the following environment variables required for the contact form email functionality:
    ```dotenv
    SMTP_HOST=your_smtp_host
    SMTP_PORT=your_smtp_port
    SMTP_SECURE=true_or_false # true for port 465, false for others like 587
    SMTP_USER=your_smtp_username
    SMTP_PASS=your_smtp_password
    EMAIL_FROM="Your Website Name" <noreply@example.com> # Sender address shown to recipient
    EMAIL_TO=your_receiving_email@example.com # Email address where contact forms are sent
    ```
    Replace the placeholder values with your actual SMTP server details.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This command typically starts both the frontend development server and the backend server (if applicable). Check the console output for the local URL (e.g., `http://localhost:5000` or similar).

## Building for Production

To create a production-ready build of the frontend application:

```bash
npm run build
```
This command will usually generate optimized static assets in a `dist` folder (or similar, check `netlify.toml` or your build configuration).

## Deployment

The project includes configuration files for deployment:

*   **Netlify:** See `netlify.toml` for build commands and publish directory.
*   **Replit:** See `.replit` for run and build commands.

## Features

*   Displays company information, services, and contact details.
*   Contact form that sends submissions to a configured email address using Nodemailer.
*   Responsive design for various screen sizes.