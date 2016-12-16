import React from 'react';
import TextBox from './TextBox';
import Image from './Image';

const BlogItem = ({ image, children }) => (
  <div style={{clear: 'left', paddingTop: 10}}>
    <Image src={image} height="64" style={{marginRight:10, float: "left"}}/>
    <TextBox>{children}</TextBox>
  </div>
);

export default BlogItem;