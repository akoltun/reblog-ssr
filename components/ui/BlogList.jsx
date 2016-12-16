import React from 'react';
import ReactDOM from 'react-dom';

import BlogItem from './BlogItem';

const BlogList = ({ list }) => (
  <div>
    {list.map((item, index) => (
      <BlogItem key={index} image={item.image}>{item.text}</BlogItem>
    ))}
  </div>
);

export default BlogList;