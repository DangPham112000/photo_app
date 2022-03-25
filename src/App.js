import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Photo from './features/Photo';
import NotFound from './components/NotFound'
import './App.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={(<div>Loading...</div>)}>

        <BrowserRouter>
        
          <Header />
        
          <Routes>
            <Route path="/" element={<Navigate to="/photos" replace />} />
            <Route path="/photos/*" element={<Photo />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </Suspense>
    </div>
  );
}

export default App;
