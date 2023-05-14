import '../css/Groups.css'
import { useState,useRef,useEffect, createElement, Children} from 'react'
import { NavLink ,Link, Outlet,useNavigate } from 'react-router-dom'

function Groups_Menu(){
    let [disappearing_msg, setDisappearingMsg] = useState()
    let navigate = useNavigate()
    function Change(){
        if(disappearing_msg==null){
            setDisappearingMsg('')
        }
        else{
            setDisappearingMsg(null)
        }
    }
    return(
        <div className='group-menu'>
            <div className='group-menu-header'>
                <div className='group-menu-go-back-icon'>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>
                <div className='group-menu-go-back-text'><span>New Group</span></div>
            </div>    
            <div className='group-menu-body'>
                <div className='group-menu-body-image'>
                    <div>
                        <img src={require('../woman.png')} alt="" />
                        <label htmlFor="group-menu-body-image-id">
                            <input type="file" id='group-menu-body-image-id' />
                            <span class="material-symbols-outlined"> photo_camera </span>                            
                        </label>
                    </div>
                </div>
                <div className='group-menu-body-bottom'>
                    <div>
                        <input type="text" />
                        <button><span class="material-symbols-outlined"> sentiment_satisfied </span></button>
                    </div>
                    <div>
                        <label htmlFor="">Disappearing messages</label>
                        <div>
                            <span>{disappearing_msg==null?'off':'on'}</span>
                            <div>
                                <label htmlFor="group-menu-body-bottom-toggle" >
                                    <input type="checkbox" id='group-menu-body-bottom-toggle' />
                                    <span onClick={Change}></span>
                                </label>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}


function Groups_Capsule(){
    return(
        <div className='group-capsule'>
            <Outlet/>
        </div>
    )
}

function Groups_Main(){
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme==='dark'){
        document.querySelector("div").setAttribute("data-theme", "dark")
        document.querySelector("body").setAttribute("data-theme", "dark")
    }
    else{
        document.querySelector("div").setAttribute("data-theme", "light")
        document.querySelector("body").setAttribute("data-theme", "light")
    }   
    return(
        <div className='group-main'>
            <div className='group-main-left'>
                <Outlet/>
            </div>
            <div className='group-main-right'>
                <div className='group-main-right-center'>
                    <div className='group-main-right-center-image'><img src={require('../settings.png')} alt="" /></div>
                    <div className='group-main-right-center-text'><div>Chatgram Web</div><div>Lorem ipsum dolor sit amet consectetur. Et morbi id enim ullamcorper. Ut faucibus auctor quis nisi praesent sit tincidunt amet.</div></div>
                </div>                
            </div>
        </div>
    )
}




export {Groups_Capsule,Groups_Menu};
export default Groups_Main;