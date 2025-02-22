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
  const myVar = process.env.MY_CUSTOM_ENV_VAR || 'Default Value'; // Providing a default value
  console.log(myVar);
  return (
    <div>This is a component. {myVar}</div>
  );
}
```