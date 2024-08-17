function Nav () {
    return (
        <div>
            <nav className="Nav"> 
                <div className="Logo">
                    <img  src="https://kupona.al/assets/logoPurple-DUEkWI_1.svg" alt="Kupona Logo" />
                </div>

                <ul className="TheList"> 
                    <li> <a href="google.com" class="no-link-style">Home</a></li>                  
                    <li> <a href="google.com" class="no-link-style">Shop</a></li>                    
                    <li> <a href="google.com" class="no-link-style">Blog</a></li>                    
                </ul>

                <div className="Register">
                    <button className="LoginButton">Login</button>
                    <button className="SignUpButton">Sign Up</button>
                </div>  
            </nav>

            <div className="MainPart">
                <div>
                    <h1 className="MainTitle">The Best Deals</h1>
                    <p className="MainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla et nunc ultricies sodales. </p>
                </div>
            </div>

        </div>
    );
}
export default Nav;
