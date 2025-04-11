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

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Solution Notes

I have updated the ships query to fetch the extra required fields such as home_port and missions.

I have added a new query for retrieving the missing attributes from the newly created `shipMissingAttributes` endpoint.

I have created a simple modal component for displaying the ship detail view and showing the use of client and server components.

I have refactored the ApolloClient code following [the official guide here](https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs) to support server-side data fetching and made both `app/layout.tsx` and `app/page.tsx` server components. I have also wrapped the RootLayout in the new style ApolloWrapper component which provides support for client side data fetching using hooks such as `useSuspenseQuery`.

I have also run the graphql-codegen command to generate the latest types based on the changes I had to make to the backend.

.nvmrc file added for convenience set to LTS of 22.x which was used for dev.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
