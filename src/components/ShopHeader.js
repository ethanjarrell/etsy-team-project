import React, { Component } from 'react';
import '../styles/App.css';
import "../styles/ShopHeader.css";

class ShopHeader extends Component {
  constructor() {
    super();

    this.state = {
      results: {},
      shop_name: '',
      shop_url: '',
      shop_picurl: '',
      shop_listings: [],
      shop_listings_count: ''
    };
  }

  componentDidMount() {
    fetch(
      'https://openapi.etsy.com/v2/listings/' + this.props.listingId + '?includes=Shop/Listings/MainImage&api_key=nrfza0h31bu4g5biq6bq6g4c'
    )
      .then(response => response.json())
      .then(response => {
        let tempListings = [];
        for (let i = 0; tempListings.length < 4; i++) {
          if (response.results[0].Shop.Listings[i].MainImage) {
            tempListings.push(response.results[0].Shop.Listings[i]);
          }
        }
        let shopListingsThumbs = tempListings.map(listing => {
          return (
            <div className="shopheader-listings-thumb" key={listing.listing_id}>
              <a href={listing.url}>
                <img
                  src={listing.MainImage.url_75x75}
                  className="shopheader-listings-thumb-pic"
                  alt="stuff"
                />
              </a>
            </div>
          );
        });
        this.setState({
          results: response.results,
          shop_name: response.results[0].Shop.shop_name,
          shop_url: response.results[0].Shop.url,
          shop_picurl: response.results[0].Shop.icon_url_fullxfull,
          shop_listings: shopListingsThumbs,
          shop_listings_count: response.results[0].Shop.listing_active_count
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="ShopHeader row col-10">
        <a href={this.state.shop_url} className="col-1">
          <img
            src={this.state.shop_picurl}
            alt="stuff"
            className="shopheader-shop-pic"
          />
        </a>
        <div id="shopname" className="col-1 shopname">
          <a href={this.state.shop_url}>
            {this.state.shop_name}
          </a>
          <button>Favorite shop</button>
        </div>
        <div className="col-3" />
        {this.state.shop_listings}
        <a href={this.state.shop_url}>
          <div className="shopheader-listings-thumb">
            <h2>{this.state.shop_listings_count}</h2> items
          </div>
        </a>
      </div>
    );
  }
}

export default ShopHeader;
