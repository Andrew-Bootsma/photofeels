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
      <div className='photographer'>
        <span className='photographer__back'>
          <Link className='btn photographer__back-btn' to='/'>
            Back To Search
          </Link>
        </span>
        <img
          className='photographer__profile-img'
          src={profile_image ? profile_image.large : ''}
          alt=''
        />
        <span className='photographer__details'>
          <span className='photographer__details-info'>
            <h1>{name}</h1>
            {location && (
              <p>
                <strong>Location: </strong>
                {location}
              </p>
            )}
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a className='btn-inline' href={links ? links.html : ''}>
              Visit Unsplash Profile
            </a>
            <ul>
              <li>
                <strong>Username: </strong> {username}
              </li>
              {portfolio_url && (
                <li>
                  <strong>Portfolio: </strong>{' '}
                  <a className='btn-inline' href={portfolio_url}>
                    Click here
                  </a>
                </li>
              )}
            </ul>
            <div>
              <strong>Followers: </strong>
              {followers_count}
            </div>
            <div>
              <strong>Following: </strong>
              {following_count}
            </div>
            <div>
              <strong>Photos: </strong>
              {total_photos}
            </div>
            <div>
              <strong>Collections: </strong>
              {total_collections}
            </div>
          </span>
        </span>
      </div>

      <Photos photos={photos} />
    </Fragment>
  );
};

export default Photographer;
