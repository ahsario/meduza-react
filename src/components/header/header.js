import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';


function Header (){
    return (
        <div className="header">

            <div className="header-info">
                <div className="home">
                    <a href=""><div className="home"></div> </a>
                </div>
        
                <div>
                    <ul className="itemes">
                        <li><Link to='/news/'   >НОВОСТИ</Link></li>
                        <li><Link to='/history/'  >ИСТОРИИ</Link></li>
                        <li><Link to='/parsing/'  >РАЗБОР</Link></li>
                        <li><Link to='/plays/'  >ИГРЫ</Link></li>
                        <li><Link to='/shapito/'  >ШАПИТО</Link></li>
                        <li><Link to='/podcasts/'  >ПОДКАСТЫ</Link></li>
                        <li><Link to='/coronavirus/'  >КОРОНАВИРУС</Link></li>
                    </ul>
                </div>
        
                <div className="search">EN|&#128270</div>
        
                <div className="daily-info">
                    <div className="dollor">74,39</div>
                    <div className="euro">81,45</div>
                    <div className="oil">26,74</div>
        
                    <div className="corona">
                        <span><div className="korona"></div></span>
                        <span><a href="">КОРОНАВИРУС. ЗАРАЖЕНО: 3 353 400 ЧЕЛОВЕК. В РФ: 124 054</a></span>
                    </div>
        
                    <div className="changer">
                        <label for="1">ПОКАЗЫВАТЬ ПО ПОРЯДКУ</label>
                        <input type="checkbox" id="1"></input>
                    </div>
               
                </div>
            </div>
  
        </div>
    )
};
export default Header;