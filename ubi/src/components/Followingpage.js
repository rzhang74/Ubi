import React, { Component } from 'react'
import { Image, List, Button } from 'semantic-ui-react'
import { getFollowing } from "../actions/get";
import api from "../api";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Followingpage extends Component {
  token = "66a56026b02761c8da764d80e2001ec58e0dd32f";

  componentWillMount(){
    console.log(this.props.token)
    this.props.getFollowing(this.token)
  }

  clickHandler = (uid) =>{
    console.log(uid)
    api.user.unfollow(this.token, uid)
  }

  render() {
    var following = this.props.following;
    console.log(following)

    return (
      <List animated verticalAlign='middle' size='large'>
        {following.map((f) => (
          <List.Item>
            <List.Content floated='right'>
              <Button key={f.id} onClick={() => this.clickHandler(f.id)}>unFollow</Button>
            </List.Content>
            <Image avatar src={process.env.PUBLIC_URL+'/avatar/medium/b.png'} />
            <List.Content>
              <List.Header>{f.email}</List.Header>
            </List.Content>
          </List.Item>
        ))}
        {following.length === 0 && <div>This dude has no interest.</div>}
      </List>
    )
  }
}

Followingpage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  getFollowing: PropTypes.func.isRequired
}

const mapStateToProps = State => ({
  following: State.user.following,
  token: State.user.token 
});

export default connect(mapStateToProps, {getFollowing})(Followingpage);
