import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <article>
                <figure><img src={this.props.gallery.thumbnailUrl} /></figure>
                <h2>{this.props.gallery.title}</h2>
            </article>
        )
    }
}



// const Image = ({gallery}) => (
   
//       <img src={gallery.thumbnailUrl} />
    
//   );

export default Image;