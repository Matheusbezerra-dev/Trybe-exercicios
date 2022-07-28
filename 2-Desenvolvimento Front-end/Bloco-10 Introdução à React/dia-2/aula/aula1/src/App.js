import React, { Component } from 'react';
import staringCat from './cat-2083492_1280.jpg';
import Image from './image';

class App extends Component {
  render() {
    return (
      <div>
        <Image source= 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alt="Cute cat staring" />
      </div>      
    );
  }
}

export default App;
