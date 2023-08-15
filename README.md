# improved-youtube-search

- Project created to present an improved search in the results of YouTube videos.

---

# Run project on a GitHub Codespace:

## Node version

Install the node version used in the project.

```bash
nvm install
```

## Install project

To install the necessary project dependencies, run the command:

```bash
npm install
```

## File .env.local

Create a `.env.local` file in the root folder of the project using the `.env.local.example` file. It will be necessary to create an [apikey](https://developers.google.com/youtube/v3/getting-started?hl=pt-br) in the [google cloud](https://console.cloud.google.com/) service and add it in the field indicated in the `.env.local.example` file.

## Run the project

To run the project use the command.

```bash
npm run dev
```

---

# Run project on a local machine

## First steps

To use this app you must clone, install and run the project [improved-youtube-search](https://github.com/guilhermelaureano/improved-youtube-search).

Create a `.env.local` file in the root folder of the project using the `.env.local.example` file. It will be necessary to create an [apikey](https://developers.google.com/youtube/v3/getting-started?hl=pt-br) in the [google cloud](https://console.cloud.google.com/) service and add it in the field indicated in the `.env.local.example` file.

## Next steps

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
