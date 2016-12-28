import React from 'react';
import '../stylesheets/main.scss';

let App = React.createClass({
  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
});

export default App;

