# Next.js 15 Runtime Error: Cannot read properties of undefined (reading 'MY_CUSTOM_ENV_VAR')

This repository demonstrates a runtime error in Next.js 15's production environment when accessing an undefined environment variable within a component. The error occurs only in production, and it works fine in development mode.  The issue stems from the changes in Next.js 15's handling of environment variables, specifically with the App Router and its experimental features.  This example uses the new app directory structure.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm run start`.

You should see the error in your console.  The error won't be apparent in development mode (`npm run dev`).

## Solution

The solution involves properly defining the environment variable or providing a fallback value.