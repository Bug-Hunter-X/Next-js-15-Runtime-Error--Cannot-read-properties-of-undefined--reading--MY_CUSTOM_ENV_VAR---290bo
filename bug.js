```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a test paragraph.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  // This will cause an error when using the new experimental features of next.js 13
  console.log(process.env.MY_CUSTOM_ENV_VAR) // This causes a runtime error in production mode only, if you have not set the environment variable
  return (
    <div>This is a component.</div>
  );
}
```