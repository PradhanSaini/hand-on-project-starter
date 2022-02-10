import React from "react";
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import style from './MyCard.module.scss'
// eslint-disable-next-line no-unused-vars
const MyCard = (card) => {
  return (
    // <div classNameNameName="col-4 col-lg-3 text-center work-container-subdiv">
    //   <div>
    //     <img src={card.image} alt="" classNameNameName={style.imgcss} />
    //   </div>
    //   <h2 classNameNameName="sub-heading">{card.name}</h2>
    //   <p classNameNameName="main-hero-para w-100">{card.description}</p>
    // </div>
    <div className={style.container}>
    <div className={style.post}>
        <div className={style.header_post}>
            <img src={card.image} alt="" />
        </div>

        <div className={style.body_post}>
            <div className={style.post_content}>

                <h1>{card.name}</h1>
                <p>{card.description}</p>

            </div>
        </div>
    </div>
</div>


  );
};

export default MyCard;