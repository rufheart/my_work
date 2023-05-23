import '../css/Cards.css'
import { useState,useRef,useEffect, createElement, Children} from 'react'
import { NavLink ,Link, Outlet,useNavigate } from 'react-router-dom'

function Card_I_Bought(){
    return(
        <div className='card-i-bought-main'>
            <div className='card-i-bought-main-center'>
                <div className='card-i-bought-main-center-header'>
                    <div>Name Surname Name-Card</div>
                    <div>
                        <button><span class="material-symbols-outlined"> delete </span><span>Delete</span></button>
                        <button><span class="material-symbols-outlined"> share </span><span>Share</span></button>    
                    </div>                    
                </div>
                <div className='card-i-bought-main-center-image'>
                    <img src={require('../woman.png')} alt="" />
                </div>
                <div className='card-i-bought-main-center-info'>
                    <div className='card-i-bought-main-center-info-name'>
                        <div>Name Surname Name</div>
                        <div>Programmer</div>
                    </div>
                    <div className='card-i-bought-main-center-info-personal-info'>
                        <div> 
                            Personal Information
                        </div>
                        <div>
                            <div><span>Birthday:</span><span>01/05/1996</span></div>
                            <div><span>Family Status:</span><span>Single</span></div>
                            <div><span>Country:</span><span>Azerbaijan</span></div>
                            <div><span>Region:</span><span>Baku</span></div>
                            <div><span>Convicion:</span><span>No</span></div>
                            <div className='card-i-saved-main-center-info-personal-info-home-address'>
                                <div>Home address:</div>
                                <div>
                                    <span>Fathali Khan Khoyski,109/121, Semed Vurgun, 253/121, Memar Echemi, 112/876</span>
                                    <span>Fathali Khan Khoyski,109/121, Semed Vurgun, 253/121, Memar Echemi, 112/876</span>
                                </div>
                            </div> 
                            <div className='card-i-saved-main-center-info-personal-info-office-address'>
                                <div>Office address:</div>
                                <div>
                                    <span>Fathali Khan Khoyski,109/121, Semed Vurgun, 253/121, Memar Echemi, 112/876</span>
                                    <span>Fathali Khan Khoyski,109/121, Semed Vurgun, 253/121, Memar Echemi, 112/876</span>
                                </div>
                            </div>                                 
                            <div className='card-i-saved-main-center-info-personal-info-cars'>
                                <div>Cars:</div>
                                <div>
                                    <div>
                                        <span>10-AA-212/</span>
                                        <span>Mercedes/</span>
                                        <span>E-class/</span>
                                        <span>2015/</span>
                                        <span>Black</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>       
                    <div className='card-i-bought-main-center-info-contact-information'>
                        <div>Contact Information</div>
                        <div>
                            <div>Phone numbers:</div>
                            <div>
                                <span>070-585-67-22</span>
                                <span>070-503-66-89</span>
                                <span>070-222-95-32</span>                                       
                            </div>
                        </div>
                        <div>
                            <div>Email Address:</div>
                            <div>
                                <span>rufatt@gmail.com</span>
                                <span>rufatt@gmail.com</span>
                                <span>rufatt@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <div>Social Links:</div>
                            <div>
                                <Link to='https://linkedIn.com/in/teymur-recebov'>https://linkedIn.com/in/teymur-recebov</Link>
                                <Link to='https://linkedIn.com/in/teymur-recebov'>https://linkedIn.com/in/teymur-recebov</Link>
                                <Link to='https://linkedIn.com/in/teymur-recebov'>https://linkedIn.com/in/teymur-recebov</Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-i-bought-main-center-info-family-infromation'>
                        <div>Family Persons</div>
                        <div>
                            <div><span>Wife:</span><span>Ehmedova Lale</span></div>
                            <div><span>Children:</span><span>Ehmedova Gulzar</span></div>
                            <div><span>Trustee's:</span><span>Alena Selza</span></div>
                            <div><span>Relatives:</span><span>Ehemedov Zakir</span></div>
                        </div>
                    </div>
                    <div className='card-i-bought-main-center-info-other-information'>
                        <div>Other Information</div>
                        <div>
                            <div><span>Friends:</span><div><span>Veliyev Mahir</span></div></div>
                            <div><span>Work Colleagues:</span><div><span>Valehov Asef</span></div></div>
                            <div><span>Business Partners:</span><div><span>Sadiqov Zahir</span></div></div>
                            <div><span>Most visted restaurants:</span><div><span>Caykovski</span></div></div>
                            <div><span>Most visted hotels:</span><div><span>For Season</span></div></div>
                            <div><span>Hobbies:</span><div><span>Table Tennis</span><span>Football</span></div></div>
                            <div><span>Friends:</span><div><span>Veliyev Mahir</span></div></div>
                            <div><span>Work Colleagues:</span><div><span>Valehov Asef</span></div></div>
                            <div><span>Business Partner:s</span><div><span>Sadiqov Zahir</span></div></div>
                            <div><span>Most visted restaurants:</span><div><span>Caykovski</span></div></div>
                            <div><span>Most visted hotels:</span><div><span>For Season</span></div></div>
                            <div><span>Hobbies:</span><div><span>Table Tennis</span><span>Football</span></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Bought_Cards(){
    let id=7
    return(
        <div className='bought-card-main'>
            <div className='bought-card-main-header'>
                <div>
                    <div><NavLink to=''><span>Create new card</span><span class="material-symbols-outlined"> add_circle </span></NavLink></div>
                    <div>
                        <input type="text" />
                        <button><span class="material-symbols-outlined"> search </span></button>
                    </div>
                </div>
                <div>
                    <span>36 Cards I bought</span>
                </div>
            </div>
            <div className='bought-card-main-body'>
                <NavLink to={`/card/add/${id}/bought-card/`}>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>                                                                               
            </div>
        </div>          
    )
}

function Card_Created_By_Me(){
    return(
        <div className='card-created-by-me-main'>
            <div className='card-created-by-me-main-center'>
                <div className='card-created-by-me-main-center-header'>
                    <div>Name Surname Name-Card</div>
                    <div>
                        <button><span class="material-symbols-outlined"> edit </span><span>Edit</span></button>
                        <button><span class="material-symbols-outlined"> delete </span><span>Delete</span></button>
                        <button><span class="material-symbols-outlined"> share </span><span>Share</span></button>    
                    </div>                    
                </div>
                <div className='card-created-by-me-main-center-image'>
                    <img src={require('../woman.png')} alt="" />
                </div>
                <div className='card-created-by-me-main-center-info'>
                    <div className='card-created-by-me-main-center-info-name'>
                        <div>Name Surname Name</div>
                        <div>Programmer</div>
                    </div>
                    <div className='card-created-by-me-main-center-info-personal-info'>
                        <div> 
                            Personal Information
                        </div>
                        <div>
                            <div><span>Birthday:</span><span>01/05/1996</span></div>
                            <div><span>Family Status:</span><span>Single</span></div>
                            <div><span>Country:</span><span>Azerbaijan</span></div>
                            <div><span>Region:</span><span>Baku</span></div>
                            <div><span>Convicion:</span><span>No</span></div>
                            <div className='card-created-by-me-main-center-info-personal-info-home-address'>
                                <div>Home address:</div>
                                <div>
                                    <span>Fathali Khan Khoyski,109/121, Semed Vurgun, 253/121, Memar Echemi, 112/876</span>
                                    <span>Fathali Khan Khoyski,109/121, Semed Vurgun, 253/121, Memar Echemi, 112/876</span>
                                </div>
                            </div> 
                            <div className='card-created-by-me-main-center-info-personal-info-office-address'>
                                <div>Office address:</div>
                                <div>
                                    <span>Fathali Khan Khoyski,109/121, Semed Vurgun, 253/121, Memar Echemi, 112/876</span>
                                    <span>Fathali Khan Khoyski,109/121, Semed Vurgun, 253/121, Memar Echemi, 112/876</span>
                                </div>
                            </div>                                 
                            <div className='card-created-by-me-main-center-info-personal-info-cars'>
                                <div>Cars:</div>
                                <div>
                                    <div>
                                        <span>10-AA-212/</span>
                                        <span>Mercedes/</span>
                                        <span>E-class/</span>
                                        <span>2015/</span>
                                        <span>Black</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>       
                    <div className='card-created-by-me-main-center-info-contact-information'>
                        <div>Contact Information</div>
                        <div>
                            <div>Phone numbers:</div>
                            <div>
                                <span>070-585-67-22</span>
                                <span>070-503-66-89</span>
                                <span>070-222-95-32</span>                                       
                            </div>
                        </div>
                        <div>
                            <div>Email Address:</div>
                            <div>
                                <span>rufatt@gmail.com</span>
                                <span>rufatt@gmail.com</span>
                                <span>rufatt@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <div>Social Links:</div>
                            <div>
                                <Link to='https://linkedIn.com/in/teymur-recebov'>https://linkedIn.com/in/teymur-recebov</Link>
                                <Link to='https://linkedIn.com/in/teymur-recebov'>https://linkedIn.com/in/teymur-recebov</Link>
                                <Link to='https://linkedIn.com/in/teymur-recebov'>https://linkedIn.com/in/teymur-recebov</Link>
                            </div>
                        </div>
                    </div>
                    <div className='card-created-by-me-main-center-info-family-infromation'>
                        <div>Family Persons</div>
                        <div>
                            <div><span>Wife:</span><span>Ehmedova Lale</span></div>
                            <div><span>Children:</span><span>Ehmedova Gulzar</span></div>
                            <div><span>Trustee's:</span><span>Alena Selza</span></div>
                            <div><span>Relatives:</span><span>Ehemedov Zakir</span></div>
                        </div>
                    </div>
                    <div className='card-created-by-me-main-center-info-other-information'>
                        <div>Other Information</div>
                        <div>
                            <div><span>Friends:</span><div><span>Veliyev Mahir</span></div></div>
                            <div><span>Work Colleagues:</span><div><span>Valehov Asef</span></div></div>
                            <div><span>Business Partner:s</span><div><span>Sadiqov Zahir</span></div></div>
                            <div><span>Most visted restaurants:</span><div><span>Caykovski</span></div></div>
                            <div><span>Most visted hotels:</span><div><span>For Season</span></div></div>
                            <div><span>Hobbies:</span><div><span>Table Tennis</span><span>Football</span></div></div>
                            <div><span>Friends:</span><div><span>Veliyev Mahir</span></div></div>
                            <div><span>Work Colleagues:</span><div><span>Valehov Asef</span></div></div>
                            <div><span>Business Partner:s</span><div><span>Sadiqov Zahir</span></div></div>
                            <div><span>Most visted restaurants:</span><div><span>Caykovski</span></div></div>
                            <div><span>Most visted hotels:</span><div><span>For Season</span></div></div>
                            <div><span>Hobbies:</span><div><span>Table Tennis</span><span>Football</span></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Created_Card(){
    return(
        <div className='created-card-main'>
            <div className='created-card-main-header'>
                <div>
                    <div><NavLink to=''><span>Create new card</span><span class="material-symbols-outlined"> add_circle </span></NavLink></div>
                    <div>
                        <input type="text" />
                        <button><span class="material-symbols-outlined"> search </span></button>
                    </div>
                </div>
                <div>
                    <span>36 Created Cards</span>
                </div>
            </div>
            <div className='created-card-main-body'>
                <NavLink to={`/card/add/${4}/created-by-me`}>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>                                                                               
            </div>
        </div>        
    )
}

function Saved_Card(){
    let navigate = useNavigate()
    let id = 7
    return(
        <div className='saved-card-main'>
            <div className='saved-card-main-header'>
                <div>
                <div><NavLink to=''><span>Create new card</span><span class="material-symbols-outlined"> add_circle </span></NavLink></div>
                    <div>
                        <input type="text" />
                        <button><span class="material-symbols-outlined"> search </span></button>
                    </div>
                </div>
                <div>
                    <span>36 Saved Cards</span>
                </div>
            </div>
            <div className='saved-card-main-body'>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>
                <NavLink to=''>
                    <div>
                        <span>Adi Soyadi</span>
                        <span>02.03.2023</span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined"> chevron_right </span>
                    </div>
                </NavLink>                                                                               
            </div>
        </div>
    )
}


function My_Cards(){
    return(
        <div className='created-saved-bought-main'>
            <div className='created-saved-bought-main-center'>
                <div className='created-saved-bought-main-center-left'>
                    <div className='created-saved-bought-main-center-left-profile'>
                        <div>
                            <span>
                                <img src={require("../woman.png")} alt="" />
                                <label htmlFor="created-saved-bought-main-center-left-profile-id">
                                    <input type="file" id='created-saved-bought-main-center-left-profile-id'/>
                                    <span class="material-symbols-outlined"> photo_camera </span>
                                </label>
                            </span>
                            <span>Rufat Nurisssssssssssssssssssssssss</span>
                            <span>Programmer</span>
                        </div>
                        <div></div>
                    </div>
                    <div className='created-saved-bought-main-center-left-info'>
                        <div>
                            <NavLink to={'/'+'contacts/'}><span class="material-symbols-outlined"> person </span><span>Contacts</span></NavLink>
                            <NavLink to={`/card/add`}><span class="material-symbols-outlined"> add </span><span>Create new card</span></NavLink>
                            <NavLink to=''><span class="material-symbols-outlined"> credit_card </span><span>My Cards</span></NavLink>
                        </div>
                    </div>
                </div>
                <div className='created-saved-bought-main-center-right'>
                    <div className='created-saved-bought-main-center-right-header'>
                        <NavLink to='saved-cards/'><span>Saved Cards</span></NavLink>
                        <NavLink to='created-cards/'><span>Created Cards</span></NavLink>
                        <NavLink to='bought-cards/'><span>Cards I Bought</span></NavLink>
                    </div>
                    <div className='created-saved-bought-main-center-right-body'>
                        <Outlet/>
                    </div>
                </div>                
            </div>
        </div>
    )
}

function AnotherCard({color,SetColor}){
    let [card_holder, setCardHolder] = useState()
    let [card_number, setCardNumber] = useState()
    let [sender, setSender] = useState(true)
    let [count, setCount] = useState()
    let navigate = useNavigate()
    let handlerInputCardHolderName = (e)=>{
        setCardHolder(card_holder=e.target.value)
        setCount(count=card_holder.length)
    }
    console.log(color)
    return(
        <div className='another-card'>
            <button >sender</button>
            <div className='another-card-header'>
                <div className='another-card-header-left'>Card Information</div>              
                <NavLink to='' onClick={() => navigate(-1)}>Pay with Saved Cards</NavLink>
            </div>            
            <form className='another-card-body' onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <label htmlFor="">Cardholder Name</label>
                    <input type="text" placeholder='Tom Cruz' onChange={e=>handlerInputCardHolderName(e)}/>
                </div>
                <div>
                    <label htmlFor="">Card Number</label>
                    <input type="text" name="" id="" placeholder='1234 2345 6547 7859'/>
                </div>
                <div>
                    <div>
                        <div><label htmlFor="">Expiry Date</label><select name="" id=""><option value="">Month</option></select></div>
                        <div><select name="" id=""><option value="">Year</option></select></div>                            
                    </div>
                    <div>
                        <label htmlFor="">CVV</label>
                        <input type="text" name="" id="" placeholder='123'/>
                    </div>
                </div>
            </form>
        </div>
    )
}

function Saved_Credit_Card(){
    return(
        <div className='payment-body-left-two'>
            <div className='payment-body-left-header'>
                <div>Card Information</div>
                <NavLink to='another-card/'>Pay with Another Card</NavLink>
            </div>
            <div className='payment-body-left-body'>
                <div className='card-example'>
                    <div className='card-example-header'><input type="radio" name="" id="" /><span>Garanti</span><span>AAB</span></div>
                    <div className='card-example-body'>
                        <div className='card-example-body-top'>
                            <div className='card-example-body-top-left'><span class="material-symbols-outlined">add</span><span>Garanti</span><span>AAB</span></div>
                            <div className='card-example-body-top-right'><i class="fa-brands fa-cc-visa"></i></div>
                        </div>
                        <div className='card-example-body-body'>
                            <div>
                                <p>123456********7899</p>
                                <p>08/2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-example'>
                    <div className='card-example-header'><input type="radio" name="" id="" /><span>Garanti</span><span>AAB</span></div>
                    <div className='card-example-body'>
                        <div className='card-example-body-top'>
                            <div className='card-example-body-top-left'><span class="material-symbols-outlined">add</span><span>Garanti</span><span>AAB</span></div>
                            <div className='card-example-body-top-right'><i class="fa-brands fa-cc-visa"></i></div>
                        </div>
                        <div className='card-example-body-body'>
                            <div>
                                <p>123456********7899</p>
                                <p>08/2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-example'>
                    <div className='card-example-header'><input type="radio" name="" id="" /><span>Garanti</span><span>AAB</span></div>
                    <div className='card-example-body'>
                        <div className='card-example-body-top'>
                            <div className='card-example-body-top-left'><span class="material-symbols-outlined">add</span><span>Garanti</span><span>AAB</span></div>
                            <div className='card-example-body-top-right'><i class="fa-brands fa-cc-visa"></i></div>
                        </div>
                        <div className='card-example-body-body'>
                            <div>
                                <p>123456********7899</p>
                                <p>08/2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-example'>
                    <div className='card-example-header'><input type="radio" name="" id="" /><span>Garanti</span><span>AAB</span></div>
                    <div className='card-example-body'>
                        <div className='card-example-body-top'>
                            <div className='card-example-body-top-left'><span class="material-symbols-outlined">add</span><span>Garanti</span><span>AAB</span></div>
                            <div className='card-example-body-top-right'><i class="fa-brands fa-cc-visa"></i></div>
                        </div>
                        <div className='card-example-body-body'>
                            <div>
                                <p>123456********7899</p>
                                <p>08/2023</p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='card-example'>
                    <div className='card-example-header'><input type="radio" name="" id="" /><span>Garanti</span><span>AAB</span></div>
                    <div className='card-example-body'>
                        <div className='card-example-body-top'>
                            <div className='card-example-body-top-left'><span class="material-symbols-outlined">add</span><span>Garanti</span><span>AAB</span></div>
                            <div className='card-example-body-top-right'><i class="fa-brands fa-cc-visa"></i></div>
                        </div>
                        <div className='card-example-body-body'>
                            <div>
                                <p>123456********7899</p>
                                <p>08/2023</p>
                            </div>
                        </div>
                    </div>
                </div>                                                                                                              
            </div>
        </div>  
    )
}


function CardPayment(){   
    let [color, setColor] = useState('red')
    console.log(color,'color')
    return(
        <div className='card-payment'>
            <div style={{"display":"none"}}><AnotherCard setColor={{color,setColor}} /></div>  
            <div className='payment'>
                <div className='payment-header'>
                    <div>
                        <div>Payment Details</div>
                        <div><span>Complete your purchase by providing your payment details.</span></div>
                    </div>
                </div>
                {console.log(color)}
                <div className='payment-body'>
                    <div className='payment-body-left'>
                        <Outlet/>
                        <div className='payment-body-left-footer'>
                            <input type="checkbox" /><span>Pre-information conditions and distance sales contract</span>
                        </div>
                    </div>
                    <div className='payment-body-right'>
                        <div className='payment-body-right-center'>
                            <div className='payment-body-right-center-top'><p>Orded Summary</p></div>
                            <div className='payment-body-right-center-body'>
                                <div className='payment-body-right-center-body-top'>
                                    <div><span><p>Subtotal</p><p>(1 product)</p></span><span><p>699$</p></span></div>
                                    <div><span>Total</span><span>699$</span></div>
                                </div>
                                <div className='payment-body-right-center-body-buttom'>
                                    <button style={{"background":color==true?"#356CD2":null}} onClick={()=>{setColor(true)}}>Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AddCardHeader(){
    let [arrow_up_down, setArrowUpDown] = useState('expand_more')
    let [show_profile_ul, setShowProfileUl] = useState(false)
    let [open_close_profile_ul, setOpenCloseProfileUl] = useState(false)

    let open_close_Ref = useRef();
    useEffect(()=> {
        console.log('yes')
        let handler = (e)=>{
            if(!open_close_Ref.current.contains(e.target)){
                setShowProfileUl(false);
                setArrowUpDown('expand_more')
            }
        }
        document.addEventListener("mousedown",handler)

        return()=>{
            document.removeEventListener("mousedown",handler)
        }
    });    
    return(
        <div className='add-card-main'>
            <div className='add-card-header'>
                <div>
                    <div className='left-side'>
                        <NavLink to=''><img src={require('../image 2.png')} alt="" /><span>Chatgram</span></NavLink>
                    </div>
                    <div className='right-side'>
                        <div>
                            <div>Homepage</div>
                            <div >
                                <div ref={open_close_Ref}><img src={require('../pisik.jpg')} alt="" /><p>Rufat Nuri</p><span class="material-symbols-outlined" onClick={()=>{if(arrow_up_down=='expand_more'){setArrowUpDown('expand_less');setShowProfileUl(true)}else{setArrowUpDown('expand_more');setShowProfileUl(false)}}}>{arrow_up_down}</span></div>
                                {show_profile_ul==true?
                                <ul>
                                    <li>Profie</li>
                                    <li>Yes</li>
                                    <li>No</li>
                                    <li>Log out</li>
                                </ul>:null
                                }
                            </div>                            
                        </div>
                    </div>
                </div>
            </div> 
            <div>
                <Outlet/>
            </div>           
        </div>
    )
}

function AddCardMiddle(){
    let [page_number_button, setPageNumberButton] = useState("black")
    let [extra_office, setExtraOffice] = useState([])
    let [car_plate, setCarPlate] = useState([])
    let [home_div, setHomeDiv] = useState([])
    let [fb_dynamic, setFbDynamic] = useState([])
    let [trustee_div, setTrustee] = useState([])
    let [children_div, setChildren] = useState([])
    let [phone_number, setPhoneNumber] = useState([])
    let [mail_address, setMailAddress] = useState([])
    let [relatives_div, setRelativeDiv] = useState([])
    let [instagram_dynamic, setInstagramDynamic] = useState([])
    let [twitter_dynamic, setTwitterDynamic] = useState([])
    let [extra_friend, setExtraFriend] = useState([])
    let [extra_business, setExtraBusiness] = useState([])
    let [extra_work, setExtraWork] = useState([])
    let [extra_relative_person,setExtraRelativePerson] = useState([])
    let [extra_hotels, setExtraHotels] = useState([])
    let [extra_restaurant, setExtraRestaurant] = useState([])
    let [extra_hobbies, setExtraHobbies] = useState([])
    let [which_panel, setPanel] = useState(1)
    let [arrow_up_down, setArrowUpDown] = useState('expand_more')
    let [show_profile_ul, setShowProfileUl] = useState(false)
    let [open_close_profile_ul, setOpenCloseProfileUl] = useState(false)

    let open_close_Ref = useRef();
    useEffect(()=> {
        console.log('yes')
        let handler = (e)=>{
            if(!open_close_Ref.current.contains(e.target)){
                setShowProfileUl(false);
                setArrowUpDown('expand_more')
            }
        }
        document.addEventListener("mousedown",handler)

        return()=>{
            document.removeEventListener("mousedown",handler)
        }
    });

    function Change(){
        if(which_panel!=1){
            setPanel(which_panel-1)
        }
        else if(which_panel==1){
            setPanel(4)
        }
    }
    function AddHomeAddres(){
        let home = [...home_div,[]]
        setHomeDiv(home)
    }
    function AddPhoneNumber(){
        let phonediv=[...phone_number, []]
        setPhoneNumber(phonediv)
    }
    function AddFacebookDynamic(){
        let fbdiv = [...fb_dynamic, []]
        setFbDynamic(fbdiv)
    }
    const handleInputExtraOffice=(onChangeValue, index)=> {
        let inputdata = [...extra_office]
        inputdata[index] = onChangeValue.target.value;
        setExtraOffice(inputdata) 
    }
    let handleInputExtraMailAddress= (e,index)=>{
        let mail_div = [...mail_address]
        mail_div[index] = e.target.value
        setMailAddress(mail_div)
    }
    let handleInputChildren=(e,index)=>{
        let value_input = [...children_div]
        value_input[index]=e.target.value
        setChildren(value_input)
    }
    let handleInputTrustee=(e,index)=>{
        let value_input = [...trustee_div];
        value_input[index] = e.target.value;
        setTrustee(value_input);
    }
    let handleInputRelative=(e,index)=>{
        let inputdata = [...relatives_div]
        inputdata[index] = e.target.value;
        setRelativeDiv(inputdata)        
    }
    let handleHomeDiv = (onChangeValue, index)=>{
        let home_input = [...home_div]
        home_input[index] = onChangeValue.target.value;
        setHomeDiv(home_input)
    }
    let handleInputCarPlate = (e,index)=>{
        let car_plate_div = [...car_plate]
        car_plate_div[index] = e.target.value
        setCarPlate(car_plate_div)
    }
    let handlePhoneNumber = (e,index)=>{
        let phone_div = [...phone_number]
        phone_div[index] = e.target.value
        setPhoneNumber(phone_div)
    }
    let handleInputFacebook = (e,index) =>{
        let input_value = [...fb_dynamic]
        input_value[index]=e.target.value
        setFbDynamic(input_value)
    }
    let handleInputInstagram = (e,index)=>{
        let value_input = [...instagram_dynamic]
        value_input[index]=e.target.value
        setInstagramDynamic(value_input)
    }
    let handleInputTwitter = (e,index)=>{
        let twitter_div = [...twitter_dynamic]
        twitter_div[index] = e.target.value;
        setTwitterDynamic(twitter_div)
    }
    let handleInputExtraFriend = (e,index)=>{
        let extra_friend_div = [...extra_friend]
        extra_friend_div[index] = e.target.value
        setExtraFriend(extra_friend_div)
    }
    let handleInputExtraBusiness = (e,index)=>{
        let div_extra_business = [...extra_business]
        div_extra_business[index] = e.target.value
        setExtraBusiness(div_extra_business)
    }
    let handleInputExtraWork = (e,index)=>{
        let div_extra_work = [...extra_work]
        div_extra_work[index] = e.target.value
        setExtraWork(div_extra_work)
    }
    let handleInputExtraRelativePerson = (e,index)=>{
        let div_extra_relative_person = [...extra_relative_person]
        div_extra_relative_person[index] = e.target.value
        setExtraRelativePerson(div_extra_relative_person)
    }
    let handleInputExtraHotels = (e,index)=>{
        let div_extra_hotels = [...extra_hotels]
        div_extra_hotels[index] = e.target.value
        setExtraHotels(div_extra_hotels)
    }
    let handleInputExtraRestaurant = (e,index)=>{
        let div_extra_restaurant = [...extra_restaurant]
        div_extra_restaurant[index] = e.target.value
        setExtraRestaurant(div_extra_restaurant)
    }
    let handdleInputExtraHobbies = (e,index)=>{
        let div_extra_hobbies = [...extra_hobbies]
        div_extra_hobbies[index]=e.target.value
        setExtraHobbies(div_extra_hobbies)
    }
    /* Burdan asagi Delete Funksiyalardi*/
    let handleDeletePMailAddress = (index)=>{
        let mail_div=[...mail_address]
        mail_div.splice(index, 1)
        setMailAddress(mail_div)
    }
    let handleDeleteExtraCarPlate = (index)=>{
        let car_plate_div = [...car_plate]
        car_plate_div.splice(index,1)
        setCarPlate(car_plate_div)
    }
    let handleDeletePhoneNumber=(index)=>{
        let phone_div = [...phone_number]
        phone_div.splice(index,1)
        setPhoneNumber(phone_div)
    }
    let handleDeleteFacebook = (index)=>{
        let div_facebook = [...fb_dynamic]
        div_facebook.splice(index,1)
        setFbDynamic(div_facebook)
    }
    let handleDeleteInstagram = (index)=>{
        let instagram_input_div = [...instagram_dynamic]
        instagram_input_div.splice(index,1)
        setInstagramDynamic(instagram_input_div)
    }
    let handleDeleteTwitter=(index)=>{
        let deleteVal = [...twitter_dynamic]
        deleteVal.splice(index,1)
        setTwitterDynamic(deleteVal)
    }
    const handleDeleteExtraOffice=(index)=> {
        let deleteVal = [...extra_office]
        deleteVal.splice(index,1)
        setExtraOffice(deleteVal)
    }
    let handleDeleteChildren=(index)=>{
        let deleteVal = [...children_div]
        deleteVal.splice(index,1)
        setChildren(deleteVal)
    }
    let handleDeleteTrustee = (index)=>{
        let deleteVal =[...trustee_div]
        deleteVal.splice(index,1)
        setTrustee(deleteVal)
    }
    let handleDeleteRelative=(index)=>{
        let delteVal = [...relatives_div]
        delteVal.splice(index,1)
        setRelativeDiv(delteVal)
    }
    let handleDeleteHome=(index) => {
        let deletehome_value = [...home_div]
        deletehome_value.splice(index,1)
        setHomeDiv(deletehome_value)
    }
    let handleDeleteExtraFriend = (index)=>{
        let div_extra_friend = [...extra_friend]
        div_extra_friend.splice(index,1)
        setExtraFriend(div_extra_friend)
    }
    let handeleDeleteExtraBusiness=(index)=>{
        let div_extra_business = [...extra_business]
        div_extra_business.splice(index,1)
        setExtraBusiness(div_extra_business)
    } 
    let handleDeleteExtraWork = (index) =>{
        let div_extra_work = [...extra_work]
        div_extra_work.splice(index,1)
        setExtraWork(div_extra_work)
    }
    let handleDeleteExtraRelativePerson=(index)=>{
        let div_extra_relative_person = [...extra_relative_person]
        div_extra_relative_person.splice(index,1)
        setExtraRelativePerson(div_extra_relative_person)
    } 
    let handleDeleteExtraHotels=(index)=>{
        let div_extra_hotels = [...extra_hotels]
        div_extra_hotels.splice(index,1)
        setExtraHotels(div_extra_hotels)
    }
    let handleDeleteExtraRestaurant=(index)=>{
        let div_extra_restaurant = [...extra_restaurant]
        div_extra_restaurant.splice(index,1)
        setExtraRestaurant(div_extra_restaurant)
    }
    let handleDeleteExtraHobbies=(index)=>{
        let div_extra_hobbies = [...extra_hobbies]
        div_extra_hobbies.splice(index,1)
        setExtraHobbies(div_extra_hobbies)
    }
    useEffect(()=>{
        if(localStorage['selectedTheme']=='dark'){
            setPageNumberButton('#FFFFFF')
        }
    },[])
    return(
        <div className='add-card'>
            <div className='add-card-top'>
                <div className='add-card-header-center'>
                    <span className='personal'>1<span>Personal Information</span></span>
                    <span className='personal-line'></span>
                    <span className='contact' style={which_panel>=2?{"background":"#356CD2"}:null}>2<span style={which_panel>=2?{"color":page_number_button}:null}>Contact Information</span></span>
                    <span className='contact-line'></span>
                    <span className='familt-composition' style={which_panel>=3?{"background":"#356CD2"}:null}>3<span style={which_panel>=3?{"color":page_number_button}:null}>Family Composition</span></span>
                    <span className='familt-composition-line'></span>
                    <span className='other-information' style={which_panel>=4?{"background":"#356CD2"}:null}>4<span style={which_panel>=4?{"color":page_number_button}:null}>Other Information</span></span>
                </div>
            </div>
            <div className='add-card-middle'>
                <div className='add-card-middle-center'>
                    <div className='left'>
                        {which_panel==1?<div>
                            <div className='left-header'>Personal Information</div>
                            <form action="" className='personal-information' onSubmit={(event)=>event.preventDefault()}>
                                <div className='left-second'>
                                    <label htmlFor="photo">
                                        <span class="material-symbols-outlined">download</span>
                                        <input type="file" id='photo' />
                                    </label>
                                    <div>
                                        <span class="material-symbols-outlined">edit</span>
                                        <span class="material-symbols-outlined">delete</span>
                                    </div>
                                </div>
                                <div className='left-three'>
                                    <div>
                                        <label htmlFor="">Name</label>
                                        <input type="text" placeholder='Name'/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Surname</label>
                                        <input type="text" placeholder='Surname' />
                                    </div>
                                </div>
                                <div className='left-four'>
                                    <div>
                                        <label htmlFor="">Father Name</label>
                                        <input type="text" placeholder='Father Name'/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Birthday</label>
                                        <input type="text" placeholder='Birthday'/>
                                    </div>
                                </div>    
                                <div className='left-five'>
                                    <div>
                                        <label htmlFor="">Country/Region</label>
                                        <input type="text" placeholder='Country/Region'/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Family Status</label>
                                        <input type="text" placeholder='Family Status'/>
                                    </div>
                                </div>    
                                <div className='left-six'>
                                    <div>
                                        <label htmlFor="">Workplace</label>
                                        <input type="text" placeholder='Workplace'/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Job Position</label>
                                        <input type="text" placeholder='Job Position'/>
                                    </div>
                                </div> 
                                <div className='left-seven'>
                                    <div>
                                        <label htmlFor="">Office Addres</label>  
                                        <input type="text" name="" id=""/> 
                                    </div>                                    
                                    {extra_office.map((value,index)=>{
                                        return(
                                            <div className='extra_office'>
                                                <input type="text" name="" id="" value={value} onChange={e=>handleInputExtraOffice(e,index)}/> {/*handlechange*/}
                                                <button onClick={()=>handleDeleteExtraOffice(index)}><span class="material-symbols-outlined">close</span> </button>
                                            </div>
                                        )
                                    })}
                                    <button onClick={()=>{let div_extra_office=[...extra_office,[]];setExtraOffice(div_extra_office)}}><span class="material-symbols-outlined">add</span><span>Add office address</span></button>
                                </div>    
                                <div className='left-eight'>
                                    <div>
                                        <label htmlFor="">Home Addres</label>  
                                        <input type="text" name="" id=""/>  
                                    </div>                                     
                                    {home_div.map((value,index)=>{
                                        return(
                                            <div className='extra_home'>
                                                <input type="text" name="" id="" value={value} onChange={e=>handleHomeDiv(e,index)}/>  
                                                <button onClick={()=>handleDeleteHome(index)}><span class="material-symbols-outlined">close</span></button>
                                            </div> 
                                        )                                   
                                    })}
                                    <button onClick={AddHomeAddres}><span class="material-symbols-outlined">add</span><span>Add home address</span></button>                                    
                                </div>   
                                <div className='left-nine'>
                                    <div>
                                        <div>
                                            <label htmlFor="card-car-plate">Car Plate</label>
                                            <input type="text" placeholder='Car No' id='card-car-plate'/>
                                        </div>
                                        <div><select name="" id=""><option value="">Car Model</option></select></div>
                                        <div><select name="" id=""><option value="">Year</option></select></div>
                                        <div><select name="" id=""><option value="">Color</option></select></div>
                                        <button onClick={()=>{let car_plate_div=[...car_plate, []]; setCarPlate(car_plate_div)}}><span class="material-symbols-outlined">add</span></button>
                                    </div>
                                    {car_plate.map((value, index)=>{
                                        return(
                                            <div className='card-extra-car-plate'>
                                                <div>
                                                    <label htmlFor="">Car Plate</label>
                                                    <input type="text" placeholder='Car No' id='' value={value} onChange={e=>handleInputCarPlate(e,index)}/>
                                                </div>
                                                <div><select name="" id=""><option value="">Car Model</option></select></div>
                                                <div><select name="" id=""><option value="">Year</option></select></div>
                                                <div><select name="" id=""><option value="">Color</option></select></div>
                                                <button onClick={()=>handleDeleteExtraCarPlate(index)}><span class="material-symbols-outlined">close</span></button>
                                            </div>                                            
                                        )
                                    })}
                                </div>                                                                          
                            </form>
                        </div>:null}                          
                        {which_panel==2?
                            <div>
                                <div className='left-header'>Contact Infromation</div>
                                <form className='contact-form' onSubmit={(event)=>event.preventDefault()}>
                                    <div className='contact-second'>
                                        <div>
                                            <label htmlFor="">Phone Number</label>
                                            <input type="text" />                                           
                                        </div>
                                        {phone_number.map((value,index)=>{
                                            return(
                                                <div className='contact-extra-phone-number'>
                                                    <input type="text" value={value} onChange={e=>handlePhoneNumber(e,index)}/>
                                                    <button onClick={()=>handleDeletePhoneNumber(index)}> <span class="material-symbols-outlined">close</span></button>                                            
                                                </div>
                                            )
                                        })}
                                        <div className='contact-second-button'><button onClick={AddPhoneNumber}>add</button></div>
                                    </div>
                                    <div className='contact-three'>
                                        <div>
                                            <label htmlFor="">Mail Address</label>
                                            <input type="text" />                                           
                                        </div>
                                        {mail_address.map((value, index)=>{
                                            return(
                                                <div className='add-card-extra-mail-address'>
                                                    <input type="text" value={value} onChange={e=>handleInputExtraMailAddress(e,index)}/>
                                                    <button onClick={()=>handleDeletePMailAddress(index)}> <span class="material-symbols-outlined">close</span></button>
                                                </div>
                                            )
                                        })}
                                        <div className='contact-three-button'>
                                            <button onClick={()=>{let mail_div=[...mail_address, []]; setMailAddress(mail_div)}}>add</button> 
                                        </div>
                                    </div>    
                                    <div className='contact-four'>
                                        <div className='facebook'>
                                            <div className='facebook-static'>
                                                <i class="fa-brands fa-facebook"></i>
                                                <input type="text" />
                                                <button onClick={AddFacebookDynamic}><span class="material-symbols-outlined">add</span></button>                                            
                                            </div>
                                            {fb_dynamic.map((value,index)=>{
                                                return(
                                                    <div className='facebook-dynamic'>
                                                        <i class="fa-brands fa-facebook"></i>
                                                        <input type="text" value={value} onChange={e=>handleInputFacebook(e,index)}/>
                                                        <button onClick={()=>handleDeleteFacebook(index)}><span class="material-symbols-outlined">close</span></button>                                            
                                                    </div>                                                    
                                                )
                                            })}
                                        </div>
                                        <div className='instagram'>
                                            <div className='instagram-static'>
                                                <i class="fa-brands fa-instagram"></i>
                                                <input type="text"/>
                                                <button onClick={()=>{let instagram_div = [...instagram_dynamic, []]; setInstagramDynamic(instagram_div)}}><span class="material-symbols-outlined">add</span></button>                                            
                                            </div>
                                            {instagram_dynamic.map((value, index)=>{
                                                return(
                                                    <div className='instagram-dynamic'>
                                                        <i class="fa-brands fa-instagram"></i>
                                                        <input type="text" value={value} onChange={e=>handleInputInstagram(e,index)}/>
                                                        <button onClick={()=>handleDeleteInstagram(index)}><span class="material-symbols-outlined">close</span></button>                                            
                                                    </div>                                                    
                                                )
                                            })}                                          
                                        </div>
                                        <div className='twitter'>
                                            <div className='twitter-static'>
                                                <i class="fa-brands fa-twitter"></i>
                                                <input type="text" />
                                                <button onClick={()=>{let twitter_div=[...twitter_dynamic,[]];setTwitterDynamic(twitter_div)}}><span class="material-symbols-outlined">add</span></button>                                            
                                            </div>
                                            {twitter_dynamic.map((value,index)=>{
                                                return(
                                                    <div className='twitter-dynamic'>
                                                        <i class="fa-brands fa-twitter"></i>
                                                        <input type="text" value={value} onChange={e=>handleInputTwitter(e,index)}/>
                                                        <button onClick={()=>handleDeleteTwitter(index)}><span class="material-symbols-outlined">close</span></button>                                            
                                                    </div>                                                      
                                                )
                                            })}
                                        </div>
                                    </div>                                                                       
                                </form>
                            </div>:null
                        }
                        {which_panel==3?<div>
                            <div className='left-header'>Family Member</div>
                            <form className='family-composition' onSubmit={(event)=>event.preventDefault()}>
                                <div>
                                    <div className='wife-husband'>
                                        <div>
                                            <label>Name(Wife/Husband)</label>
                                            <input type="text" name="" id="" placeholder='Name' />
                                        </div>
                                        <div>
                                            <label>Name(Wife/Husband)</label>
                                            <input type="text" name="" id="" placeholder='Name' />
                                        </div>                                    
                                    </div>
                                    <div className='children-trustee'>
                                        <div className='children'>
                                            <div>
                                                <label htmlFor="">Children's Name</label>
                                                <input type="text" name="" id="" placeholder='Children' />
                                                <button onClick={()=>{{let input_div=[...children_div, []];setChildren(input_div)}}}><span class="material-symbols-outlined">add</span></button>
                                            </div>
                                            {children_div.map((value,index)=>{
                                                return(
                                                    <div className='extra-div'>
                                                        <input type="text" name="" id="" placeholder='Children' value={value} onChange={e=>handleInputChildren(e,index)}/>  
                                                        <button onClick={()=>handleDeleteChildren(index)}><span class="material-symbols-outlined">close</span></button>
                                                    </div>                                                    
                                                )
                                            })}
                                        </div>
                                        <div className='trustee'>
                                            <div>
                                                <label htmlFor="">Trustee</label>
                                                <input type="text" name="" id="" placeholder='Trustee' />
                                                <button onClick={()=>{let input_div=[...trustee_div,[]];setTrustee(input_div)}}><span class="material-symbols-outlined">add</span></button>
                                            </div>
                                            {trustee_div.map((value,index)=>{
                                                return(
                                                    <div className='extra-div'>
                                                        <input type="text" name="" id="" placeholder='Trustee' value={value} onChange={e=>handleInputTrustee(e,index)}/>  
                                                        <button onClick={()=>handleDeleteTrustee(index)}><span class="material-symbols-outlined">close</span></button>
                                                    </div>                                                    
                                                )
                                            })}
                                        </div>                                    
                                    </div>
                                    <div className='relatives'>
                                        <div>
                                            <div>
                                                <label htmlFor="">Relative's Name</label>
                                                <input type="text" name="" id="" placeholder='Relatives'/>
                                                <button onClick={()=>{let input_div=[...relatives_div,[]];setRelativeDiv(input_div)}}><span class="material-symbols-outlined">add</span></button>
                                            </div>  
                                            {relatives_div.map((value,index)=>{
                                                return(
                                                    <div className='relative_div'>
                                                        <input type="text" name="" id="" placeholder='Relatives' value={value} onChange={e=>handleInputRelative(e,index)}/>  
                                                        <button onClick={()=>handleDeleteRelative(index)}><span class="material-symbols-outlined">close</span></button>                                          
                                                    </div>
                                                )
                                            })}                                     
                                        </div>
                                    </div>                                    
                                </div>
                            </form>
                        </div>:null}
                        {which_panel==4?<div>
                            <div className='left-header'>Other-Information</div>
                            <form className='other-information' onSubmit={(event)=>event.preventDefault()}>
                                <div>
                                    <div className='friends-business'>
                                        <div>
                                            <div>
                                                <label htmlFor="friends">Friends</label>
                                                <input type="text" name="" id="friends" />   
                                                <button onClick={()=>{let div_extra_friend=[...extra_friend,[]];setExtraFriend(div_extra_friend)}}><span class="material-symbols-outlined">add</span></button>                                             
                                            </div>
                                            {extra_friend.map((value,index)=>{
                                                return(
                                                    <div className='extra-friend'>
                                                        <input type="text" name="" id="friends" value={value} onChange={e=>handleInputExtraFriend(e,index)}/>   
                                                        <button onClick={()=>handleDeleteExtraFriend(index)}><span class="material-symbols-outlined">close</span></button>                                             
                                                    </div>                                                    
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <div>
                                                <label htmlFor="business-partner">Business Partner</label>
                                                <input type="text" name="" id="business-partner" />
                                                <button onClick={()=>{let div_extra_business=[...extra_business,[]];setExtraBusiness(div_extra_business)}}><span class="material-symbols-outlined">add</span></button>  
                                            </div>
                                            {extra_business.map((value,index)=>{
                                                return(
                                                    <div className='extra-business'>
                                                        <input type="text" name="" id="business-partner" value={value} onChange={e=>handleInputExtraBusiness(e,index)} />
                                                        <button onClick={()=>handeleDeleteExtraBusiness(index)}><span class="material-symbols-outlined">close</span></button>  
                                                    </div>                                                    
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='work'>
                                        <div>
                                            <div>
                                                <label htmlFor="work-colleague">Work Colleague</label>
                                                <input type="text" name="" id="work-colleague" />     
                                                <button onClick={()=>{let div_extra_work=[...extra_work,[]];setExtraWork(div_extra_work)}}><span class="material-symbols-outlined">add</span></button>                                             
                                            </div>
                                            {extra_work.map((value,index)=>{
                                                return(
                                                    <div className='extra-work'>
                                                        <input type="text" name="" id="work-colleague" value={value} onChange={e=>handleInputExtraWork(e,index)} />     
                                                        <button onClick={()=>handleDeleteExtraWork(index)}><span class="material-symbols-outlined">close</span></button>                                             
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <div>
                                                <label htmlFor="work-colleague">Relative Person</label>
                                                <input type="text" name="" id="work-colleague" />
                                                <button onClick={()=>{let div_extra_relative_person=[...extra_relative_person,[]];setExtraRelativePerson(div_extra_relative_person)}}><span class="material-symbols-outlined">add</span></button>  
                                            </div>
                                            {extra_relative_person.map((value,index)=>{
                                                return(
                                                    <div className='extra-relative'>
                                                        <input type="text" name="" id="work-colleague" value={value} onChange={e=>handleInputExtraRelativePerson(e,index)}/>
                                                        <button onClick={()=>handleDeleteExtraRelativePerson(index)}><span class="material-symbols-outlined">close</span></button>  
                                                    </div>                                                    
                                                )
                                            })}
                                        </div>
                                    </div>  
                                    <div className='hotels'>
                                        <div>
                                            <div>
                                                <label htmlFor="">Most Visted Hotels</label>
                                                <input type="text" name="" id="" />
                                            </div>
                                            {extra_hotels.map((value,index)=>{
                                                return(
                                                    <div className='extra-hotels'>
                                                        <input type="text" name="" id="" value={value} onChange={e=>handleInputExtraHotels(e,index)}/>
                                                        <button><span class="material-symbols-outlined" onClick={()=>handleDeleteExtraHotels(index)}>close</span></button>
                                                    </div>                                                    
                                                )
                                            })}
                                            <button onClick={()=>{let div_extra_hotels=[...extra_hotels,[]];setExtraHotels(div_extra_hotels)}}><span class="material-symbols-outlined">add</span>Add Hotel</button>
                                        </div>
                                    </div>
                                    <div className='restaurant'>
                                        <div>
                                            <div>
                                                <label htmlFor="">Most Visted Restaurant</label>
                                                <input type="text" name="" id="" />                                              
                                            </div>
                                            {extra_restaurant.map((value,index)=>{
                                                return(
                                                    <div className='extra-restaurant'>                                                
                                                        <input type="text" name="" id="" value={value} onChange={e=>handleInputExtraRestaurant(e,index)}/>    
                                                        <button><span class="material-symbols-outlined" onClick={()=>handleDeleteExtraRestaurant(index)}>close</span></button>                                          
                                                    </div>                                                    
                                                )
                                            })}
                                            <button onClick={()=>{let div_extra_restaurant = [...extra_restaurant,[]];setExtraRestaurant(div_extra_restaurant)}}><span class="material-symbols-outlined">add</span>Add Restaurant</button>
                                        </div>
                                    </div>
                                    <div className='hobbies'>
                                        <div>
                                            <div>
                                                <label htmlFor="">Hobbies</label>
                                                <input type="text" name="" id="" />
                                            </div>  
                                            {extra_hobbies.map((value,index)=>{
                                                return(
                                                    <div className='extra-hobbies'>
                                                        <input type="text" name="" id="" value={value} onChange={e=>handdleInputExtraHobbies(e,index)}/>
                                                        <button><span class="material-symbols-outlined" onClick={()=>handleDeleteExtraHobbies(index)}>close</span></button>
                                                    </div>                                                       
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='additional'>
                                        <span>Additional Information</span>
                                        <div>
                                            <button><span class="material-symbols-outlined">add_circle</span><span>Family Person</span></button>
                                            <button><span class="material-symbols-outlined">add_circle</span><span>Work Colleague</span></button>
                                            <button><span class="material-symbols-outlined">add_circle</span><span>Relatives</span></button>
                                            <button onClick={()=>{let div_extra_hobbies=[...extra_hobbies,[]];setExtraHobbies(div_extra_hobbies)}}><span class="material-symbols-outlined">add_circle</span><span>Hobbies</span></button>
                                            <button><span class="material-symbols-outlined">add_circle</span><span>Contact Person</span></button>
                                            <button><span class="material-symbols-outlined">add_circle</span><span>Social Accounts</span></button>
                                            <button><span class="material-symbols-outlined">add_circle</span><span>Business Partners</span></button>
                                            <button><span class="material-symbols-outlined">add_circle</span><span>Trusteers</span></button>
                                            <button><span class="material-symbols-outlined">add_circle</span><span>Favorite Places</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>:null}
                        
                    </div>
                    <div className='right'>
                        <div>
                            <div className='preview-card'>
                                <div>
                                    <div>
                                        <div>Yout card</div>
                                        <div>As you fill in the information, 
                                            the information on your card will be 
                                            updated and you will be able to preview the card before issuing it.
                                        </div>
                                    </div>
                                    <div>
                                        <button><span class="material-symbols-outlined">Visibility</span><span>Preview</span></button>
                                    </div>
                                </div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div><button onClick={()=>{if(which_panel!=1){setPanel(which_panel-1)}else if(which_panel==1){setPanel(4)}}}><span class="material-symbols-outlined">keyboard_arrow_left</span></button>
                                <button onClick={()=>{if(which_panel!=4){setPanel(which_panel+1)}else if(which_panel==4){setPanel(1)}}}><span class="material-symbols-outlined">keyboard_arrow_right</span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function All_Cards(){
    return(
        <div className='all-cards-start'>
            <div>
                <div className='header'>
                    <div>
                        <div className='header-left'>
                            <div>
                                <div>All Cards(136)</div>
                                <div><input type="text" placeholder='Search' /><span class="material-symbols-outlined">search</span></div>
                                <NavLink to='add/'>Create new card<span class="material-symbols-outlined">add</span></NavLink>                            
                            </div>
                        </div>
                        <div className='header-middle'>
                            <select><option value="Location">Location</option></select>
                            <select name="" id=""><option value="">Salary</option></select>
                            <select><option value="">Time</option></select>
                        </div> 
                        <div className='header-right'>
                            <NavLink to=''><span class="material-symbols-outlined"> person </span></NavLink>  
                            <NavLink to='add/my-cards/'><span class="material-symbols-outlined"> shopping_bag </span></NavLink>  
                        </div>                   
                    </div>
                </div>
                <div className='middle'>
                    <div className='middle-center'>
                        <div className='card'>
                            <div>
                                <div className='img'>
                                    <img src={require('../pisik.jpg')} alt="" />
                                </div>
                                <div>
                                    <div>Rafet Eliyevsdsdadadad</div>
                                    <div><span class="material-symbols-outlined">location_on</span><span>Baku</span></div>
                                </div>
                                <button><span class="material-symbols-outlined">close</span></button>
                            </div>
                            <div className='about'>
                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                                scrambled it to make a type specimen book. 
                                It has survived not only five centuries
                            </div>
                            <div></div>
                            <div className='info'>
                                <div><span class="material-symbols-outlined">edit</span><span>Name,Surname</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Favorite places</span></div>
                                <div><span class="material-symbols-outlined">person</span><span>Relevant person</span></div>
                                <div><span class="material-symbols-outlined">social_distance</span><span>Social Accounts</span></div>
                                <div><span class="material-symbols-outlined">groups</span><span>Community</span></div>
                                <div><span class="material-symbols-outlined">share</span><span>Relationships</span></div>
                                <div><span class="material-symbols-outlined">directions_car</span><span>Car number</span></div>
                                <div><span class="material-symbols-outlined">phone_enabled</span><span>Phone</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Address</span></div>
                                <div><span class="material-symbols-outlined">work</span><span>Workplace</span></div>
                                <div><span class="material-symbols-outlined">imagesmode</span><span>Picture</span></div>
                                <div><span class="material-symbols-outlined">escalator_warning</span><span>Children</span></div>
                                <div><span class="material-symbols-outlined">home_pin</span><span>Company</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Favorite places</span></div>                            
                            </div>
                            <div></div>
                            <div className='share_like'>
                                <div className='like'>
                                    <div><button><span class="material-symbols-outlined">favorite</span></button><span>423</span></div>
                                    <button><span class="material-symbols-outlined">share</span></button>                            
                                    <div><span>4.5</span><span class="material-symbols-outlined"> star </span></div>
                                    <div></div>
                                    <p>243 comments</p>
                                    <button><span class="material-symbols-outlined">bookmark</span></button>
                                </div>
                                <div className='save_card'></div>
                            </div>
                            <div className='buy_price'>
                                <div>699$</div>
                                <NavLink to='add/card-payment/'><span>Add to card</span></NavLink>
                            </div>
                        </div>
                        <div className='card'>
                            <div>
                                <div className='img'>
                                    <img src={require('../pisik.jpg')} alt="" />
                                </div>
                                <div>
                                    <div>Rafet Eliyevsdsdadadad</div>
                                    <div><span class="material-symbols-outlined">location_on</span><span>Baku</span></div>
                                </div>
                                <button><span class="material-symbols-outlined">close</span></button>
                            </div>
                            <div className='about'>
                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                                scrambled it to make a type specimen book. 
                                It has survived not only five centuries
                            </div>
                            <div></div>
                            <div className='info'>
                                <div><span class="material-symbols-outlined">edit</span><span>Name,Surname</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Favorite places</span></div>
                                <div><span class="material-symbols-outlined">person</span><span>Relevant person</span></div>
                                <div><span class="material-symbols-outlined">social_distance</span><span>Social Accounts</span></div>
                                <div><span class="material-symbols-outlined">groups</span><span>Community</span></div>
                                <div><span class="material-symbols-outlined">share</span><span>Relationships</span></div>
                                <div><span class="material-symbols-outlined">directions_car</span><span>Car number</span></div>
                                <div><span class="material-symbols-outlined">phone_enabled</span><span>Phone</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Address</span></div>
                                <div><span class="material-symbols-outlined">work</span><span>Workplace</span></div>
                                <div><span class="material-symbols-outlined">imagesmode</span><span>Picture</span></div>
                                <div><span class="material-symbols-outlined">escalator_warning</span><span>Children</span></div>
                                <div><span class="material-symbols-outlined">home_pin</span><span>Company</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Favorite places</span></div>                            
                            </div>
                            <div></div>
                            <div className='share_like'>
                                <div className='like'>
                                    <div><button><span class="material-symbols-outlined">favorite</span></button><span>423</span></div>
                                    <button><span class="material-symbols-outlined">share</span></button>                            
                                    <p>4.5</p>
                                    <p>243 comments</p>
                                    <button><span class="material-symbols-outlined">bookmark</span></button>
                                </div>
                                <div className='save_card'></div>
                            </div>
                            <div className='buy_price'>
                                <div>699$</div>
                                <NavLink to='add/card-payment/'><span>Add to card</span></NavLink>
                            </div>
                        </div>
                        <div className='card'>
                            <div>
                                <div className='img'>
                                    <img src={require('../pisik.jpg')} alt="" />
                                </div>
                                <div>
                                    <div>Rafet Eliyevsdsdadadad</div>
                                    <div><span class="material-symbols-outlined">location_on</span><span>Baku</span></div>
                                </div>
                                <button><span class="material-symbols-outlined">close</span></button>
                            </div>
                            <div className='about'>
                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                                scrambled it to make a type specimen book. 
                                It has survived not only five centuries
                            </div>
                            <div></div>
                            <div className='info'>
                                <div><span class="material-symbols-outlined">edit</span><span>Name,Surname</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Favorite places</span></div>
                                <div><span class="material-symbols-outlined">person</span><span>Relevant person</span></div>
                                <div><span class="material-symbols-outlined">social_distance</span><span>Social Accounts</span></div>
                                <div><span class="material-symbols-outlined">groups</span><span>Community</span></div>
                                <div><span class="material-symbols-outlined">share</span><span>Relationships</span></div>
                                <div><span class="material-symbols-outlined">directions_car</span><span>Car number</span></div>
                                <div><span class="material-symbols-outlined">phone_enabled</span><span>Phone</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Address</span></div>
                                <div><span class="material-symbols-outlined">work</span><span>Workplace</span></div>
                                <div><span class="material-symbols-outlined">imagesmode</span><span>Picture</span></div>
                                <div><span class="material-symbols-outlined">escalator_warning</span><span>Children</span></div>
                                <div><span class="material-symbols-outlined">home_pin</span><span>Company</span></div>
                                <div><span class="material-symbols-outlined">location_on</span><span>Favorite places</span></div>                            
                            </div>
                            <div></div>
                            <div className='share_like'>
                                <div className='like'>
                                    <div><button><span class="material-symbols-outlined">favorite</span></button><span>423</span></div>
                                    <button><span class="material-symbols-outlined">share</span></button>                            
                                    <p>4.5</p>
                                    <p>243 comments</p>
                                    <button><span class="material-symbols-outlined">bookmark</span></button>
                                </div>
                                <div className='save_card'></div>
                            </div>
                            <div className='buy_price'>
                                <div>699$</div>
                                <NavLink to='add/card-payment/'><span>Add to card</span></NavLink>
                            </div>
                        </div>                           
                    </div>                    
                    <div className='middle_footer'>
                        <div>soz</div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

function Cards(){
    let [tt,setTT] = useState(true)
    return(
        <div className='card_main'>
            <div>
                <Outlet/>
            </div>
            <div className='footer'>
                <div>
                    <div>
                        <div>
                            <NavLink to=''><i class="fa-brands fa-twitter"></i></NavLink>
                            <NavLink to=''><i class="fa-brands fa-instagram"></i></NavLink>
                            <NavLink to=''><i class="fa-brands fa-youtube"></i></NavLink>
                            <NavLink to=''><i class="fa-brands fa-facebook"></i></NavLink>
                        </div>
                        <div><select name="" id=""><option value="English">English</option></select></div>
                    </div>
                    <div>
                        <div><span>2023</span> <span class="material-symbols-outlined">copyright</span><span>Chatagram LLC</span></div>
                        <NavLink to='add/card-payment/'>Term of Service</NavLink>
                    </div>                    
                </div>
            </div>
        </div>
    )
}
export {AddCardHeader,AddCardMiddle,All_Cards,CardPayment,Saved_Credit_Card,AnotherCard,My_Cards,Saved_Card,
Created_Card,Bought_Cards,Card_I_Bought,Card_Created_By_Me}
export default Cards;