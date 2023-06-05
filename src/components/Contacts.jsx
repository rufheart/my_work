import '../css/Contacts.css'
import { useState,useRef,useEffect, createElement, Children} from 'react'
import { NavLink ,Link, Outlet,useNavigate } from 'react-router-dom'

function Contacts(){
    let [button,setButton] = useState(false)
    let [menu_or_arrow, setMenuArrow] = useState(false)
    let [main_menu, setMainMenu] = useState(true)
    let [page_active, setPageActive] = useState('messages')
    function Menu_to_Arrrow(){
        setButton(true)
    }
    function Arrow_to_Menu(){
        setButton(false)
    }
    function Page_to_Search(){
        setPageActive('search')
    }
    function Page_to_Main(){
        setPageActive('messages')
    }
    return(
        <div className='contacts-main'>
            <div className='contacts-main-left'>
                <div className="contacts-main-left-header">
                    <div className="button">
                        <button>{button==false?<div><span style={menu_or_arrow==true?{"transform":"rotate(90deg)","transition":"transform 0.4s linear"}:{"transform":"rotate(0deg)","transition":"transform 0.8s"}} class="material-symbols-outlined"> menu </span></div>:<div><span class="material-symbols-outlined" style={menu_or_arrow==true?{"transform":"rotate(90deg)","transition":"transform 9s"}:{"transform":"rotate(0deg)","transition":"transform 0.8s"}} onClick={()=>(setTimeout(Arrow_to_Menu,150),setTimeout(Page_to_Main,200),setMenuArrow(false),setMainMenu(true))}> arrow_downward </span></div>}</button>
                    </div>
                    <div><input type="text" placeholder='Search' onClick={()=>(setTimeout(Menu_to_Arrrow, 150),setTimeout(Page_to_Search,200),setMenuArrow(true),setMainMenu(false))}/><button><span class="material-symbols-outlined"> search </span>   </button></div>
                </div>
                <div className='contacts-main-left-body'>
                    <div style={page_active=='messages'?{left:"0%",transition:"left 0.5s"}:{left:"-100%",transition:"left 1s","border-top":"1px solid blue"}} className='bir'>
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
                        </div>:null}
                    </div>
                    <div style={page_active=='search'?{left:"0%",transition:"left 0.5s"}:{left:"-100%",transition:"left 1s","border-top":"1px solid blue"}} className='iki'>
                        soz
                    </div>
                </div>
            </div>
            <div className='contacts-main-right'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Contacts;