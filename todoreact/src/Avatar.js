import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import './Avatar.css';

class Avatar extends Component {
    render() {
        return (
          <Image className="avatar" src="https://cdn-images-1.medium.com/fit/c/200/200/1*qSozwB2ZQYFRd07N7rLzGw.jpeg" circle />
        );
    }
}

export default Avatar;

