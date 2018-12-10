import React, { Component } from 'react';
import { getMusic } from "../actions/get";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Image, Card, Icon} from 'semantic-ui-react'

class Musicpage extends Component {
  componentWillMount(){
    this.props.getMusic()
  }

  handleClick = (vid) => this.props.history.push("/videos/"+vid)

  render() {
    var music = this.props.music;

    return (
      <div>
        <Card.Group itemsPerRow={5}>
          {music.map((m) => (
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

Musicpage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getMusic: PropTypes.func.isRequired
}

const mapStateToProps = State => ({
  music: State.video.music
});

export default connect(mapStateToProps, { getMusic })(Musicpage);