import React from 'react';
import '../stylesheets/main.scss';

// app component
let App = React.createClass({
  // render
  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
});

export default App;

