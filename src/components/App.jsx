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
