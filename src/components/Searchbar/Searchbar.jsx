import React, { Component } from 'react';
 import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleChange = e => {
    this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchImage.trim() === '') {
      toast.error('Please enter valid search');
      return;
    }
    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
