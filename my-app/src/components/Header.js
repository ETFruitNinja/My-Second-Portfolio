import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
    return (
      <div id="header">
        <h1 id="title">
            Jeffrey Yeh
        </h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    );
  }