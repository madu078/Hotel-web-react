
export default function header(){
    
    return(
        <div className="header">
        <div className="container">
            <a href="#" className="navbar-brand scroll-top">Sayuru Villa</a>
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="navbar-header">
                    <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                {/* <!--/.navbar-header--> */}
                <div id="main-nav" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="">Home</a></li>
                        <li><a href="">Our Menus</a></li>
                        <li><a href="">Our Rooms</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                {/* <!--/.navbar-collapse--> */}
            </nav>
            {/* <!--/.navbar--> */}
        </div>
        {/* <!--/.container--> */}
    </div>
    // <!--/.header-->
    )
}