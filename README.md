# Online_Store-Reactjs-Redux-Strapi_R_C_P


## Quickstart

Before you begin, ensure you have met the following requirements:


- Node.js: [Download and install Node.js](https://nodejs.org/).

## Cloning the Repository

To get a local copy of this project, follow these steps:
First, clone the repository:

```bash
git clone https://github.com/Taoufiq-Rhouas/Online_Store-Reactjs-Redux-Strapi_R_C_P.git
cd Online_Store-Reactjs-Redux-Strapi_R_C_P
```

## Backend (server)

To install the backend dependencies, navigate to the server folder and run:

```bash
cd server
npm install
```

#### Starting the Backend

To start the backend server, run:

```bash
npm run dvelop
```


## Configuring the Application

#### **Generate Your Personal Token from Strapi CMS**:

- Access the Strapi CMS dashboard, which serves as the backend for this application. You can typically do this by visiting a specific URL, e.g., `http://localhost:1337/admin` or the hosted Strapi instance URL.

- Log in with your credentials or create an account if you haven't already.

- In the Strapi CMS dashboard, follow these steps to generate your personal token:

  - 1_ Navigate to the user settings or profile section.
  - 2_ Look for an option to generate a personal API token or access token.
  - 3_ Click on the option to generate a new token.
  - 4_ Give your token a meaningful name, if required, and confirm the generation.

- After generating the token, you should see it displayed on the screen. Copy the token value to your clipboard.

#### **Configure Your Personal Token**:

- Create a `.env` file in the root of your project directory in client folder like `.env.example` if it doesn't already exist.
- Open the `.env` file and add the following line, replacing `VITE_API_TOKEN` with the token you generated from the Strapi CMS dashboard:

- Add a `VITE_API_URL` And `VITE_APP_URL` like this example :

```bash
VITE_API_TOKEN=YOUR_PERSONAL_TOKEN
VITE_API_URL=http://localhost:1337/api
VITE_APP_URL=http://localhost:1337
```


## Frontend (client)

To install the frontend dependencies, navigate to the client folder and run:

```bash
cd client
npm install
```

#### Starting the Frontend

To start the frontend development server, run:

```bash
npm run dev
```

`** N.B database : strapistore.sql **`