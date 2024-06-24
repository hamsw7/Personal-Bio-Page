import React from 'react';
import bookImg from './images/book.png';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-500 text-center">
      <h1 className="text-3xl font-bold">EDUCATIONAL SOLUTION</h1>
      <h2 className="text-2xl mt-4">Complete Guide to Web</h2>
      <h2 className="text-2xl">Development</h2>
      <p className="mt-4 mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded">Enroll Course now</button>
      <div className="mt-4 flex items-center">
        <span className="mr-2">23 lessons</span>
        <img src={bookImg} alt="Book" className="w-6 h-6 mr-2" />
        <span className="mr-2">$32.00</span>
        <span className="line-through mr-2">$67.00</span>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span>(44)</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
