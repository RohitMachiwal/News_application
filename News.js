import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
      }
      static defaultProps = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category: PropTypes.string
      }

    constructor() {
        super();
        console.log('hello I am cunstuctor from News component');
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0657baada278479db1736cec3c961a2e&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0657baada278479db1736cec3c961a2e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

    handleNextClick = async () => {
        if (this.state.page +1> Math.ceil(this.state.totalResults/this.props.pageSize)) {
 
        }

        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0657baada278479db1736cec3c961a2e&page=${this.state.page + 1} &pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

    }

    render() {
        return (
            <div className='container my-3'  >
                <h2 className='text-center' style={{margin:'35px 0px'}}>News-Top Headlines</h2>
               
                <div className="row">

                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} newsUrl={element.url} />

                        </div>
                    })}




                </div>
                <div className="container my-2 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} class="btn btn-dark">&larr; Previous</button>
                    &nbsp;&nbsp;<button disabled={this.state.page +1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-success">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
