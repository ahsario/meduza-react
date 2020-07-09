import React from 'react';
import './header.css';
import {Link, NavLink} from 'react-router-dom';


function Header (){
    return (
        <div className="header">

            <div className="header-info">
                <div className="home">
                    <Link to='/news'><div className="home"></div> </Link>
                </div>

                <div>
                    <ul className="itemes">
                        <li><NavLink activeStyle={{color: 'orangered'}} to='/news'>НОВОСТИ</NavLink></li>
                        <li><NavLink activeStyle={{color: 'orangered'}} to='/history'>ИСТОРИИ</NavLink></li>
                        <li><NavLink activeStyle={{color: 'orangered'}} to='/parsing'>РАЗБОР</NavLink></li>
                        <li><NavLink activeStyle={{color: 'orangered'}} to='/plays'>ИГРЫ</NavLink></li>
                        <li><NavLink activeStyle={{color: 'orangered'}} to='/shapito'>ШАПИТО</NavLink></li>
                        <li><NavLink activeStyle={{color: 'orangered'}} to='/podcasts'>ПОДКАСТЫ</NavLink></li>
                        <li><NavLink activeStyle={{color: 'orangered'}} to='/coronavirus'>КОРОНАВИРУС</NavLink></li>
                    </ul>
                </div>

                <div className="search">EN|<div className='lupa'></div></div>

                <div className="daily-info">
                    <div className="dollor">74,39</div>
                    <div className="euro">81,45</div>
                    <div className="oil">26,74</div>

                    <div className="corona">
                        <span><div className="korona"></div></span>
                        <span><a href="/">КОРОНАВИРУС. ЗАРАЖЕНО: 3 353 400 ЧЕЛОВЕК. В РФ: 124 054</a></span>
                    </div>

                    <div className="changer">
                        <label htmlFor="1">ПОКАЗЫВАТЬ ПО ПОРЯДКУ</label>
                        <input type="checkbox" id="1"></input>
                    </div>

                </div>
            </div>

        </div>
    )
};
export default Header;