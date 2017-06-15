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
        <div className="container-fluid">
          <div className="row">
            <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
              <LHSMenu sources={this.state.items} handleClick={this.handleClick}/>
            </nav>
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
              <HandleArticle articles={this.state.articles} source={this.state.source}/>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
