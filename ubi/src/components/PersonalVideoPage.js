import React, { Component } from 'react';
import { getPersonalVideos } from "../actions/get";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Image, Card, Icon} from 'semantic-ui-react'

class PersonalVideoPage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }

  componentWillMount(){
    console.log(this.props.uid)
    this.props.getPersonalVideos(this.props.uid)
  }

  handleClick = (vid) => this.props.history.push("/videos/"+vid)

  render() {
    var videos = this.props.pvideos;
    console.log(videos)

    return (
      <div>
        <Card.Group itemsPerRow={4}>
          {videos.map((m) => (
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

PersonalVideoPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getPersonalVideos: PropTypes.func.isRequired
}

const mapStateToProps = State => ({
  pvideos: State.video.pvideos
});

export default connect(mapStateToProps, { getPersonalVideos })(PersonalVideoPage);
