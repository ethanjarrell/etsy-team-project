import React, {Component} from "react";
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import "../styles/App.css";


class ProductImage extends Component {
  constructor() {
    super();
    this.state = {
      pictures: []
    }
  }
  componentDidMount() {
    // here's the fetch we need for this section
    fetch('https://openapi.etsy.com/v2/listings/' + this.props.listingId + '/images?fields=url_570xN,listing_image_id&api_key=nrfza0h31bu4g5biq6bq6g4c').then(response => {
      return response.json();
    }).then(data => {
      console.log(data.results);
      let pictures = data.results.map((pic) => {
        return (

          <div key={pic.listing_image_id} style={{
            height: 570, width:770
          }} >
            <img src={pic.url_570xN} className=""/>
          </div>

        )
      })
      console.log(pictures);
      this.setState({pictures: pictures});
    });
  }

  render() {
    return (
      <div style={{
        height: 570,

      }} >
        <React_Bootstrap_Carousel animation={true} onSelect={this.onSelect} className="carousel-fade">
          {this.state.pictures}
        </React_Bootstrap_Carousel>
      </div>

    )
  }
};

export default ProductImage;
