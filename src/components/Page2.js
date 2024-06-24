import React from 'react';
import pointingImg from './images/person-pointing.png';

function Page2() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center">
        <img src={pointingImg} alt="Person pointing" className="h-64" />
      </div>
      <div className="w-1/2 p-8 bg-gray-200">
        <div className="bg-purple-500 text-white p-4 shadow-lg">
          <h2 className="text-2xl">Learn about</h2>
        </div>
        <h3 className="text-xl mt-4">What you'll Discover</h3>
        <p className="mt-2">Forging relationships between multi to national Governments and Global. Explore a variety of fresh educational teach. National Governments and global.</p>
        <h2 className="text-2xl mt-4">Whats Material Includes?</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Explore a Variety of fresh educational teach</li>
          <li>Lorem ipsum.....</li>
          <li>Dolor sit amet.....</li>
        </ul>
        <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded">Learn More about &rarr;</button>
      </div>
    </div>
  );
}

export default Page2;
