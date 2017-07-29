import React, { Component } from "react";
import "../styles/App.css";
import "../styles/LikeBanner.css";

class LikeBanner extends Component {
  render() {
    return (
      <div className="LikeBanner col-12 myheader">
        <div className="buttondiv">
          <button className="button">Favorite</button>
        </div>

        <div className="likeHeaders">
          <div className="h3">Like that item?</div>
          <div className="h5">Add it to your favorites to revisit it later</div>
        </div>
      </div>
    );
  }
}

export default LikeBanner;
