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
    let [send, setSend] = useState(false)      
    console.log(send) 
    let ulRef = useRef(null);

    useEffect(() => {
        ulRef.current.children[0].focus();
      }, []);
    return(
        <div className="enterance">
            <div className="left">
                <div className="header">
                    <div className="button">
                        <span class="material-symbols-outlined"> menu </span>
                    </div>
                    <input type="text" placeholder='Search'/>
                </div>
                <div className="center">
                    <div className="messages">
                        {data.map((value, index)=>{
                            return(           
                                <NavLink className='message-a' to={'/'+value.username.toLowerCase()+' '+value.surname.toLowerCase()} onClick={()=>setSend(true)} ref={ulRef} key={index}>
                                    {/* <div style={{"display":"none"}}>{send==true?<Messages data={value}/>:null}</div>                                     */}
                                    <div className="message-div">
                                        <div className="left">
                                            {/* <img src={require('../images/user1.jpeg')} alt="" /> */}                                            
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
                    </div>
                    <div className="contact"></div>
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