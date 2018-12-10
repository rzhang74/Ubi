import React, { Component } from 'react';
import { getMovies } from "../actions/get";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Image, Card, Icon} from 'semantic-ui-react'
class Moviespage extends Component {
  componentWillMount(){
    this.props.getMovies()
  }

  handleClick = (vid) => this.props.history.push("/videos/"+vid)

  render() {
    var movies = this.props.movies;

    return (
      <div>
        <Card.Group itemsPerRow={5}>
          {movies.map((m) => (
            // return (
              <Card id={m.vid} style={{"boxShadow":"0 0 0 0"}} onClick={() => this.handleClick(m.vid)}>
                <Image style={{"height":"130px", "object-fit": "cover"}} src= {process.env.PUBLIC_URL+m.thumbnail_address} />
                <Card.Content>
                  <Card.Header>{m.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{m.user.email}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra id='fuckthis'>
                  <a>
                    <Icon name='youtube play' />
                    22 
                  </a>
                </Card.Content>
              </Card>
            // );
          ))}
        </Card.Group>
      </div>
    )
  }
}

Moviespage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getMovies: PropTypes.func.isRequired
}

const mapStateToProps = State => ({
  movies: State.video.movies
});

export default connect(mapStateToProps, { getMovies })(Moviespage);