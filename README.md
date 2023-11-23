<img src="https://fullstackbd.com/assets/images/logo-with-name.png" height="20px" />
<br>

# Component Driven Redux for Enterprise Software

This Project is generated with `create-cdr-app`. The application will automatically reload if you change any of the source files.

The Application Follows the following structure:

```bash
src
├── api.ts
├── app
│   ├── api
│   │   └── index.ts
│   ├── controller
│   │   ├── Root.tsx
│   │   └── index.ts
│   ├── data
│   ├── index.ts
│   ├── model
│   ├── routes
│   │   └── Routing.tsx
│   ├── service
│   │   ├── actions.ts
│   │   └── index.ts
│   └── views
│       ├── RootView.tsx
│       └── index.ts
├── common
│   ├── controller
│   └── views
├── main.tsx
├── middleware.ts
├── resources
│   ├── assets
│   ├── configs
│   │   ├── application.dev.ts
│   │   ├── application.prod.ts
│   │   ├── application.template.ts
│   │   ├── application.test.ts
│   │   └── application.ts
│   └── css
│       └── index.css
├── store.ts
└── vite-env.d.ts
```

## Run

To Launch a Development Server:

```bash
npm run dev
```

## Build

To Build the project:

```bash
npm run build
```

which will generate a `dist`.

## Test

To Run the Test:

```bash
npm run test
```
