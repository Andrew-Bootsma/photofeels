import React, { Component } from 'react';
import ImageItem from './ImageItem';

class Images extends Component {
  state = {
    images: [
      {
        id: '1',
        name: 'James Example',
        profile_image: {
          small:
            'http://vignette1.wikia.nocookie.net/marveldatabase/images/d/d7/Iron_Man_Armor_Model_2_MK_I.jpg/revision/latest/scale-to-width-down/120?cb=20170122055205'
        },
        links: {
          html: 'https://google.com'
        }
      },
      {
        id: '2',
        name: 'Andrew Example',
        profile_image: {
          small:
            'http://vignette3.wikia.nocookie.net/marvelvscapcom/images/b/be/Thor-mvc1.gif/revision/latest?cb=20141212210530'
        },
        links: {
          html: 'https://andrewbootsma.com'
        }
      },
      {
        id: '3',
        name: 'Josh Example',
        profile_image: {
          small:
            'https://www.spriters-resource.com/resources/sheet_icons/63/66590.png'
        },
        links: {
          html: 'https://duckduckgo.com'
        }
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.images.map(image => (
          <ImageItem key={image.id} image={image} />
        ))}
      </div>
    );
  }
}

export default Images;
