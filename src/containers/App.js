import React, {Component} from 'react';
import Header from '../components/Header';
import LHSMenu from '../components/LHSMenu';
import getSources from '../utils/getSources';
import getArticles from '../utils/getArticles';
import HandleArticle from './SourceArticle';
import '../css/App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      articles: [],
      source: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    getSources().then((response) => {
      this.setState({items: response.data.sources})
    });
  }
  handleClick(source, e){
    e.preventDefault();
    getArticles(source.id).then((response) => {
      this.setState({articles: response.data.articles, source: source.name})
    });
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container-fluid row">
          <div className="col-md-2">
            <LHSMenu sources={this.state.items} handleClick={this.handleClick}/>
          </div>
          <div className="col-md-9" data-spy="affix" data-offset-top="97">
            <HandleArticle articles={this.state.articles} source={this.state.source}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
