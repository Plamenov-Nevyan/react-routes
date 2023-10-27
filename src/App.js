import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home/Home';
import './App.css';
import {Header} from './components/Header/Header';
import { Blog } from './components/Blog/Blog';

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </>
  );
}

export default App;
