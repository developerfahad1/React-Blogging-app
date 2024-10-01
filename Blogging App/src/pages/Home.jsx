import React from 'react';

const Home = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">All Blogs</h2>

      {/* Blog Cards Container */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
          <h3 className="text-xl font-bold mb-2">How to Start Blogging</h3>
          <p className="text-gray-700">
            Learn the basics of blogging and how to start your own blog today.
          </p>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
          <h3 className="text-xl font-bold mb-2">React vs Vue</h3>
          <p className="text-gray-700">
            A detailed comparison between React and Vue.js for building web apps.
          </p>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
          <h3 className="text-xl font-bold mb-2">Tailwind CSS Tips</h3>
          <p className="text-gray-700">
            Some useful tips for efficiently using Tailwind CSS in your projects.
          </p>
        </div>

        {/* Blog Card 4 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
          <h3 className="text-xl font-bold mb-2">SEO for Beginners</h3>
          <p className="text-gray-700">
            Understand the basics of SEO and how to optimize your blog for search engines.
          </p>
        </div>

        {/* Blog Card 5 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
          <h3 className="text-xl font-bold mb-2">JavaScript Fundamentals</h3>
          <p className="text-gray-700">
            A comprehensive guide to JavaScript fundamentals for beginners.
          </p>
        </div>

        {/* Blog Card 6 */}
        <div className="bg-white rounded-lg shadow-lg p-4 w-full">
          <h3 className="text-xl font-bold mb-2">Building REST APIs</h3>
          <p className="text-gray-700">
            Learn how to build and consume RESTful APIs using Node.js and Express.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
