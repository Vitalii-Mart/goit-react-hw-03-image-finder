import React, { Component } from 'react';

class ImageGallery extends Component {
    state = {
      status: 'idle'
    };
    componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImage !== this.props.searchImage) {
     this.setState({ status: 'pending', })
        fetch(
          'https://pixabay.com/api/?q=cat&page=1&key=35916807-4b4569ea51a2cf76aabe9d625&image_type=photo&orientation=horizontal&per_page=12'
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(new Error(`No image ${this.props.searchImage}`))
          })


          .then(image => this.setState({ image, status: 'resolved' }))
          .catch(error => this.setState({error, status: 'rejected'}))
          
      
    
    }    
    }

  render() {
    const {status, error} = this.state;

    if (status === 'idle') {
      return <div>Vedite name</div>
    }
    if(status === 'pending'){
      return <div>Loading</div>
    }
    if(status === 'rejected'){
      return <h1>{error.message}</h1>
    }
    if(status === 'resolved'){
      return (
        <>
              <ul>
                  <p>{this.props.searchImage }</p>    
          </ul>
        </>
      );
    }
    
  }
}

export default ImageGallery;
