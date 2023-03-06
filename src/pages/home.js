import React from "react";

class Home extends React.Component {
    render() {
        return(
           <><header>
            <div id="top-header">
              <div class="container">
                <ul class="header-links pull-left">
                  <li>
                    <a href="./profile.html"
                    ><i class="fa fa-phone"></i> +021-95-51-84</a>
                  </li>
                  <li>
                    <a href="./profile.html"
                    ><i class="fa fa-envelope-o"></i> email@email.com</a>
                  </li>
                  <li>
                    <a href="./profile.html"
                    ><i class="fa fa-map-marker"></i> 1734 Stonecoal Road</a>
                  </li>
                </ul>
                <ul class="header-links pull-right">
                  <li>
                    <a href="./profile.html"><i class="fa fa-dollar"></i> USD</a>
                  </li>
                  <li>
                    <a href="./login.html"><i class="fa fa-user-o"></i> My Account</a>
                  </li>
                </ul>
              </div>
            </div><div id="header">

              <div class="container">

                <div class="row">

                  <div class="col-md-3">
                    <div class="header-logo">
                      <a href="./index.html" class="logo">
                        <img src="./PowerPoint/Noys3.png" alt="Noys Logo" />
                      </a>
                    </div>
                  </div>



                  <div class="col-md-6">
                    <div class="header-search">
                      <form>
                        <select class="input-select">
                          <option value="0">All Categories</option>
                          <option value="1">Category 01</option>
                          <option value="1">Category 02</option>
                        </select>
                        <input class="input" placeholder="Search here" />
                        <button class="search-btn">Search</button>
                      </form>
                    </div>
                  </div>



                  <div class="col-md-3 clearfix">
                    <div class="header-ctn">

                      <div>
                        <a href="#">
                          <i class="fa fa-heart-o"></i>
                          <span>Your Wishlist</span>
                          <div class="qty">2</div>
                        </a>
                      </div>



                      <div class="dropdown">
                        <a
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i class="fa fa-shopping-cart"></i>
                          <span>Your Cart</span>
                          <div class="qty">3</div>
                        </a>
                        <div class="cart-dropdown">
                          <div class="cart-list">
                            <div class="product-widget">
                              <div class="product-img">
                                <img
                                  src="./Microphones/Shure SM7B/SM7B-1.jpg"
                                  alt="Shure SM7B" />
                              </div>
                              <div class="product-body">
                                <h3 class="product-name">
                                  <a href="./product.html">product name goes here</a>
                                </h3>
                                <h4 class="product-price">
                                  <span class="qty">1x</span>$980.00
                                </h4>
                              </div>
                              <button class="delete">
                                <i class="fa fa-close"></i>
                              </button>
                            </div>

                            <div class="product-widget">
                              <div class="product-img">
                                <img
                                  src="./Drum sets/Tama Imperialstar/imperialstar-1.jpeg"
                                  alt="" />
                              </div>
                              <div class="product-body">
                                <h3 class="product-name">
                                  <a href="#">product name goes here</a>
                                </h3>
                                <h4 class="product-price">
                                  <span class="qty">3x</span>$980.00
                                </h4>
                              </div>
                              <button class="delete">
                                <i class="fa fa-close"></i>
                              </button>
                            </div>
                          </div>
                          <div class="cart-summary">
                            <small>3 Item(s) selected</small>
                            <h5>SUBTOTAL: $2940.00</h5>
                          </div>
                          <div class="cart-btns">
                            <a href="./checkout.html">View Cart</a>
                            <a href="./checkout.html"
                            >Checkout <i class="fa fa-arrow-circle-right"></i></a>
                          </div>
                        </div>
                      </div>



                      <div class="menu-toggle">
                        <a href="#">
                          <i class="fa fa-bars"></i>
                          <span>Menu</span>
                        </a>
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>

          </header><><nav id="navigation">

            <div class="container">

              <div id="responsive-nav">

                <ul class="main-nav nav navbar-nav">
                  <li class="active">
                    <a href="./index.html">Home</a>
                  </li>
                  <li><a href="#hot-deal">Hot Deals</a></li>
                  <li><a href="./store.html">Categories</a></li>
                  <li><a href="./store.html">Audio Interface</a></li>
                  <li><a href="./store.html">Guitars</a></li>
                  <li><a href="./store.html">Pianos</a></li>
                  <li><a href="./store.html">MIDIs</a></li>
                  <li><a href="./store.html">Pedals</a></li>
                  <li><a href="./store.html">Drums</a></li>
                  <li><a href="./store.html">Microphones</a></li>
                  <li><a href="./store.html">Bass Guitars</a></li>
                  <li><a href="./store.html">Amplifiers</a></li>
                  <li><a href="./store.html">Mixers</a></li>
                </ul>

              </div>

            </div>

          </nav><div class="section">

                <div class="container">

                  <div class="row">

                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img
                            src="./Amplifiers/Marshall SC20H Studio Classic/classic1.jpg"
                            alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Amplifiers<br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>



                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img src="./Audio Interface/Audient Evo 4/evo-1.jpeg" alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Audio Interface<br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>



                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img
                            src="./Bass Guitars/Yamaha BB435 Bass Guitar/bb435-1.jpeg"
                            alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Bass Guitar<br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>


                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img src="./Digital Pianos/Kawai ES110/ES110-2.jpeg" alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Digital Pianos<br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>


                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img
                            src="./Drum sets/Pearl Crystal Beat Shell Pack/crystal-1.jpeg"
                            alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Drum Set<br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img src="./Guitars/Fender Acoustasonic/Cream.jpeg" alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Guitars <br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img
                            src="./Microphones/Neumann TLM 103 Condenser Mic/TLM 103-2.jpeg"
                            alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Microphones<br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img src="./MIDIs/Komplete Kontrol SS8/S88-2.jpeg" alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>MIDIs<br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img src="./Mixers/Yamaha Ag06 Mk2/ag06mk2-1.png" alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Mixers<br />Collection</h3>
                          <a href="./store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>


                    <div class="col-md-4 col-xs-6">
                      <div class="shop">
                        <div class="shop-img">
                          <img
                            src="./Pedals/Jim Dunlop JC95 Jerry Cantrell Wah/WAH-1.jpeg"
                            alt="" />
                        </div>
                        <div class="shop-body">
                          <h3>Pedals<br />Collection</h3>
                          <a href="/store.html" class="cta-btn"
                          >Shop now <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div><div class="section">

                <div class="container">

                  <div class="row">

                    <div class="col-md-12">
                      <div class="section-title">
                        <h3 class="title">New Products</h3>
                        <div class="section-nav">
                          <ul class="section-tab-nav tab-nav">
                            <li class="active">
                              <a data-toggle="tab" href="#tab1">Audio Interface</a>
                            </li>
                            <li><a data-toggle="tab" href="#tab1">Guitars</a></li>
                            <li><a data-toggle="tab" href="#tab1">Pianos</a></li>
                            <li><a data-toggle="tab" href="#tab1">MIDIs</a></li>
                            <li><a data-toggle="tab" href="#tab1">Pedals</a></li>
                            <li><a data-toggle="tab" href="#tab1">Drums</a></li>
                            <li><a data-toggle="tab" href="#tab1">Microphones</a></li>
                            <li><a data-toggle="tab" href="#tab1">Bass Guitars</a></li>
                            <li><a data-toggle="tab" href="#tab1">Amplifiers</a></li>
                            <li><a data-toggle="tab" href="#tab1">Mixers</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>



                    <div class="col-md-12">
                      <div class="row">
                        <div class="products-tabs">

                          <div id="tab1" class="tab-pane active">
                            <div class="products-slick" data-nav="#slick-nav-1">

                              <div class="product">
                                <div class="product-img">
                                  <img
                                    src="./Digital Pianos/Roland FP-10/FP10-2.jpeg"
                                    alt="" />
                                  <div class="product-label">
                                    <span class="sale">-30%</span>
                                    <span class="new">NEW</span>
                                  </div>
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>



                              <div class="product">
                                <div class="product-img">
                                  <img
                                    src="./Microphones/Electrovoice RE20/RE20-2.jpeg"
                                    alt="" />
                                  <div class="product-label">
                                    <span class="new">NEW</span>
                                  </div>
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                  </div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>


                              <div class="product">
                                <div class="product-img">
                                  <img
                                    src="./Audio Interface/RME Babyface Pro FS/Babyface-1.jpeg"
                                    alt="" />
                                  <div class="product-label">
                                    <span class="sale">-30%</span>
                                  </div>
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating"></div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>



                              <div class="product">
                                <div class="product-img">
                                  <img src="./MIDIs/Nektar SE25/SE25-1.jpeg" alt="" />
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>



                              <div class="product">
                                <div class="product-img">
                                  <img src="./Audio Interface/SSL 2/SSL-3.jpeg" alt="" />
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>

                            </div>
                            <div id="slick-nav-1" class="products-slick-nav"></div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div><div id="hot-deal" class="section">

                <div class="container">

                  <div class="row">
                    <div class="col-md-12">
                      <div class="hot-deal">
                        <ul class="hot-deal-countdown">
                          <li>
                            <div>
                              <h3>02</h3>
                              <span>Days</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3>10</h3>
                              <span>Hours</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3>34</h3>
                              <span>Mins</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <h3>60</h3>
                              <span>Secs</span>
                            </div>
                          </li>
                        </ul>
                        <h2 class="text-uppercase">hot deal this week</h2>
                        <p>New Collection Up to 50% OFF</p>
                        <a class="primary-btn cta-btn" href="#">Shop now</a>
                      </div>
                    </div>
                  </div>

                </div>

              </div><div class="section">

                <div class="container">

                  <div class="row">

                    <div class="col-md-12">
                      <div class="section-title">
                        <h3 class="title">Top selling</h3>
                        <div class="section-nav">
                          <ul class="section-tab-nav tab-nav">
                            <li class="active">
                              <a data-toggle="tab" href="#tab1">Audio Interface</a>
                            </li>
                            <li><a data-toggle="tab" href="#tab1">Guitars</a></li>
                            <li><a data-toggle="tab" href="#tab1">Pianos</a></li>
                            <li><a data-toggle="tab" href="#tab1">MIDIs</a></li>
                            <li><a data-toggle="tab" href="#tab1">Pedals</a></li>
                            <li><a data-toggle="tab" href="#tab1">Drums</a></li>
                            <li><a data-toggle="tab" href="#tab1">Microphones</a></li>
                            <li><a data-toggle="tab" href="#tab1">Bass Guitars</a></li>
                            <li><a data-toggle="tab" href="#tab1">Amplifiers</a></li>
                            <li><a data-toggle="tab" href="#tab1">Mixers</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>



                    <div class="col-md-12">
                      <div class="row">
                        <div class="products-tabs">

                          <div id="tab2" class="tab-pane fade in active">
                            <div class="products-slick" data-nav="#slick-nav-2">

                              <div class="product">
                                <div class="product-img">
                                  <img
                                    src="./Microphones/Seinnheiser SKM 9000/SKM-1.jpeg"
                                    alt="" />
                                  <div class="product-label">
                                    <span class="sale">-30%</span>
                                    <span class="new">NEW</span>
                                  </div>
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>


                              <div class="product">
                                <div class="product-img">
                                  <img src="./MIDIs/Akai MPK Mini MK3/mk-4.jpeg" alt="" />
                                  <div class="product-label">
                                    <span class="new">NEW</span>
                                  </div>
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                  </div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>


                              <div class="product">
                                <div class="product-img">
                                  <img
                                    src="./Mixers/Mackie Pro FX8V2/PRO FX8V2-1.jpeg"
                                    alt="" />
                                  <div class="product-label">
                                    <span class="sale">-30%</span>
                                  </div>
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating"></div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>



                              <div class="product">
                                <div class="product-img">
                                  <img
                                    src="./Bass Guitars/Fender Aerodyne Special Jazz Bass/special-3.jpeg"
                                    alt="" />
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>


                              <div class="product">
                                <div class="product-img">
                                  <img
                                    src="./Guitars/Fender Vintera 60's Telecaster Modified/mod-1.jpeg"
                                    alt="" />
                                </div>
                                <div class="product-body">
                                  <p class="product-category">Category</p>
                                  <h3 class="product-name">
                                    <a href="#">product name goes here</a>
                                  </h3>
                                  <h4 class="product-price">
                                    $980.00 <del class="product-old-price">$990.00</del>
                                  </h4>
                                  <div class="product-rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </div>
                                  <div class="product-btns">
                                    <button class="add-to-wishlist">
                                      <i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span>
                                    </button>
                                    <button class="add-to-compare">
                                      <i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span>
                                    </button>
                                    <button class="quick-view">
                                      <i class="fa fa-eye"></i><span class="tooltipp">quick view</span>
                                    </button>
                                  </div>
                                </div>
                                <div class="add-to-cart">
                                  <button class="add-to-cart-btn">
                                    <i class="fa fa-shopping-cart"></i> add to cart
                                  </button>
                                </div>
                              </div>

                            </div>
                            <div id="slick-nav-2" class="products-slick-nav"></div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div></>
    
       
                  </div> 
        <div class="section">
         
          <div class="container">
            
            <div class="row">
              <div class="col-md-4 col-xs-6">
                <div class="section-title">
                  <h4 class="title">Top selling</h4>
                  <div class="section-nav">
                    <div id="slick-nav-3" class="products-slick-nav"></div>
                  </div>
                </div>
    
                <div class="products-widget-slick" data-nav="#slick-nav-3">
                  <div>
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Audio Interface/Focusrite Scarlet 2i2/2i2-1.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
    
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img src="./Microphones/Shure SM7B/SM7B-2.jpeg" alt="" />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                   
    
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img src="./Pedals/Boss RV-500/RV-500-1.jpeg" alt="" />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                   
                  </div>
    
                  <div>
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Digital Pianos/Alesis Concert 88-Key Digital Piano/concert-1.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                   
    
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Amplifiers/Blackstar HT Club 40 mk2/ht-1.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                   
    
                  
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Pedals/TC Electronic Sub'N'Up Octave/subnup-1.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
    
              <div class="col-md-4 col-xs-6">
                <div class="section-title">
                  <h4 class="title">Top selling</h4>
                  <div class="section-nav">
                    <div id="slick-nav-4" class="products-slick-nav"></div>
                  </div>
                </div>
    
                <div class="products-widget-slick" data-nav="#slick-nav-4">
                  <div>
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./MIDIs/Arturia Key Step Pro/keystep-1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                
                    <div class="product-widget">
                      <div class="product-img">
                        <img src="./Mixers/SSL Six/SIX-1.jpeg" alt="" />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                   
                    <div class="product-widget">
                      <div class="product-img">
                        <img src="./Microphones/DPA 4006/4006-1.jpg" alt="" />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                  </div>
    
                  <div>
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Drum sets/Tama Starclassic Performer/TamaStar1.png"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
    
                 
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Amplifiers/PRS MT15 Mark Tremonti Head/mark1.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
    
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img src="./Mixers/Pyle PMXU83BT/PMXU83BT-1.jpeg" alt="" />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
    
              <div class="clearfix visible-sm visible-xs"></div>
    
              <div class="col-md-4 col-xs-6">
                <div class="section-title">
                  <h4 class="title">Top selling</h4>
                  <div class="section-nav">
                    <div id="slick-nav-5" class="products-slick-nav"></div>
                  </div>
                </div>
    
                <div class="products-widget-slick" data-nav="#slick-nav-5">
                  <div>
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img src="./MIDIs/Komplete Kontrol SS8/S88-1.jpeg" alt="" />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
    
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Microphones/Behringer XM8500/XM8500-1.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
    
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Drum sets/Pearl Crystal Beat Shell Pack/crystal-1.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
                  </div>
    
                  <div>
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img src="./Guitars/Taylor 110e/110e-1.jpeg" alt="" />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
    
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img
                          src="./Digital Pianos/Nord Stage 3/Nord1.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
    
                    
                    <div class="product-widget">
                      <div class="product-img">
                        <img src="./Microphones/Shure SM58/SM58-2.jpeg" alt="" />
                      </div>
                      <div class="product-body">
                        <p class="product-category">Category</p>
                        <h3 class="product-name">
                          <a href="#">product name goes here</a>
                        </h3>
                        <h4 class="product-price">
                          $980.00 <del class="product-old-price">$990.00</del>
                        </h4>
                      </div>
                    </div>
                    
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
    
        
        <div id="newsletter" class="section">
          
          <div class="container">
           
            <div class="row">
              <div class="col-md-12">
                <div class="newsletter">
                  <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                  <form>
                    <input
                      class="input"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <button class="newsletter-btn">
                      <i class="fa fa-envelope"></i> Subscribe
                    </button>
                  </form>
                  <ul class="newsletter-follow">
                    <li>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
          </div>
         
        </div>
       
    
       
        <footer id="footer">
        
          <div class="section">
           
            <div class="container">
              
              <div class="row">
                <div class="col-md-3 col-xs-6">
                  <div class="footer">
                    <h3 class="footer-title">About Us</h3>
                    <p>
                      The best music & live streaming audio store, that can help you
                      can get the best audio equipment possible.
                    </p>
                    <ul class="footer-links">
                      <li>
                        <a href="#"
                          ><i class="fa fa-map-marker"></i>1734 23rd Avenue</a
                        >
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-phone"></i>+021-95-51-84</a>
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-envelope-o"></i>email@email.com</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
    
                <div class="col-md-3 col-xs-6">
                  <div class="footer">
                    <h3 class="footer-title">Categories</h3>
                    <ul class="footer-links">
                      <li><a href="#">Hot deals</a></li>
                      <li><a href="#">Audio Interface</a></li>
                      <li><a href="#">Microphones</a></li>
                      <li><a href="#">Bass Guitars</a></li>
                      <li><a href="#">Audio Mixers</a></li>
                    </ul>
                  </div>
                </div>
    
                <div class="clearfix visible-xs"></div>
    
                <div class="col-md-3 col-xs-6">
                  <div class="footer">
                    <h3 class="footer-title">Information</h3>
                    <ul class="footer-links">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Orders and Returns</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                  </div>
                </div>
    
                <div class="col-md-3 col-xs-6">
                  <div class="footer">
                    <h3 class="footer-title">Service</h3>
                    <ul class="footer-links">
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">View Cart</a></li>
                      <li><a href="#">Wishlist</a></li>
                      <li><a href="#">Track My Order</a></li>
                      <li><a href="#">Help</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          
    
          
          <div id="bottom-footer" class="section">
            <div class="container">
              
              <div class="row">
                <div class="col-md-12 text-center">
                  <ul class="footer-payments">
                    <li>
                      <a href="#"><i class="fa fa-cc-visa"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-credit-card"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-cc-paypal"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-cc-mastercard"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-cc-discover"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-cc-amex"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-google-wallet"></i></a>
                    </li>
                  </ul>
                  <span class="copyright">
                    
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>
                    All rights reserved | This template is made with
                    <i class="fa fa-heart-o" aria-hidden="true"></i> by
                    <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    
                  </span>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </footer>
        </>
        
    }
}
        

export default Home;