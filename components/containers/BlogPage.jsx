import React from 'react';
import ReactDOM from 'react-dom';

import BlogList from '../ui/BlogList';

const blogPosts = [
  { image: "https://facebook.github.io/react/img/logo.svg", text: "Это значок Реакта (хотя он и не совсем фрэймворк)" },
  { image: "https://angular.io/resources/images/logos/angular2/angular.svg", text: "А это конкурирующий фрэймворк" },
  { image: "http://aurelia.io/images/main-logo.svg", text: "А это еще один фрэймворк" },
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { blogPosts };
  }
  
  render() {
    const { blogPosts} = this.state;
    return React.createElement(BlogList, { list: blogPosts });
  }
}

export default BlogPage;