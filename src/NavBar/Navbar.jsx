import "./Navbar.css"
function NavBar() {
    return (<header>
        <section id="headerExplane">
            <p>Take delivery of a new Model 3 between December 21 and 31, 2022 for a $7,500 credit and 10,000 miles
                of free Supercharging.<a
                    href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=95113&range=200"> See
                    available inventory.</a></p>
        </section>
        <section>
            <nav id="nav">
                <section>
                    <a href="/" className="chg-Color">
                        TESLA
                    </a>
                </section>
                <section id="linkNavBar">
                    <a className="chg-Color" href="">Model S</a>
                    <a className="chg-Color" href="">Model 3</a>
                    <a className="chg-Color" href="">Model x</a>
                    <a className="chg-Color" href="">Model y</a>
                    <a className="chg-Color" href="">Solar Roof</a>
                    <a className="chg-Color" href="">Solar Panels</a>
                </section>
                <section>
                    <a className="chg-Color a-none" href="">Shop</a>
                    <a className="chg-Color a-none" href="">Acount</a>
                    <a className="chg-Color" href="">Menu</a>
                </section>
            </nav>
        </section>
        <section>
            <div className="bg-img">
                <div id="infScreen">
                    <div>
                        <h2>Model 3</h2>
                        <a href="">Schedule a Demo Drive</a>
                    </div>
                    <div>
                        <div id="infoTeslaCar">
                            <div className="m-div">
                                <div>
                                    <i className="fa-solid fa-gauge"></i>
                                    <span>3.1 s</span>
                                </div>
                                <h6>0-60 mph*</h6>
                            </div>
                            <div className="m-div">
                                <div>
                                    358 mi
                                </div>
                                <h6>Range (EPA est.)</h6>
                            </div>
                            <div className="m-div">
                                <div>
                                    AWD
                                </div>
                                <h6>Dual Motor</h6>
                            </div>
                            <div className="m-div">
                                <div>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div id="arrowDown">
                            <a href="#safety">
                                <i class="fa-solid fa-angle-down"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </header>)


}

function scrolles() {
    window.addEventListener("scroll", () => {
        const myScroll = window.scrollY;
        const widthScreen = screen.width;



        setTimeout(function () {
            if (parseInt(myScroll) < 80) {

                document.getElementById('nav').style.backgroundColor = 'transparent';
                if (widthScreen >= 768) {
                    document.getElementById('nav').style.top = "60px";
                }

                const a = document.getElementsByClassName('chg-Color2');
                for (let i = 0; i < a.length; i++) {
                    const element = a[i];

                    element.classList.remove('chg-Color2');
                    element.classList.add('chg-Color')

                }
            }
            else {
                document.getElementById('nav').style.backgroundColor = '#fff';
                
                    document.getElementById('nav').style.top = "0px";
                

                const a = document.getElementsByClassName('chg-Color');
                for (let i = 0; i < a.length; i++) {
                    const element = a[i];

                    element.classList.remove('chg-Color');
                    element.classList.add('chg-Color2')

                }
            }
        }, 500)

    })
}
scrolles()



export default NavBar
