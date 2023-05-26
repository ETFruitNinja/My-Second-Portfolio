import React from 'react';

export default function Footer() {
    return (
      <div>
        {/* TODO: get logo to appear on webpage, then add LinkedIn + other social media */}
        <a href="https://github.com/ETFruitNinja/">
            <img src={require ("../github-mark.png")} alt="GitHub Logo" />
        </a>
      </div>
    );
  }