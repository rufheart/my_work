import logo from './logo.svg';
import Main from './components/Main';
import {General, Enterance ,Messages,Welecome } from './components/Main';
import { Routes, Route, NavLink, Navigate, useMatches } from 'react-router-dom';
import { useContext } from 'react';
import Provider from './components/Context';
import './App.css';
import Cards from './components/Cards';
import { AddCardHeader,AddCardMiddle,All_Cards,CardPayment,Saved_Credit_Card,AnotherCard,My_Cards,Saved_Card,
Created_Card,Bought_Cards,Card_I_Bought,Card_Created_By_Me} from './components/Cards';
import SettingsMain from './components/Settings';
import { SettingsMenu } from './components/Settings';
import {SettingsCapsule} from './components/Settings'
import {MyProfile }from './components/Settings'
import { SelectLanguage } from './components/Settings';
import {Privacy_Security_Capsule} from './components/Settings'
import {Privacy_and_Security} from './components/Settings'
import {Privacy_and_Security_Phone_Number} from './components/Settings'
import {Privacy_and_Security_Last_Seen,Privacy_and_Security_Profile_Photo,Who_Can_Call_Me,Account_Capsule,Account_Main,My_Profile,Chat_Background_Main,Chat_Background_Menu,Set_Color} from './components/Settings'
import {Groups_Capsule,Groups_Menu} from './components/Groups';
import Groups_Main from './components/Groups';
import Contacts from './components/Contacts';
function App() {

  return (
    <Provider>
      <Routes>
          <Route>
            <Route path='' element={<Main/>}>
                <Route path='' element={<General/>}>
                  <Route path='contacts/' element={<Contacts/>} handle={{ title: "Contacts" }}/>
                  <Route path='' element={<Enterance/>} handle={{ title: "Enterance" }}>
                    <Route index element={<Welecome />}/>
                    <Route path=':url' element={<Messages />} />
                    <Route path='card/' element={<Cards/>}>
                      <Route index element={<All_Cards/>}/>
                      <Route path='add/' element={<AddCardHeader/>}>
                        <Route index element={<AddCardMiddle/>}/>
                        <Route path='card-payment/' element={<CardPayment/>}>
                              <Route index element={<Saved_Credit_Card/>}/>
                              <Route path='another-card/' element={<AnotherCard/>}/>
                        </Route>
                        <Route path='my-cards' element={<My_Cards/>}>
                          <Route path='saved-cards/' element={<Saved_Card/>}/>
                          <Route path='' element={<Navigate to='saved-cards/' replace/>}/>
                          <Route path='created-cards/' element={<Created_Card/>}/>
                          <Route path='bought-cards/' element={<Bought_Cards/>}/>
                        </Route>
                        <Route path=':url/bought-card/' element={<Card_I_Bought/>}/>
                        <Route path=':url/created-by-me' element={<Card_Created_By_Me/>}/>
                      </Route>
                    </Route>
                    <Route path='card/add/card-payment/' element={<Saved_Credit_Card/>}/>                  
                  </Route>
                </Route>
                <Route path='group/' element={<Groups_Main/>}>
                  <Route path='' element={<Groups_Capsule/>}>
                    <Route index element={<Groups_Menu/>}/> 
                  </Route>
                </Route>
                <Route path='settings/' element={<SettingsMain/>}>
                  <Route path='' element={<SettingsCapsule/>}>
                    <Route path='' element={<SettingsMenu/>}/>
                    <Route path='language/' element={<SelectLanguage/>}/>
                    <Route path='privacy-&-security/' element={<Privacy_Security_Capsule/>}>
                        <Route index element={<Privacy_and_Security/>}/>
                        <Route path='phone-number/' element={<Privacy_and_Security_Phone_Number/>}/>
                        <Route path='last-seen_online/' element={<Privacy_and_Security_Last_Seen/>}/>
                        <Route path='profile-photo/' element={<Privacy_and_Security_Profile_Photo/>}/>
                        <Route path='call-allow/' element={<Who_Can_Call_Me/>}/>
                    </Route>
                    <Route path='account/' element={<Account_Capsule/>}>
                        <Route index element={<Account_Main/>}/>
                    </Route>
                    <Route path='my-profile/' element={<My_Profile/>}/>
                    <Route path='chat-background/' element={<Chat_Background_Main/>}>
                      <Route index element={<Chat_Background_Menu/>}/>
                      <Route path='set-color/' element={<Set_Color/>}/>
                    </Route>
                  </Route>
                </Route>
            </Route>
          </Route>
      </Routes>      
    </Provider>
   
  );
}

export default App;
