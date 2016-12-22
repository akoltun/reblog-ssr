import React from 'react';
import ReactDOM from 'react-dom';

import BlogList from '../ui/BlogList';

const blogPosts = [
  {
    text: "Это значок Реакта (хотя он и не совсем фрэймворк)"
    ,image: "https://facebook.github.io/react/img/logo.svg"
    ,info: {
      author: "Марк Цукерберг"
    }
  },
  {
    text: "А это конкурирующий фрэймворк"
    ,image: "https://angular.io/resources/images/logos/angular2/angular.svg"
    ,info: {
      author: "Сергей Брин"
    }
  },
  {
    text: "А это еще один фрэймворк"
    ,image: "http://aurelia.io/images/main-logo.svg"
    ,info: {
      author: "Роб Эйзенберг"
    }
  },
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
