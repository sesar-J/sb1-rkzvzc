import React from 'react';
import { Search, Tag, Calendar, TrendingUp, Github, Linkedin } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center"><Search className="w-5 h-5 mr-2" /> 搜索</h3>
        <input type="text" placeholder="搜索文章..." className="w-full p-2 border rounded" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">关于我</h3>
        <p className="text-gray-600 mb-4">全栈开发者，热爱探索新技术，分享编程经验。</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600"><Github className="w-6 h-6" /></a>
          <a href="#" className="text-gray-600 hover:text-blue-600"><Linkedin className="w-6 h-6" /></a>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center"><Tag className="w-5 h-5 mr-2" /> 热门标签</h3>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'React', 'Node.js', 'Python', 'DevOps', 'Machine Learning'].map(tag => (
            <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{tag}</span>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center"><Calendar className="w-5 h-5 mr-2" /> 文章归档</h3>
        <ul className="space-y-2">
          {['2024年3月', '2024年2月', '2024年1月', '2023年12月'].map(month => (
            <li key={month} className="text-gray-600 hover:text-blue-600 cursor-pointer">{month}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 flex items-center"><TrendingUp className="w-5 h-5 mr-2" /> 热门文章</h3>
        <ul className="space-y-2">
          {['React性能优化技巧', 'TypeScript高级特性解析', 'Docker容器化实战', 'GraphQL vs REST API', 'Python机器学习入门'].map(article => (
            <li key={article} className="text-gray-600 hover:text-blue-600 cursor-pointer">{article}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;