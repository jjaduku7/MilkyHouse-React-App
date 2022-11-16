import React from 'react'


function Header() {
  return (
    <header className="navbar navbar-default headbar">

        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand milkybrand" href="#">MilkyHouse</a>
            </div>
        
            
            <ul className="nav navbar-nav navbar-right headlist">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Milkshake</a></li>
                <li><a href="#">Milkshake Types</a></li>
            </ul>

        </div>

    </header>
  )
}

export default Header