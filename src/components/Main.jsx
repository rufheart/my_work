import { useContext, useEffect, useState, useRef} from 'react';
import { NavLink, useParams,useMatch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../css/main.css';
import { MyContext } from './Context';
import Cards from './Cards';
import Contacts from './Contacts';

function Messages(props){
    let data = props.data
    let [icon_change, setIconChange] = useState('mic')
    let {url} = useParams('url');
    let [deyer, setDeyer] = useState()
    let IconChanger = (e)=>{
        if(e.target.value){
            setIconChange('send')
        }
        else{
            setIconChange('mic')
        }
    }
    return(
        <div className="messages">
            <div className="head">
                <div className="left">
                    <div className="image-div">
                        <div className="image"></div>
                    </div>
                    <div className="about">
                        <div className="username">{url.toUpperCase()}</div>
                        <div className='date-ago'>last seen 5 minute ago</div>
                    </div>
                </div>
                <div className="right">
                    <div className="search"><i className="fas fa-search"></i></div>
                    <div className="phone"><i className="fa-solid fa-phone"></i></div>
                    <div className="dot"><i className="fas fa-ellipsis-h"></i></div>
                </div>
            </div>
            <div className="main">
                <div>
                    
                </div>
                <div className="all-messages">
                    <div className="read-messages">
                        
                        <div className="my-message">
                            <div className="content">Salam necesen?</div>
                        </div>
                        <div className="my-message">
                            <div className="content">ne vaxt geleceksen?</div>
                        </div>
                        <div className="my-message">
                            <div className="content">gelende xeber edersen sene sozum olacqq yadinnan cixmazki?</div>
                        </div>
                        <div className="my-message">
                            <div className="content">Lorem ipsum dolor sit,  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam quos doloremque praesentium delectus labore, quod dicta voluptas aliquam nam, sunt cupiditate dolores. Officia repellat sapiente voluptas, perferendis aliquam a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis labore id ex. Placeat reiciendis quos, tempora porro sapiente officiis, harum iusto qui animi repellendus obcaecati, eaque explicabo alias quam facilis? amet consectetur adipisicing elit. Sapiente aut magni dolore itaque, molestias vitae assumenda odio quia neque ab sed dolorum corporis hic alias quod ut eius, vel dolores?</div>
                        </div>
                        <div className="target-message">
                            <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae delectus nulla? Corporis magni quibusdam ea aliquam enim ad eos? Culpa ex quo iusto explicabo. Velit veniam unde soluta neque.</div>
                        </div>
                                            
                    </div>
                    <div className="write-messages">
                        <div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Messages' onChange={IconChanger}></textarea>
                            <button><span class="material-symbols-outlined"> attach_file </span></button>
                        </div>
                        {}
                        <span class="material-symbols-outlined"> {icon_change} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function  Welecome(){
    return(
        <div className="welecome">
            <i className="fas fa-user-secret"></i>
            <h1 className='welecome'>Welecome Anonim messages</h1>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugiat maxime debitis eveniet eius odio nihil accusamus repellat enim reprehenderit temporibus corporis, repudiandae, veniam fugit harum est aut, ullam blanditiis.</div>
            {/* <img src={require('../images/welecome.webp')} alt="" /> */}
        </div>
    )
}

function ListChat(){

    return(
        <div>         
        </div>
    )
}

function Enterance(){ 
    let data = useContext(MyContext);
    let [sudo, setSudo] = useState(false)
    let [page_active, setPageActive] = useState('messages')
    let [IsActive, setIsActive] = useState('chat')
    let [menu_or_arrow, setMenuArrow] = useState(false)
    let [send, setSend] = useState(false)      
    let [search_menu, setSearchMenu] = useState(false)
    let [search_select, setSearchSelect] = useState('chats')
    let [input_value, setInputValue] = useState()
    let inputRef = useRef(null);
    function Icon_Changer(e){
        setMenuArrow(true)
        setTimeout(Duration, 100)
        setTimeout(Page_Change,200)
    }
    function Reverse(){
        setSudo(false)
        setMenuArrow(false)
        setTimeout(Duration, 100)
        setTimeout(Page_Change_Reverse,200)
    }
    function Page_Change(){
        setSearchMenu(true)
        setPageActive('search')
    }
    function Page_Change_Reverse(){
        setSearchMenu(false)
        setPageActive('messages')
    }
    function Duration(){
        if(menu_or_arrow==false){
            setSudo(!sudo)
        }
    }
    let InputChange=(e)=>{
        setInputValue(e.target.value)
    }
    return(
        <div className="enterance">
            <div className="left">
                <div className="header">
                    <button className="button">
                        {sudo==false?<span class="material-symbols-outlined" style={menu_or_arrow==true?{"transform":"rotate(90deg)","transition":"transform 0.4s"}:{"transform":"rotate(0deg)","transition":"transform 0.2s"}} onClick={() => {inputRef.current.focus()}}> menu </span>:
                        <span class="material-symbols-outlined" onClick={Reverse} style={menu_or_arrow==true?{"transform":"rotate(90deg)","transition":"transform 0.2s"}:{"transform":"rotate(0deg)","transition":"transform 0.4s"}}>arrow_downward</span>}
                    </button>
                    <div>
                        <input type="text" placeholder='Search' onClick={Icon_Changer} ref={inputRef} onChange={e=>InputChange(e)}/>
                        <button><span class="material-symbols-outlined"> search </span></button>
                    </div>
                </div>
                <div className='enterance-body'>
                    <div style={page_active=='messages'?{left:"0%",transition:"left 0.5s"}:{"border-top":"1px solid blue",left:"-100%",transition:"left 1s"}}>
                        {search_menu==false?<div className="messages">
                            {data.map((value, index)=>{
                                return(           
                                    <NavLink htmlFor='zz' to={'/'+value.username.toLowerCase()+' '+value.surname.toLowerCase()} onClick={()=>setSend(true)} key={index}>                                    
                                        <div className="message-div">
                                            <div className="left">                                           
                                                <div className="image"></div>
                                            </div>
                                            <div className="center">
                                                <div className="username">{value.username} {value.surname}</div>
                                                <div className="last-message"><i className="fas fa-check"></i> Salam necesiz? ne vaxt geleceksiz? helloasasasas
                                                asasasasasasasasasa
                                                saasasasas</div>
                                            </div>
                                            <div className='right'>
                                                <div className="date">Sonday</div>
                                                <div className='messages'>12</div>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })}
                            </div>:null
                        }
                    </div>
                    <div style={page_active=='search'?{left:"0%",transition:"left 0.5s"}:{"border-top":"1px solid blue",left:"-100%",transition:"left 1s"}}>
                        {search_menu==true?
                            <div className='search-menu'>
                            <div className='search-menu-header'>
                                <button id='search-menu-header-chats' className={IsActive=='chat'?'active':null} onClick={()=>{setIsActive('chat');setSearchSelect('chats')}}><span>Chat</span><span></span></button>
                                <button id='search-menu-header-media' className={IsActive=='media'?'active':null} onClick={()=>{setIsActive('media');setSearchSelect('media')}}><span>Media</span><span></span></button>
                                <button id='search-menu-header-links' className={IsActive=='link'?'active':null} onClick={()=>{setIsActive('link');setSearchSelect('links')}}><span>Links</span><span></span></button>
                                <button id='search-menu-header-files' className={IsActive=='file'?'active':null} onClick={()=>{setIsActive('file');setSearchSelect('files')}}><span>Files</span><span></span></button>
                                <button id='search-menu-header-music' className={IsActive=='music'?'active':null} onClick={()=>{setIsActive('music');setSearchSelect('music')}}><span>Music</span><span></span></button>
                                <button id='search-menu-header-voice' className={IsActive=='voice'?'active':null} onClick={()=>{setIsActive('voice');setSearchSelect('voices')}}><span>Voices</span><span></span></button>
                            </div>
                            <div className='search-menu-body'>
                                {search_select=='chats'?
                                    <div>
                                        {data.map((value, index)=>{
                                            if(value.username==input_value){
                                                console.log('yehu')
                                            }
                                        return(           
                                            <NavLink htmlFor='zz' to={'/'+value.username.toLowerCase()+' '+value.surname.toLowerCase()} onClick={()=>setSend(true)} key={index}>
                                                <div className="message-div">
                                                    <div className="left">                                           
                                                        <div className="image"></div>
                                                    </div>
                                                    <div className="center">
                                                        <div className="username">{value.username} {value.surname}</div>
                                                        <div className="last-message"><i className="fas fa-check"></i> Salam necesiz? ne vaxt geleceksiz? helloasasasas
                                                        asasasasasasasasasa
                                                        saasasasas</div>
                                                    </div>
                                                    <div className='right'>
                                                        <div className="date">Sonday</div>
                                                        <div className='messages'>12</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            )
                                        })}
                                    </div>:null
                                }
                                {search_select=='media'?
                                    <div>
                                        media
                                    </div>:null
                                }
                                {search_select=='links'?
                                    <div>
                                        Links
                                    </div>:null
                                }
                                {search_select=='files'?
                                    <div>
                                        Files
                                    </div>:null
                                }
                                {search_select=='music'?
                                    <div>
                                        Music
                                    </div>:null
                                }
                                {search_select=='voices'?
                                    <div>
                                        Voices
                                    </div>:null
                                }
                            </div>
                        </div>:null
                        }                        
                    </div>
                </div>               
            </div>
            <div className="right">
                <Outlet />
            </div>
        </div>        
    )    
}

function General(){
    return(
        <div className='general-main'>
            <div className='general-main-outlet'>
                <Outlet/>
            </div>
            <div className='general-main-absolute-menu'>
                <NavLink htmlFor="choice" to='' >
                    <span className="material-symbols-outlined">chat</span>
                </NavLink>
                <NavLink htmlFor="choice" to='card/'>
                    <span className="material-symbols-outlined">credit_card</span>
                </NavLink>
                <NavLink htmlFor="choice" to='group/'>
                    <span className="material-symbols-outlined">add</span>
                </NavLink>
                <NavLink htmlFor="choice" to='contacts/'>
                    <span className="material-symbols-outlined">person</span>
                </NavLink>
                <NavLink htmlFor="choice" to='settings/'>
                    <span className="material-symbols-outlined">settings</span>
                </NavLink>      
            </div>
        </div>        
    )
}

function Main(){
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
        <div className='main'>
            <Outlet/>
        </div>                    
    )
}




export { Messages, Welecome, General, Enterance};
export default Main;