import React from 'react';
import { User, Search, Code } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center">
          <Code className="w-8 h-8 mr-2" />
          CodeCraft
        </h1>
        <nav className="flex-grow mx-10">
          <ul className="flex space-x-6 justify-center">
            <li><a href="#" className="hover:text-blue-400 text-lg">首页</a></li>
            <li><a href="#" className="hover:text-blue-400 text-lg">技术博文</a></li>
            <li><a href="#" className="hover:text-blue-400 text-lg">项目展示</a></li>
            <li><a href="#" className="hover:text-blue-400 text-lg">关于我</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer hover:text-blue-400" />
          <User className="w-6 h-6 cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;