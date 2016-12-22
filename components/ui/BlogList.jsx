import React from 'react';
import ReactDOM from 'react-dom';

import BlogItem from './BlogItem';

const BlogList = ({ list }) => (
  <div>
    {list.map(({text, ...others}, index) => (
      <BlogItem key={index} {...others}>{text}</BlogItem>
    ))}
  </div>
);

export default BlogList;
