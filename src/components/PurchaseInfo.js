import React, { Component } from "react";
import "../styles/PurchaseInfo.css";

class PurchaseInfo extends Component {
  constructor(){
    super();
    this.state = {
      results: {},
      title: '',
      price: '',
      // quantity: 6,
      materials: [],
      Inventory: [],
      Products:[]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://openapi.etsy.com/v2/listings/175112598?includes=Inventory,ShippingInfo&api_key=nrfza0h31bu4g5biq6bq6g4c')
      .then(response => response.json())
      .then(response => {

        let products = response.results[0].Inventory[0].products;

        let mapInventory = products.map(product => {
          return (
            <option value={product.offerings[0].price.currency_formatted_raw}
              key={product.product_id}>{product.property_values[0].values}
              - {product.offerings[0].price.currency_formatted_raw}</option>
          )
        });

        this.setState({
          results: response.results,
          title: response.results[0].title,
          price: response.results[0].price,
          materials: response.results[0].materials,
          Inventory: response.results[0].Inventory,
          products: response.results[0].Inventory[0].products,
          propertyValues: response.results[0].Inventory[0].products[0].property_values,
          propertyName: response.results[0].Inventory[0].products[0].property_values[0].property_name,
          mapInventory: mapInventory

        });
      });
  }


  handleSubmit(e) {
    console.log(e);
    console.log("handleSubmit!");
  }

  handleChange(e) {
    console.log(e);
    console.log("handleChange!");
    console.log(this.value);
    this.setState({price: e.target.value});
  }


  render() {
    console.log(this.state);
    return (
      <div id="DIV_1">
  <div id="DIV_2">
    <div id="DIV_3">
      <h1 id="H1_4">
				<span id="SPAN_5">Cat Battle Armor</span>
			</h1>
      <button id="BUTTON_6">
        Ask a question
      </button>
      <div id="DIV_7">
        <div id="DIV_8">
          <span id="SPAN_9">${this.state.price}+</span>
          <meta content="USD" id="META_10" />
          <meta content="600.00" id="META_11" />
          <meta content="in_stock" id="META_12" /><span id="SPAN_13"></span>
          <div id="DIV_14">
          </div>
        </div>
        <div id="DIV_15">
        </div>
        <div id="DIV_16">
          <div id="DIV_17">

            <label for="inventory-variation-select-0" id="LABEL_18">
              {this.state.propertyName}
            </label> <span id="SPAN_19">
							<select id="SELECT_20" name="listing_variation_id" onChange={this.handleChange}>

								<option id="OPTION_21">
									Select an option
								</option>
								{this.state.mapInventory}
							</select></span>
            <div id="DIV_24">
              Please select an option
            </div>
          </div>
          <div id="DIV_25">

            <label for="inventory-select-quantity" id="LABEL_26">
              Quantity
            </label> <span id="SPAN_27">
							<select id="SELECT_28">

								<option value="1" id="OPTION_29">
									1
								</option>
								<option value="2" id="OPTION_30">
									2
								</option>
								<option value="3" id="OPTION_31">
									3
								</option>
								<option value="4" id="OPTION_32">
									4
								</option>
								<option value="5" id="OPTION_33">
									5
								</option>
							</select></span>
            <div id="DIV_34">
              Please select a quantity
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="DIV_35">
      <div id="DIV_36">
      </div>
    </div>
    <div id="DIV_37">
      <div id="DIV_38">
        <form action="/cart/listing.php" method="post" id="FORM_39">
          <input type="hidden" name="listing_id" value="175112598" id="INPUT_40" />
          <input type="hidden" name="listing_inventory_id" id="INPUT_41" />
          <input type="hidden" name="shipping_method_id" id="INPUT_42" />
          <input type="hidden" name="quantity" value="1" id="INPUT_43" />
          <input type="hidden" name="_nnc" value="3:1501182500:bD7KFiev-KRLTkb7LA_xVIZWyOeC:e390fe96872940260375ff989a6cfa6cedf8703715c13d2eb84c757b0f5ed454" id="INPUT_44" />
          <button type="submit" id="BUTTON_45">
            Add to cart
          </button>
          <div id="DIV_46"></div>
          <div id="DIV_47">
            <div id="DIV_48">
            </div>
          </div>
          <div id="DIV_49">
            <div id="DIV_50">
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="DIV_51">
      <div id="DIV_52">
        <div id="DIV_53">
          <span id="SPAN_54">
          </span>
          <svg id="svg_55">

            <defs id="defs_57">
              <rect id="rect_58">
              </rect>
            </defs>
            <clippath id="clipPath_59">
              <use id="use_60">
              </use>
            </clippath>
            <g id="g_61">
              <path id="path_62">
              </path>
              <path id="path_63">
              </path>
            </g>
            <rect id="rect_64">
            </rect>
          </svg>
        </div>
        <div id="DIV_65">
          <h2 id="H2_66">
							Etsy Purchase Guarantee
						</h2>
          <p id="P_67">
            Get what you ordered or your money back.
            <br id="BR_68" /> <a href="/etsyguarantee" id="A_69">Learn more</a>
          </p>
        </div>
      </div>
    </div>
    <hr id="HR_70" />
    <div id="DIV_71">
      <ul id="UL_72">
      </ul>
    </div>
    <div id="DIV_73">
      <h3 id="H3_74">
					Overview
				</h3>
      <ul id="UL_75">
        <li id="LI_76">
          Handmade item
        </li>
        <li id="LI_77">
          Materials: <span id="SPAN_78">leather, waxed cord, nickel silver hardware, elastic</span>
        </li>
        <li id="LI_79">
          Only ships within <span id="SPAN_80">United States</span>.
        </li>
        <li id="LI_81">
          Feedback: <a href="#reviews" id="A_82">26 reviews</a>
        </li>
        <li id="LI_83">
          Favorited by: <a href="/listing/175112598/cat-battle-armor/favoriters?ref=l2-collection-count" id="A_84">6036 people</a>
        </li>
      </ul>
    </div>
    <ul id="UL_85">
      <li id="LI_86">
        <label id="LABEL_93">
          This shop accepts Etsy gift cards
        </label>
      </li>
    </ul>
  </div>


  <div id="DIV_94">
    <div id="DIV_95">
      <div id="DIV_96">

        <button type="button" id="BUTTON_97">
          <span id="SPAN_98"></span> <span id="SPAN_99">Favorite</span> <span id="SPAN_100">Favorited</span>
        </button>
      </div>
      <div id="DIV_101">

        <button type="button" id="BUTTON_102">
          <span id="SPAN_103"></span> <span id="SPAN_104">Add to</span> <span id="SPAN_105">Added</span><span id="SPAN_106"></span>
        </button>
      </div>
    </div>
    <div id="DIV_107">
      <span id="SPAN_108"> <a href="/share?network=_facebook&amp;url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F175112598%2Fcat-battle-armor%3Futm_source%3DFacebook%26utm_medium%3DPageTools%26utm_campaign%3DShare%26utm_term%3Dso.lp.d.v2" id="A_109"><span id="SPAN_110"></span>      <span id="SPAN_111">Share</span></a>
      </span> <span id="SPAN_112"> <a href="/share?network=_pinterest&amp;url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F175112598%2Fcat-battle-armor%3Futm_source%3DPinterest%26utm_medium%3DPageTools%26utm_campaign%3DShare%26utm_term%3Dso.lp.d.v2&amp;image=https%3A%2F%2Fimg0.etsystatic.com%2F017%2F0%2F6036607%2Fil_570xN.548391144_2y7m.jpg&amp;title=Cat+Battle+Armor" id="A_113"><span id="SPAN_114"></span>      <span id="SPAN_115">Save</span></a>
      </span> <span id="SPAN_116"> <a href="/share?network=_twitter&amp;url=https%3A%2F%2Fwww.etsy.com%2Flisting%2F175112598%2Fcat-battle-armor%3Futm_source%3DTwitter%26utm_medium%3DPageTools%26utm_campaign%3DShare%26utm_term%3Dso.lp.d.v2&amp;title=Cat+Battle+Armor" id="A_117"><span id="SPAN_118"></span>      <span id="SPAN_119">Tweet</span></a>
      </span>
    </div>
  </div>
</div>

    );
  };
}

export default PurchaseInfo;
