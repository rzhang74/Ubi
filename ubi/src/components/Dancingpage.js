import React, { Component } from 'react';
import { getDancing } from "../actions/get";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Image, Card, Icon} from 'semantic-ui-react'

class Dancingpage extends Component {
  componentWillMount(){
    this.props.getDancing()
  }

  handleClick = (vid) => this.props.history.push("/videos/"+vid)

  render() {
    var dancing = this.props.dancing;

    return (
      <div>
        <Card.Group itemsPerRow={5}>
          {dancing.map((m) => (
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

Dancingpage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getDancing: PropTypes.func.isRequired
}

const mapStateToProps = State => ({
  dancing: State.video.dancing
});

export default connect(mapStateToProps, { getDancing })(Dancingpage);
