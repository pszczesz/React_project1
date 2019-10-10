'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: 0 };
  }

  render() {
    this.state.liked += 1;
    // if (this.state.liked) {
    //   return 'You liked this.';
    // }

    return e(
      'button',
      { onClick: () => this.setState({  }) },
      'Like '+this.state.liked
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);