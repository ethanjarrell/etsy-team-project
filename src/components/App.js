import React, { Component } from "react";
import "../styles/App.css";

import ShopHeader from './ShopHeader'
import LikeBanner from './LikeBanner'
import ProductImage from './ProductImage'
import PurchaseInfo from './PurchaseInfo'
import ProdDesc from './ProdDesc'
import ShopSidebar from './ShopSidebar'

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: {}
    }
  }
  // componentDidMount() {
  //   fetch('https://openapi.etsy.com/v2/listings/175112598?includes=Shop/Listings/MainImage&api_key=nrfza0h31bu4g5biq6bq6g4c').then(response => response.json()).then(response => {
  //     this.setState({
  //       results: response.results
  //     });
  //     console.log(this.state.results);
  //   })
  // }
  render() {
    return (
      <div className="App">
				<div className='row justify-content-center'>
					<div className='col-10'>
						<ShopHeader />
					</div>
				</div>
				<div className = 'row justify-content-center'>
					<div className='col-6'>
		      	<LikeBanner />
						<ProductImage />
						<ProdDesc />
					</div>
					<div className='col-4'>
						<PurchaseInfo />
					  <ShopSidebar />
					</div>
				</div>
			</div>
    );
  }
}

export default App;
