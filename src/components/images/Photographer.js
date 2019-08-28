import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Photos from '../photos/Photos';
import { Link } from 'react-router-dom';
import UnsplashContext from '../../context/unsplash/unsplashContext';

const Photographer = ({ match }) => {
  const unsplashContext = useContext(UnsplashContext);

  const {
    getPhotographer,
    loading,
    photographer,
    photos,
    getPhotographerPhotos
  } = unsplashContext;

  useEffect(() => {
    getPhotographer(match.params.username);
    getPhotographerPhotos(match.params.username);
    // eslint-disable-next-line
  }, []);

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
  } = photographer;

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

      <Photos photos={photos} />
    </Fragment>
  );
};

export default Photographer;
