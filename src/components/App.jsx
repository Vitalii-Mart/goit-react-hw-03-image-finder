import React, { Component } from 'react';

class App extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=35916807-4b4569ea51a2cf76aabe9d625&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(image => this.setState({ image }));
  }

  render() {
    return <div>{this.state.image && <div>тут картинка</div>}</div>;
  }
}

export default App;
