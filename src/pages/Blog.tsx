import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from '../components/BlogList';
import BlogDetail from '../components/BlogDetail';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route index element={<BlogList />} />
        <Route path=":slug" element={<BlogDetail />} />
      </Routes>
    </div>
  );
};

export default BlogPage; 