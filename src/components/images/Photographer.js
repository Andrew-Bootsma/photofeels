import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      location,
      profile_image,
      bio,
      portfolio_url,
      username,
      links,
      followers_count,
      following_count,
      total_photos,
      total_collections
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/'>Back To Search</Link>
        <img src={profile_image ? profile_image.large : ''} alt='' />
        <h1>{name}</h1>
        {location && <p>Location: {location}</p>}
        {bio && (
          <Fragment>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Fragment>
        )}
        <a href={links ? links.html : ''}>Visit Unsplash Profile</a>
        <ul>
          <li>
            <strong>Username: </strong> {username}
          </li>
          <li>
            {portfolio_url && (
              <Fragment>
                <strong>Portfolio: </strong>{' '}
                <a href={portfolio_url}>Click here</a>
              </Fragment>
            )}
          </li>
        </ul>
        <div>Followers: {followers_count}</div>
        <div>Following: {following_count}</div>
        <div>Photos: {total_photos}</div>
        <div>Collections: {total_collections}</div>
      </Fragment>
    );
  }
}

export default User;
