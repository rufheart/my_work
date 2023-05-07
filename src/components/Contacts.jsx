import '../css/Contacts.css'
import { useState,useRef,useEffect, createElement, Children} from 'react'
import { NavLink ,Link, Outlet,useNavigate } from 'react-router-dom'

function Contacts(){
    return(
        <div className='contacts-main'>
            <div className='contacts-main-left'>
                <div className="contacts-main-left-header">
                    <div className="button">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <input type="text" placeholder='Search'/>
                </div>
                <div className='contacts-main-left-body'>
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
                </div>
            </div>
            <div className='contacts-main-right'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Contacts;