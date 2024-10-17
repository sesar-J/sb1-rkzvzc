import React from 'react';
import BlogPost from './BlogPost';

const blogPosts = [
  {
    id: 1,
    title: '深入理解React Hooks：提升组件性能的秘诀',
    excerpt: '探索React Hooks的高级用法，学习如何优化你的React应用性能。',
    date: '2024-03-15',
    category: 'React',
    readTime: '8分钟',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 2,
    title: 'TypeScript高级类型：打造类型安全的应用',
    excerpt: '深入TypeScript的高级类型系统，学习如何创建更加健壮和可维护的代码。',
    date: '2024-03-18',
    category: 'TypeScript',
    readTime: '10分钟',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 3,
    title: 'Docker容器化你的Node.js应用：最佳实践',
    excerpt: '学习如何使用Docker高效地部署和扩展你的Node.js应用。',
    date: '2024-03-22',
    category: 'DevOps',
    readTime: '12分钟',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 4,
    title: 'GraphQL vs REST：何时选择哪个API架构？',
    excerpt: '比较GraphQL和REST API的优缺点，了解如何为你的项目选择最佳方案。',
    date: '2024-03-25',
    category: 'API设计',
    readTime: '9分钟',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
  },
  {
    id: 5,
    title: 'Python数据科学：从零开始构建机器学习模型',
    excerpt: '使用Python和流行的数据科学库，学习如何构建和训练机器学习模型。',
    date: '2024-03-28',
    category: '机器学习',
    readTime: '15分钟',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80'
  }
];

const BlogList: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">最新技术博文</h2>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogList;