import '../css/Contacts.css'
import { useState,useRef,useEffect, createElement, Children} from 'react'
import { NavLink ,Link, Outlet,useNavigate } from 'react-router-dom'

function Contacts(){
    let [button,setButton] = useState(false)
    let [menu_or_arrow, setMenuArrow] = useState(false)
    let [main_menu, setMainMenu] = useState(true)
    function Menu_to_Arrrow(){
        setButton(true)
    }
    function Arrow_to_Menu(){
        setButton(false)
    }
    return(
        <div className='contacts-main'>
            <div className='contacts-main-left'>
                <div className="contacts-main-left-header">
                    <div className="button">
                        <button>{button==false?<span><span style={menu_or_arrow==true?{"transform":"rotate(90deg)","transition":"transform 3s"}:{"transform":"rotate(0deg)","transition":"transform 0.8s"}} class="material-symbols-outlined"> menu </span></span>:<span><span class="material-symbols-outlined" style={menu_or_arrow==true?{"transform":"rotate(90deg)","transition":"transform 10s"}:{"transform":"rotate(0deg)","transition":"transform 0.4s"}} onClick={()=>(setTimeout(Arrow_to_Menu,2000),setMenuArrow(false),setMainMenu(true))}> arrow_downward </span></span>}</button>
                    </div>
                    <div><input type="text" placeholder='Search' onClick={()=>(setTimeout(Menu_to_Arrrow, 2000),setMenuArrow(true),setMainMenu(false))}/><button><span class="material-symbols-outlined"> search </span>   </button></div>
                </div>
                <div className='contacts-main-left-body'>
                    {main_menu==true?<div className='contacts-main-left-body-main-menu'>
                        <div className='contacts-main-left-body-top'>
                            <NavLink to={'/'+'soz'}>
                                <div><span>Gözləmədə(1)</span><i class="fa fa-address-card-o"></i></div>
                                <div></div>
                                <div><img src={require('../woman.png')} alt="" /><span>Veronica Belluci</span></div>
                                <div></div>
                                <div><span>Mövcuddur (4) </span><i class="fa fa-address-card-o"></i></div>
                            </NavLink>
                            <NavLink to=''>
                                <div><span>Gözləmədə(1)</span><i class="fa fa-address-card-o"></i></div>
                                <div></div>
                                <div><img src={require('../woman.png')} alt="" /><span>Veronica Belluci</span></div>
                                <div></div>
                                <div><span>Mövcuddur (4) </span><i class="fa fa-address-card-o"></i></div>
                            </NavLink>
                        </div>
                        <div className='contacts-main-left-body-bottom'>
                            <div>
                                <span>Invite to Chatgram</span>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <img src={require('../avatar.jpg')} alt="" />
                                        <span>Enzo Malacia</span>
                                    </div>
                                    <div><button>Invite</button></div>
                                </div>
                                <div>
                                    <div>
                                        <img src={require('../avatar.jpg')} alt="" />
                                        <span>Enzo Malacia</span>
                                    </div>
                                    <div><button>Invite</button></div>
                                </div>
                            </div>
                        </div>
                    </div>:
                    <div className='contacts-main-left-body-search-menu'>
                        search
                    </div>
                    }
                </div>
            </div>
            <div className='contacts-main-right'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Contacts;