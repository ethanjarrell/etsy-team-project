import React, { Component } from 'react';
import '../styles/App.css';

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
      'https://openapi.etsy.com/v2/listings/175112598?includes=Shop/Listings/MainImage&api_key=nrfza0h31bu4g5biq6bq6g4c'
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
                  src={listing.MainImage.url_fullxfull}
                  className="shopheader-listings-thumb-pic"
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
      <div className="ShopHeader col-12 bg-faded">
        <a href={this.state.shop_url}>
          <img src={this.state.shop_picurl} className="shopheader-shop-pic" />
        </a>
        <a href={this.state.shop_url}>
          {this.state.shop_name}
        </a>
        {this.state.shop_listings}
        <a href={this.state.shop_url}>
          <div className="shopheader-listings-thumb">
            {this.state.shop_listings_count} items
          </div>
        </a>
      </div>
    );
  }
}

export default ShopHeader;
