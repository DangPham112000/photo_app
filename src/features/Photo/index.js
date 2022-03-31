import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddEditPage from './pages/AddEdit'
import MainPage from './pages/Main'
import NotFound from 'components/NotFound';

PhoTo.propTypes = {};

function PhoTo(props) {
    
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="add" element={<AddEditPage />} />
            <Route path=":photoId" element={<AddEditPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default PhoTo;