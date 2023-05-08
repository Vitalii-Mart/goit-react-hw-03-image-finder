import React, { Component } from 'react';

class ImageGallery extends Component {
    state = {
      
    };
    componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImage !== this.props.searchImage) {
        console.log('prevProps.searchImage', prevProps.searchImage);
        console.log('this.props.searchImage', this.props.searchImage);
        console.log('Ismenil');
    }    
    }

  render() {
    return (
      <>
            <ul>
                <p>{this.props.searchImage }</p>    
        </ul>
      </>
    );
  }
}

export default ImageGallery;
