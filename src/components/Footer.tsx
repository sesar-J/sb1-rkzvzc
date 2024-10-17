import React from 'react';
import { Github, Twitter, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2" />
              CodeCraft
            </h3>
            <p className="text-gray-400">探索编程世界，分享技术见解</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">首页</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">技术博文</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">项目展示</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">关于我</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">关注我</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CodeCraft. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;