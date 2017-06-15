import React from 'react';
import dateformat from 'dateformat';
// import PropTypes from 'prop-types';
import {Card, CardTitle, CardMedia, CardText} from 'react-toolbox/lib/card';
import Chip from 'react-toolbox/lib/chip';

const Article = (props) =>{
  const articlesList = props.articles.map((article) => {
    const publishDate = dateformat(article.publishedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    const subtitle = `${article.author} on ${publishDate}`
    return(
      <li key={article.url} className="nav-item">
        <Card style={{width: '700px'}}>
          <CardTitle
            title={article.title}
            subtitle={subtitle}
          />
          <CardMedia
            aspectRatio="wide"
            image="https://placeimg.com/800/450/nature"
          />
          <CardText><i>{article.description}</i></CardText>
          <a href={article.url}>Read the story</a>
          <hr></hr>
        </Card>
      </li>
    )
  });
  if (props.articles.length === 0) {
    const title = `${props.articles.length} articles`
    return (
      <div>
        <Chip>{title}</Chip>
        <Card style={{width: '700px'}}>
          <CardTitle
            title="Load articles by clicking the sources on your left"
            subtitle="Click 'Read the story' to read an article"
          />
        </Card>
      </div>
    )
  } else {
    const title = `${props.articles.length} articles fetched for ${props.source}`
    return (
      <div>
        <Chip>{title}</Chip>
        <ul className="nav flex-column">
          {articlesList}
        </ul>
      </div>
    )
  }

}

// Article.propTypes = {
//   sources: PropTypes.array,
//   handleClick: PropTypes.func
// }
export default Article;
