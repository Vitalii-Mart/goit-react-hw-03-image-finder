import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    searchImage: '',
  };

  formSubmit = searchImage => {
    this.setState({ searchImage });
  };

  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=35916807-4b4569ea51a2cf76aabe9d625&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(image => this.setState({ image }));
  // }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ImageGallery searchImage={this.state.searchImage} />
      </div>
    );
  }
}

export default App;
