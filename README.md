# React Router v6 Nested Routes Issue

This repository demonstrates a bug in React Router v6 related to nesting routes when using the `element` prop.  Specifically, a child route with a catch-all path (`/*`) nested under a parent route using the `element` prop throws an error.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/about/*` in your browser.

## Expected Behavior

The application should render the `AboutNested` component without error.

## Actual Behavior

The application throws an error related to the nesting of routes with the `element` prop and the catch-all path `*`.

## Solution

The solution involves restructuring the routes to avoid the conflict between the `element` prop and the nested catch-all route.