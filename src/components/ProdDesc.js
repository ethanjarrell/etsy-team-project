import React, {Component} from "react";
import "../styles/App.css";
import "../styles/ProdDesc.css";

class ProdDesc extends Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
		this.toggle = this.toggle.bind(this);
		this.state = {
			results: {},
			prod_desc: "",
			pane: "",
			reviews: '',
			shipping: '',
			tabactive: 'nav-link active',
			tabpassive: 'nav-link',
			tab1: 'nav-link active',
			tab2: 'nav-link',
			tab3: 'nav-link',
			reviewstab: "Reviews",
			feedbackstar: '',
			feedback_score: ''
		};
	}
	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({activeTab: tab});
		}
	}
	componentDidMount() {
		console.log("now doing the didmount.");
		fetch("https://openapi.etsy.com/v2/listings/" + this.props.listingId + "?includes=Shop/User/Feedback,Shop/Listings/MainImage&api_key=nrfza0h31bu4g5biq6bq6g4c").then(response => response.json()).then(response => {
			this.setState({results: response.results});

			this.setState({prod_desc: response.results[0].description});
			let shippingCard = <div className='text-center'>
				<h4>Payment Methods</h4>

				<div className='text-left'>

					<img src={'paypal.jpg'}/>
				</div>
				<h4>Ready to Ship in 6-8 weeks</h4>
				<h4>Shipping Costs</h4>
				<div className='row text-left'>
					<div className='col-4'>
						<p>Shipping to</p>
						<input type='dropdown'></input>
					</div>
					<div className='col-4'>
						<p>Zip or Postal Code</p>
						<input type='text'></input>
					</div>
					<div className='col-4'>
						<p>Shipping Cost</p>
						<p>Get Shipping Cost</p>
					</div>
				</div>
				<div className='text-left'>
					<div className='row'>
						<div className='col-3'>
							Payment
						</div>
						<div className='col-9'>
							{response.results[0].Shop.policy_payment}
						</div>
					</div>
					<div className='row'>
						<div className='col-3'>
							Shipping
						</div>
						<div className='col-9'>
							{response.results[0].Shop.policy_shipping}
						</div>
					</div>
					<div className='row'>
						<div className='col-3'>
							Refunds and Exchanges
						</div>
						<div className='col-9'>
							<div>
								{response.results[0].Shop.policy_refunds}
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-3'>
							Additional Policies and FAQs
						</div>
						<div className='col-9'>
							<div>
								{response.results[0].Shop.policy_additional}
							</div>
						</div>
					</div>
				</div>
			</div>;
			this.setState({shipping: shippingCard});
			this.setState({pane: this.state.prod_desc});
			console.log(this.state.pane);

			this.setState({feedback_score: response.results[0].Shop.User.feedback_info.score});

			if (this.state.feedback_score > 89) {
				this.setState({
					feedbackstar: <div>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
						</div>
				})
			} else if (this.state.feedback_score  > 69) {
				this.setState({
					feedbackstar: <div>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star-o'></i>
						</div>
				})
			} else if (this.state.feedback_score  > 49) {
				this.setState({
					feedbackstar: <div>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star'></i>
							<i className='fa fa-star-o'></i>
							<i className='fa fa-star-o'></i>
						</div>
				})
			} else if (this.state.feedback_score  > 29) {
					this.setState({
						feedbackstar: <div>
								<i className='fa fa-star'></i>
								<i className='fa fa-star'></i>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
							</div>
					})
				} else if (this.state.feedback_score  > 9) {
					this.setState({
						feedbackstar: <div>
								<i className='fa fa-star'></i>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
							</div>
					})
				} else {
					this.setState({
						feedbackstar: <div>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
								<i className='fa fa-star-o'></i>
							</div>
					})
				}
				return response
			}).then((response) => {

				this.setState({feedback_count: response.results[0].Shop.User.feedback_info.count, feedback_score: this.state.feedbackstar});
				fetch("https://openapi.etsy.com/v2/users/" + this.state.results[0].user_id + "/feedback/from-buyers?api_key=nrfza0h31bu4g5biq6bq6g4c")
				.then(response => response.json()).then(response => {
					console.log(response);
					let reviewCards = response.results.map(reviewCard => {
						return (
							<div className="card" key={reviewCard.feedback_id}>
								<img className='useravatar' src={'useravatar.png'}/>
								{reviewCard.message}
							</div>
						)
					})
					this.setState({reviews: reviewCards})
				})
			});
		}
		onClick(event) {
			console.log(event.target.value);
			console.log("here1");
			if (event.target.value === "1") {
				console.log("here2");
				this.setState({pane: this.state.prod_desc, tab1: this.state.tabactive, tab2: this.state.tabpassive, tab3: this.state.tabpassive});
			}
			if (event.target.value === "2") {
				console.log("here2");
				this.setState({pane: this.state.reviews, tab1: this.state.tabpassive, tab2: this.state.tabactive, tab3: this.state.tabpassive});
			}
			if (event.target.value === "3") {
				console.log("here2");
				this.setState({pane: this.state.shipping, tab1: this.state.tabpassive, tab2: this.state.tabpassive, tab3: this.state.tabactive});
			}
		}
		render() {
			console.log("The initial render happened.");
			return (
				<div className="ProdDesc text-left">
					<ul className="nav nav-tabs justify-content-center">
						<li className="nav-item">
							<button className={this.state.tab1} href="#" onClick={this.onClick} value='1'>Item details</button>
						</li>
						<li className="nav-item">
							<button className={this.state.tab2} href="#" onClick={this.onClick} value='2'>
								<span>{this.state.feedbackstar} ({this.state.feedback_count})</span>
								</button>
						</li>
						<li className="nav-item">
							<button className={this.state.tab3} href="#" onClick={this.onClick} value='3'>Shipping</button>
						</li>
					</ul>
					<span>{this.state.pane}</span>
				</div>
			)
		}
	}

	export default ProdDesc
