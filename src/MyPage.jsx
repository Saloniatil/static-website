import React from "react";
import "./style.css";
import img1 from "./img/pexels-ekaterina-12203460.png";
import img5 from "./img/pexels-genaro-servín-763210@2x.png";
import img2 from "./img/pexels-fiona-art-5022849.png";
import img3 from "./img/pexels-pixabay-164455.png";
import img4 from "./img/pexels-steve-johnson-1269968.png";
import sm1 from "./img/sm1.png";
import layout from "./img/pexels-humphrey-muleba-2045248@2x.png";
import { NavLink } from "react-router-dom";
import smallimg from "./img/pexels-ali-pazani-2613260@2x.png";
import second from "./img/pexels-tobias-bjørkli-2236382.png";
import sm2 from "./img/pexels-andrea-piacquadio-3771118@2x.png";
import sm3 from "./img/pexels-antoni-shkraba-4442005@2x.png";
import search from "./img/Component 32.png";
import { LuListFilter } from "react-icons/lu";
import home from "./img/Home.png"
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import {imgage} from "./img/pexels-tobias-bjørkli-2236382.png"
const MyPage = () => {
  return (
    <div className="container">
      <div style={{ marginLeft: "100px" }}>
        <div className="box" style={{ display: "flex" }}>
          <div
            className="Logo"
            style={{
              color: "#101010",
              font: "normal normal normal 32px/44px Mongolian Baiti",
            }}>
            {" "}
            LOGO
          </div>
          <div className="search">
            {" "}
            <img src={search} style={{ width: "20px", height: "20px" }} />{" "}
            Search here..{" "}
            <div style={{ paddingLeft: "8xpx" }}>
              {" "}
              <LuListFilter />
            </div>{" "}
          </div>
          <div className="seller">
            <p className="sell"> Become a slider</p>{" "}
          </div>
        </div>
        <br></br>
        <div style={{ display: "flex" }}>
          <div className="sidebar">
            <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <NavLink to="/home">
                <img src={home} alt="Home" style={{ width: "20px", height: "20px" }} />
               <b style={{color: "black"}}> Home</b>
              </NavLink>
              </li>
              <br></br>
            <li>
             <IoIosNotificationsOutline alt="Profile" style={{ width: "30px", height: "30px" }} /> 
             <a style={{color: "black"}}> Notification </a>
              </li>
              <br></br>
              <li>
                <FaRegHeart alt="Profile" style={{ width: "20px", height: "20px" }} /> 
                <a style={{color: "black"}}>Shop</a>
              </li>
              <br></br>
              <li>
                <MdMessage alt="Profile" style={{ width: "20px", height: "20px" }} /> 
                <a style={{color: "black"}}>Conversation</a>
              </li>
              <br></br>
              <li>
                  <IoWalletOutline alt="Profile" style={{ width: "20px", height: "20px" }} /> 
                  <a style={{color: "black"}}>Wallet</a>
              </li>
              <br></br>
              <li>
                < MdSubscriptions alt="sub" style={{ width: "20px", height: "20px" }} /> 
                <a style={{color: "black"}}>Subscription</a>
              </li>
              <br></br>
              <li>
                <CgProfile alt="Profile" style={{ width: "20px", height: "20px" }} /> 
                <a style={{color: "black"}}>Profile</a>
              </li>
              <br></br>
              <li>
                  <IoMdSettings alt="Profile" style={{ width: "20px", height: "20px" }} /> 
                  <a style={{color: "black"}}>Setting</a>
              </li>
          </ul> 
          </div>
          <div className="layout">
            <div className="facebook-img">
              {" "}
              <img
                src={smallimg}
                alt="orange"
                style={{ width: "30px", height: "30px" }}
              />{" "}
              <b>Lara Leones</b>
            </div>{" "}
            <div style={{ color: "grey" }}>@thewallart</div>
            <div className="text1">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </div>
            <img
              src={layout}
              alt="img01"
              style={{ width: "580px", position: "relative", bottom: "-80px" }}
            />
            <div className="facebook-img">
              {" "}
              <img
                src={smallimg}
                alt="orange"
                style={{ width: "30px", height: "30px" }}
              />{" "}
              <b>Lara Leones</b>
            </div>{" "}
            <div style={{ color: "grey" }}>@thewallart</div>
            <div className="text1">
             
              {" "}
            </div>
            <img
              src={second}
              alt="img01"
              style={{ width: "580px", position: "relative", bottom: "-80px" }}/>
          </div>
          <div className="image-container">
            <div className="text-overlay"> Thomas Edward</div>
            <div className="text">@thewildwithyou</div>
            <img
              src={img1}
              alt="Large Image"
              className="main-image"
              style={{ marginBottom: "8px", marginRight: "2px" }}
            />
            <img src={sm1} alt="Small Image" className="small-image" />

            <div className="text-overlay">Chris Doe</div>
            <div className="text">@thewildwithyou</div>

            <img src={img5} alt="Large Image" className="main-image" style={{ marginBottom: "8px", marginRight: "5px" }}/>
            <img src={sm2} alt="Small Image" className="small-image" />

            <div className="text-overlay">Emilie Jones</div>
            <div className="text">@thewildwithyou</div>
            <img src={img3} alt="Large Image" className="main-image" style={{ marginBottom: "08px" }} />
            <img src={sm3} alt="Small Image" className="small-image" />

            <div className="text-overlay">Jessica Williams</div>
            <div className="text">@thewildwithyou</div>
            <img src={img4}  alt="Large Image" className="main-image" style={{ marginBottom: "8px" }} />
            <img src={sm3} alt="Small Image" className="small-image" />

            <div className="text-overlay"> Thomas Edward</div>
            <div className="text">@thewildwithyou</div>
            <img  src={img2} alt="Large Image" className="main-image" style={{ marginBottom: "8px" }}  />
            <img src={sm1} alt="Small Image" className="small-image" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

 
