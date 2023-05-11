import '../css/Settings.css'
import { useState,useRef,useEffect, createElement, Children} from 'react'
import { NavLink ,Link, Outlet,useNavigate } from 'react-router-dom'

function Set_Color(){
    let navigate = useNavigate()
    return(
        <div className='set-color'>
            <div className='set-color-header'>
                <div>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>
                <div><span>Set Color</span></div>                   
            </div>  
            <div className='set-color-body'>
                <div><span>Choose color</span></div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 301.png")} alt="" />
                    </label>  
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 304.png")} alt="" />
                    </label>  
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 305.png")} alt="" />
                    </label>        
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 306.png")} alt="" />
                    </label>     
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 307.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 308.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 309.png")} alt="" />
                    </label> 
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 310.png")} alt="" />
                    </label>        
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 311.png")} alt="" />
                    </label>                
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 312.png")} alt="" />
                    </label>     
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 313.png")} alt="" />
                    </label>  
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 314.png")} alt="" />
                    </label>    
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 315.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 316.png")} alt="" />
                    </label>  
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 317.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 305.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 304.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 306.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 315.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 311.png")} alt="" />
                    </label>   
                    <label htmlFor="">
                        <input type="checkbox" />                
                        <img src={require("../images/set-color-images/Rectangle 316.png")} alt="" />
                    </label>                                                                                                     
                </div>
            </div>          
        </div>
    )
}

function Chat_Background_Menu(){
    let navigate = useNavigate()
    return(
        <div className='chat-background'>
            <div className='chat-background-header'>
                <div>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>
                <div><span>Set Chat Background</span></div>                   
            </div>
            <div className='chat-background-middle'>
                <label htmlFor='chat-background-middle-id'>
                    <div>
                        <span class="material-symbols-outlined"> download </span>
                        <input type="file" id='chat-background-middle-id'/>
                        <span>Upload image</span>
                    </div>
                </label>
                <label>
                    <div>
                        <input type="checkbox"/>
                        <span>Default</span>                        
                    </div>
                </label>
                <NavLink to='set-color/'>
                    <div>
                        <span class="material-symbols-outlined"> palette </span>
                        <span>Set color</span>                        
                    </div>
                </NavLink>
            </div>
            <div className='chat-background-bottom'>
                <div>
                    <span>Set background</span>
                </div>
                <div>
                    <div><img src="" alt="" /></div>
                </div>
            </div>
        </div>
    )
}
function Chat_Background_Main(){
    return(
        <div>
            <Outlet/>
        </div>
    )
}


function My_Profile(){
    let [divone, setDivOne] = useState(true)
    let [divtwo, setDivTwo] = useState(true)
    let [divthree, setDivThree] = useState(true)
    let navigate = useNavigate()
    let navigate2 = useNavigate()
    let navigate3 = useNavigate()
    return(
        <div className='my-profile'>
            <div className='my-profile-top'>
                <div className='my-profile-top-header'>
                    <div>
                        <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                    </div>
                    <div><span>Profile</span></div>   
                </div>
                <div className='my-profile-top-bottom'>
                    <div>
                        <img src={require('../woman.png')} alt="" />
                        <label htmlFor="my-profile-top-id">
                            <input type="file" id='my-profile-top-id'/>
                            <span class="material-symbols-outlined">photo_camera</span>
                        </label>
                    </div>
                </div>
            </div>
            <form className='my-profile-middle' onSubmit={e=>e.preventDefault()}>
                <div>
                    <label htmlFor="settings-profile-your-name">Your name</label>
                    {divone==true?<div><span>Rufat Nuriyev</span><button onClick={()=>setDivOne(false)}><span class="material-symbols-outlined"> edit </span></button></div>:
                    <div className='my-profile-middle-div-one-inside'><input type="text" name="" id="settings-profile-your-name" /><button onClick={()=>setDivOne(true)}><span class="material-symbols-outlined"> done_outline </span></button></div>}
                </div>
                <div>
                    <label htmlFor="settings-profile-about">About</label>
                    {divtwo==true?<div><span>Programmer</span><button onClick={()=>setDivTwo(false)}><span class="material-symbols-outlined"> edit </span></button></div>:
                    <div className='my-profile-middle-div-two-inside'><input type="text" name="" id="settings-profile-about" /><button onClick={()=>setDivTwo(true)}><span class="material-symbols-outlined"> done_outline </span></button></div>}
                </div>
                <div>
                    <label htmlFor="settings-profile-phone-number">Phone number</label>
                    {divthree==true?<div><span>070-585-67-19</span><button onClick={()=>setDivThree(false)}><span class="material-symbols-outlined"> edit </span></button></div>:
                    <div className='my-profile-middle-div-three-inside'><input type="text" name="" id="settings-profile-phone-number" /><button onClick={()=>setDivThree(true)}><span class="material-symbols-outlined"> done_outline </span></button></div>}
                </div>
            </form>
            <button>
                <label htmlFor=''>Cards</label>
                <div>
                    <span>View all cards</span>
                    <span class="material-symbols-outlined"> navigate_next </span>
                </div>
            </button>
            <button onClick={()=>navigate2("/card/add/")}>
                <label htmlFor=''>Create</label>
                <div>
                    <span>Create new card</span>
                    <span class="material-symbols-outlined"> add_circle </span>
                </div>
            </button>            
        </div>
    )
}


function Account_Main(){
    let navigate = useNavigate()
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme==='dark'){
        document.querySelector("div").setAttribute("data-theme", "dark")
    }
    else{
        document.querySelector("div").setAttribute("data-theme", "light")
    }    
    return(
        <div className='account-main'>
            <div className='account-main-header'>
                <div>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>
                <div><span>Account</span></div>                
            </div>   
            <div className='account-main-body'>
                <NavLink to='' className='account-security-notififcations'>
                    <div><span class="material-symbols-outlined"> notifications </span></div>
                    <div>Security notifications</div>
                </NavLink>   
                <NavLink to='' className='account-change-number'>
                    <div><span class="material-symbols-outlined"> settings </span></div>
                    <div>Change number</div>
                </NavLink>   
                <NavLink to='' className='account-delete-my-account'>
                    <div><span class="material-symbols-outlined"> key </span></div>
                    <div>Change number</div>
                </NavLink>                 
            </div>                             
        </div>        
    )
}

function Account_Capsule(){
    return(
        <div className='account-capsule'>
            <Outlet/>
        </div>
    )
}

function Who_Can_Call_Me(){
    let navigate = useNavigate()
    return(
        <div className='privacy-who-can-call'>
            <div className='privacy-who-can-call-header'>
                <div>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>
                <div><span>Call Allow</span></div>
            </div>
            <div><span>Who can call me?</span></div>
            <label htmlFor="call-every">
                <span>Everybody</span>
                <input type="radio" name="" id="call-every" />
            </label>
            <label htmlFor="call-myc">
                <span>My Contacts</span>
                <input type="radio" name="" id="call-myc" />
            </label> 
            <label htmlFor="call-nobody">
                <span>Nobody</span>
                <input type="radio" name="" id="call-nobody" />
            </label>                       
        </div>
    )
}

function Privacy_and_Security_Profile_Photo(){
    let navigate = useNavigate()
    return(
        <div className='privacy-profile-photo'>
            <div className='privacy-profile-photo-header'>
                <div>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>
                <div><span>Profile Photo</span></div>
            </div>
            <div className='privacy-profile-photo-body-one'>
                <span>Who can see my profil photo?</span>              
            </div>
            <label htmlFor="">
                <span>Everbody</span>
                <input type="radio" name="" id="" />
            </label>
            <label htmlFor="">
                <span>My Contacts</span>
                <input type="radio" name="" id="" />
            </label>
            <label htmlFor="">
                <span>Nobody</span>
                <input type="radio" name="" id="" />
            </label>                        
        </div>
    )
}

function Privacy_and_Security_Last_Seen(){
    let navigate = useNavigate()
    return(
        <div className='privacy-last-seen'>
            <div className='privacy-last-seen-header'>
                <div className='privacy-last-seen-header-icon'>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>    
                <div className='privacy-last-seen-header-text'><span>Last seen and online</span></div>          
            </div>
            <div className='privacy-last-seen-first-body'>
                <div>
                    <span>Who can see my last seen?</span>
                </div>
                <label htmlFor="last-seen-everybody">
                    <span>Everybody</span>
                    <input type="radio" name="" id="last-seen-everbody" />
                </label>
                <label htmlFor="last-seen-my" className=''>
                    <span>My Contacts</span>
                    <input type="radio" name="" id="last-seen-my" />
                </label>
                <label htmlFor="last-seen-no">
                    <span>Nobody</span>
                    <input type="radio" name="" id="last-seen-no" />
                </label>                
            </div>
            <div className='privacy-last-seen-second-body'>
                <div>
                    <span>Who can see when I’m online?</span>
                </div>
                <label htmlFor="last-seen-second-everybody">
                    <span>Everybody</span>
                    <input type="radio" name="" id="last-seen-second-everybody" />
                </label>
                <label htmlFor="last-seen-second-my" className=''>
                    <span>My Contacts</span>
                    <input type="radio" name="" id="last-seen-second-my" />
                </label>
                <label htmlFor="last-seen-second-no">
                    <span>Nobody</span>
                    <input type="radio" name="" id="last-seen-second-no" />
                </label>                
            </div>            
        </div>
    )
}

function Privacy_and_Security_Phone_Number(){
    let navigate = useNavigate()
    return(
        <div className='privacy-phone-number'>
            <div className='privacy-phone-number-header'>
                <div className='privacy-phone-number-header-icon'>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>    
                <div className='privacy-phone-number-header-text'><span>Phone Number</span></div>          
            </div>
            <div className='privacy-phone-who-can-call-me'>
                <span>Who can see my phone number?</span>
            </div>
            <label className='privacy-phone-select-everybody'>
                <span>Everybody</span>
                <input type="radio" name="" id="everybody" />
                <span></span>
            </label>
            <label className='privacy-phone-select-my-contacts'>
                <span>My Contacts</span>
                <input type="radio" name="" id="" />
            </label>
            <label className='privacy-phone-select-nobody' htmlFor='nobody'>
                <span>Nobody</span>
                <input type="radio" name="" id="nobody" />
                <span></span>
            </label>                        
        </div>
    )
}

function Privacy_and_Security(){
    let navigate = useNavigate()

    return(
        <div className='privacy-security-main'>
                <div className='privacy-security-main-header'>
                    <div className='privacy-security-main-icon'>
                        <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                    </div>
                    <div className='privacy-security-main-text'><span>Privacy and Security</span></div>   
                </div>
                <div className='privacy-security-main-body'>
                    <div className='privacy-security-main-body-first'>
                        <div>
                            <span>Who can see my personal info</span>
                        </div>
                        <NavLink to='profile-photo/'>
                            <div className='profil-left'>
                                <div>Profil photo</div>
                                <div>Everybody</div>
                            </div>
                            <div className='profil-right'><span class="material-symbols-outlined"> navigate_next</span></div>
                        </NavLink>
                        <NavLink to='last-seen_online/'>
                            <div>
                                <div>Last seen time and online</div>
                                <div>Everybody</div>
                            </div>
                            <div><span class="material-symbols-outlined"> navigate_next</span></div>
                        </NavLink>
                        <NavLink to='phone-number/'>
                            <div>
                                <div>Phone number</div>
                                <div>Everybody</div>                                
                            </div>
                            <div><span class="material-symbols-outlined"> navigate_next</span></div>
                        </NavLink>
                        <NavLink to='call-allow/'>
                            <div>
                                <div>Who can call me?</div>
                                <div>Everybody</div>                                
                            </div>
                            <div><span class="material-symbols-outlined"> navigate_next</span></div>
                        </NavLink>                        
                    </div>
                    <div className='privacy-security-main-body-second'>
                        <NavLink to=''> 
                            <div>
                                <div>Groups</div>
                                <div>Everybody</div>                                
                            </div>
                            <div><span class="material-symbols-outlined"> navigate_next</span></div>
                        </NavLink>   
                        <NavLink to=''>
                            <div>
                                <div>Blocked Users</div>
                                <div>3</div>                                
                            </div>
                            <div><span class="material-symbols-outlined"> navigate_next</span></div>
                        </NavLink>                                               
                    </div>
                </div>
        </div>
    )
}

function Privacy_Security_Capsule(){
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme==='dark'){
        document.querySelector("div").setAttribute("data-theme", "dark")
    }
    else{
        document.querySelector("div").setAttribute("data-theme", "light")
    }   
    return(
        <div className='privacy-security-capsule'>
            <Outlet/>
        </div>
    )
}

function SelectLanguage(){
    let navigate = useNavigate()

    return(
        <div className='language-main'>
            <div className='language-main-header'>
                <div className='go-back-main-settings-icon'>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>
                <div className='go-back-main-settings-text'><span>Language</span></div>                
            </div>
            <div className='language-main-body'>
                <div className='select-language'>
                    <div>English</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>German</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Chinese</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Azerbaijan</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>French</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Italian</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Spanish</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Turkish</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Finnish</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Catalan</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Croatian</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Czech</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Hungarian</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Dutch</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Indian</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Indonesian</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
                <div className='select-language'>
                    <div>Arabic</div>
                    <div><input type="radio" name="" id="" /></div>
                </div>
            </div>
        </div>
    )
}

function SettingsMenu(){
    let navigate = useNavigate()
    const setDarkmode = () =>{
        document.querySelector("body").setAttribute("data-theme", "dark")
        document.querySelector("div").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightmode = () =>{
        document.querySelector("body").setAttribute("data-theme", "light")
        document.querySelector("div").setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light")
    }
    let toggleTheme = (e) => {
        if(e.target.checked) setDarkmode();
        else setLightmode()
        console.log('ss')
    }
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme==='dark'){
        setDarkmode();
    }
    else{
        setLightmode();
    }
    return(
        <div className='settings-menu'>
            <div className='settings-menu-header'>
                <div className='go-back'>
                    <NavLink to='' onClick={()=>navigate(-1)}><i class="material-icons">arrow_back</i></NavLink>
                </div>
                <div className='go-back-settings'><span>Settings</span></div>
            </div>
            <NavLink to='my-profile/' className='go-to-profile'>
                <div>
                    <img src={require("../woman.png")} alt="" />
                </div>
                <div>
                    <div>
                        <div>FirstName Surname</div>
                        <div>Programmer</div>
                    </div>
                </div>
            </NavLink>
            <NavLink to='' className='go-to-notifications'><span class="material-symbols-outlined">notifications</span><span>Notifications</span></NavLink>
            <NavLink to=''className='go-to-general-settings'><span class="material-symbols-outlined">settings</span><span>General Settings</span></NavLink>
            <NavLink to='account/' className='go-to-account' ><span class="material-symbols-outlined">key</span><span>Account</span></NavLink>
            <NavLink to='chat-background/' className='go-to-chat-wallpaper'><span class="material-symbols-outlined">imagesmode</span><span>Chat WallPaper</span></NavLink>
            <div className='switch-night-mode'><span class="material-symbols-outlined">dark_mode</span><span>Night Mode</span><div><label><input type="checkbox" onChange={toggleTheme} defaultChecked={selectedTheme==='dark'}/><span className='slider'></span></label></div></div>
            <NavLink to='' className='go-to-linked-devices'><span class="material-symbols-outlined">link</span><span>Linked Devices</span></NavLink>
            <NavLink to='language/' className='go-to-language'><span class="material-symbols-outlined">language</span><span>Language</span></NavLink>
            <NavLink to='privacy-&-security' className='go-to-privacy-and-security'><span class="material-symbols-outlined">gpp_maybe</span><span>Privacy and Security</span></NavLink>
            <NavLink to='' className='go-to-help'><span class="material-symbols-outlined">help</span><span>Help</span></NavLink>
        </div>
    )
}
 
function SettingsCapsule(){
    return(
        <div className='settings-capsule'>
            <Outlet/>
        </div>
    )
}

function SettingsMain(){
    return(
        <div className='settings-main'>
            <div className='settings-main-left'>
                <Outlet/>
            </div>
            <div className='settings-main-right'>
                <div className='settings-main-right-center'>
                    <div className='settings-main-right-center-image'><img src={require('../images/set-color-images/right-settings.png')} alt="" /></div>
                    <div className='settings-main-right-center-text'><div>Chatgram Web</div><div>Lorem ipsum dolor sit amet consectetur. Et morbi id enim ullamcorper. Ut faucibus auctor quis nisi praesent sit tincidunt amet.</div></div>
                </div>
            </div>
        </div>
    )
}

export {SettingsMenu,SettingsCapsule,SelectLanguage,Privacy_Security_Capsule,Privacy_and_Security,Privacy_and_Security_Phone_Number,Privacy_and_Security_Last_Seen,
Privacy_and_Security_Profile_Photo,Who_Can_Call_Me,Account_Capsule,Account_Main,My_Profile,Chat_Background_Main,Chat_Background_Menu,Set_Color};
export default SettingsMain;