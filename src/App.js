import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
