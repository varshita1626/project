import React from 'react'
import './Main.css';
import { AiFillThunderbolt } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function Main() {
    const product = [{
      productImg: <img src='https://static.wixstatic.com/media/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg' style={{height:'370px', width:'300px'}}/>,
      productName: <p> I'm product</p>,
      productPrice: <p>$15.00</p>
    },{
      productImg: <img src='https://static.wixstatic.com/media/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg' style={{height:'370px', width:'300px'}}/>,
      productName: <p> I'm product</p>,
      productPrice: <p>$15.00</p>
    },{
      productImg: <img src='https://static.wixstatic.com/media/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg' style={{height:'370px', width:'300px'}}/>,
      productName: <p> I'm product</p>,
      productPrice: <p>$15.00</p>
    },{
      productImg: <img src='https://static.wixstatic.com/media/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg' style={{height:'370px', width:'300px'}}/>,
      productName: <p> I'm product</p>,
      productPrice: <p>$15.00</p>
    },

  ]
  const product1 = [{
    product1Img: <img src='https://static.wixstatic.com/media/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg' style={{height:'370px', width:'300px'}}/>,
    product1Name: <p> I'm product</p>,
    product1Price: <p>$15.00</p>,
  },{
    product1Img: <img src='https://static.wixstatic.com/media/c837a6_6a83893e75e048b3a61c7a8711b93da3~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_6a83893e75e048b3a61c7a8711b93da3~mv2.jpg' style={{height:'370px', width:'300px'}}/>,
    product1Name: <p> I'm product</p>,
    product1Price: <p>$15.00</p>,
  },{
    product1Img: <img src='https://static.wixstatic.com/media/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg' style={{height:'370px', width:'300px'}}/>,
    product1Name: <p> I'm product</p>,
    product1Price: <p>$15.00</p>,
  },{
    product1Img: <img src='https://static.wixstatic.com/media/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7~mv2.jpg' style={{height:'370px', width:'300px'}}/>,
    product1Name: <p> I'm product</p>,
    product1Price: <p>$15.00</p>,
  },
  ]
  
  return (
      <>
    <div>
      <div className='mainContainer'>
          <div className='container1'>
              <h1>T SHOP</h1>
          </div>
          <div className='container2'>
            <p>There's One for Everyone</p>
          </div>
      </div>
      <div className="imageContainer">
    <div className="carousel-item-active">
      <div className="img1"></div>
    </div>
    <div className="carousel-item">
      <div className="img2"></div>
    </div>
    <div className="carousel-item">
      <div className="img3"></div>
    </div>
  </div>
        <div className='container3'>
            <h1>New Drops</h1>
        </div>
        <div className='container4'>
        <div className='proContainer'>
          {
            product.map((item, index)=> (
              <div className='pro' key={index}>
                {item.productImg}
                {item.productName}
                {item.productPrice}
              </div>
            ))
            }   
        </div>
        <div className='pro1Container'>
            {
              product1.map((item, index)=>(
                <div className='pro1' key={index}>
                  {item.product1Img}
                  {item.product1Name}
                  {item.product1Price}
                </div>
              ))
            }
        </div>
        </div>
        <div className='btn'>
          <button><NavLink className='btnlink' to='/New' style={{textDecoration:'none'}}>Shop New</NavLink></button>
        </div>
        <div className='saleContainer'>
            <div className='textContainer'>
            <AiFillThunderbolt className='icon' />
              <p>SALE IS ON!</p>
              <h1>25% OFF</h1>
              <p className='p'>25% off sitewide using TEES25 at checkout</p>
            </div>
            <div className='imgContainer'>
              <img src="https://static.wixstatic.com/media/c837a6_2749f733af59407699862291aaef4b44~mv2.jpg/v1/fill/w_745,h_888,al_c,q_85,enc_auto/c837a6_2749f733af59407699862291aaef4b44~mv2.jpg" alt="" />
            </div>
        </div>
        <div className='offContainer'>
            <h1>GET 10% OFF ON YOUR FIRST ORDER!</h1>
        </div>
    </div>
    </>
  )
}

export default Main
