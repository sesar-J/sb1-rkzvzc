import React from 'react';
import { Clock, Tag } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, category, readTime, image }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-lg flex">
      <img src={image} alt={title} className="w-1/3 h-48 object-cover rounded-lg mr-6" />
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition duration-300">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>{date}</span>
          <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {readTime}</span>
          <span className="flex items-center"><Tag className="w-4 h-4 mr-1" /> {category}</span>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">阅读更多</button>
      </div>
    </article>
  );
};

export default BlogPost;