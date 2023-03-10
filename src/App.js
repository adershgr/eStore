import './App.css';

function App() {
  return (
    <div >
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-3 col-lg-2">
              <div className="header__logo">
                <h3>E-Store</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="input-group">
                <div className='input-group-prepend' >
                  <select className='form-control btn btn-success dropdown-toggle'>
                    <option>ALL </option>
                    <option>Men </option>
                    <option>Women</option>
                    <option>Kids</option>
                  </select>
                </div>

                <input type="text" className="form-control">
                </input>

                <div className="input-group-append">
                  <button className="btn btn-success" >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
           
            </div>
            <div className="col-xl-4 col-lg-2">
            <div className='header__right'>
              <div className='auth'>
                <a href="#"> Sign-In /</a>
                <a href="#"> Sign-Up </a>
              </div>
   <ul className='widget'>
   <li><i className='fa fa-heart' /></li>
   <li><i className='fa fa-shopping-cart' /></li>
   </ul>
            </div>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
