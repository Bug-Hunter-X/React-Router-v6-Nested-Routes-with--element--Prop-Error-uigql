```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutRoutes />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function AboutRoutes() {
  return (
    <Routes>
      <Route path="" element={<About />} />
      <Route path="*" element={<AboutNested />} />
    </Routes>
  );
}

function About() {
  return <div>About</div>;
}

function AboutNested() {
  return <div>About Nested</div>;
}
export default App;
```