import React from "react";
import Homepage from "../../homepage/page/Homepage";
import "./homepageaccount.css";
import { Context } from "../../../context/Context";
import  {useContext} from 'react'

export default function Homepageaccount() {
  const {} = useContext(Context);
  const { user, dispatch, isFetching } = useContext(Context);
  const handlelogout = async ()=> {
    dispatch({type : "LOGOUT"})
   window.location.replace("/");

  }
  return (
    <div className="homepageaccount">
      <div className="homepageaccount-user">
        <p className="user-name">khalid dahir</p>
        <p className="user-logout" onClick={handlelogout}>Log out</p>
      </div>
      <Homepage />
    </div>
  );
}
