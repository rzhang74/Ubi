import React, { Component } from 'react'
import { Image, List, Button } from 'semantic-ui-react'
import { getFollower } from "../actions/get";
import api from "../api";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Followerpage extends Component {
  token = "66a56026b02761c8da764d80e2001ec58e0dd32f";

  componentWillMount(){
    this.props.getFollower(this.token)
  }

  clickHandler = (uid) =>{
    console.log(uid)
    api.user.follow(this.token, uid)
  }

  render() {
    var follower = this.props.follower;
    console.log(follower)

    return (
      <List animated verticalAlign='middle' size='large'>
        {follower.map((f) => (
          <List.Item>
            <List.Content floated='right'>
              <Button key={f.id}  onClick={() => this.clickHandler(f.id)}>Follow</Button>
            </List.Content>
            <Image avatar src={process.env.PUBLIC_URL+'/avatar/medium/b.png'} />
            <List.Content>
              <List.Header>{f.email}</List.Header>
            </List.Content>
          </List.Item>
        ))}
        {follower.length === 0 && <div>This dude has no friends.</div>}
      </List>
    )
  }
}

Followerpage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getFollower: PropTypes.func.isRequired
}

const mapStateToProps = State => ({
  follower: State.user.follower,
  token: State.user.token 
});

export default connect(mapStateToProps, { getFollower })(Followerpage);
