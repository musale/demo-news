import React, {Component} from 'react';
import Article from '../components/Article'
class HandleArticle extends Component {
  render() {
    return (
      <Article articles={this.props.articles} source={this.props.source}></Article>
    );
  }
}

export default HandleArticle;
