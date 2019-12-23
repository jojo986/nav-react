import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <img src={this.gallery.thumbnailUrl} />
        )
    }
}



// const Image = ({gallery}) => (
   
//       <img src={gallery.thumbnailUrl} />
    
//   );

export default Image;