import React from 'react'
import './Women.css'
import {NavLink} from "react-router-dom";

const Women = () => {

    const product = [{
        productImg: <img src='https://static.wixstatic.com/media/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg' style={{height:'322px',width:'241px'}} />,
        productName: <p> I'm product</p>,
        productPrice: <p>$15.00</p>
      },{
        productImg: <img src='https://static.wixstatic.com/media/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg' style={{height:'322px',width:'241px'}} />,
        productName: <p> I'm product</p>,
        productPrice: <p>$15.00</p>
      },{
        productImg: <img src='https://static.wixstatic.com/media/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg' style={{height:'322px',width:'241px'}} />,
        productName: <p> I'm product</p>,
        productPrice: <p>$15.00</p>
      },{
        productImg: <img src='https://static.wixstatic.com/media/c837a6_e57f006d920347efa9e390762ecb7120~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_e57f006d920347efa9e390762ecb7120~mv2.jpg' style={{height:'322px',width:'241px'}} />,
        productName: <p> I'm product</p>,
        productPrice: <p>$15.00</p>
      },
    
    ]
    const product1 = [{
      product1Img: <img src='https://static.wixstatic.com/media/c837a6_7d2a4773c9714fcd86ed78a0b9d1d086~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7d2a4773c9714fcd86ed78a0b9d1d086~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product1Name: <p> I'm product</p>,
      product1Price: <p>$15.00</p>,
    },{
      product1Img: <img src='https://static.wixstatic.com/media/c837a6_8558a07ad8084a9cb9de58022d440527~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8558a07ad8084a9cb9de58022d440527~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product1Name: <p> I'm product</p>,
      product1Price: <p>$15.00</p>,
    },{
      product1Img: <img src='https://static.wixstatic.com/media/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product1Name: <p> I'm product</p>,
      product1Price: <p>$15.00</p>,
    },{
      product1Img: <img src='https://static.wixstatic.com/media/c837a6_dff384ebdb954fd9a5903b028ce213c7~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_dff384ebdb954fd9a5903b028ce213c7~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product1Name: <p> I'm product</p>,
      product1Price: <p>$15.00</p>,
    },
    ]
  return (
    <div className='main'>
      <div className='slides'>
          <p style={{color:'black', fontSize:'25px', marginTop:'50px'}}>Browse by</p>
          <hr />
          <p style={{color:'black', fontSize:'15px', padding:'5px'}}><NavLink className='' to="/Men" style={{textDecoration:'none', color:'black'}}>All Products</NavLink></p>
          <p style={{color:'black', fontSize:'15px', padding:'5px'}}><NavLink className='' to="/Men" style={{textDecoration:'none', color:'black'}}>Men</NavLink></p>
          <p style={{color:'black', fontSize:'15px', padding:'5px'}}><NavLink className='' to="/New" style={{textDecoration:'none', color:'black'}}>New Drops</NavLink></p>
          <p style={{color:'black', fontSize:'15px', padding:'5px', cursor:'pointer'}}>Women</p>
        </div>
        <div className='drops'>
          <div className='text'>
            <h1 style={{color:'black', marginTop:'80px', fontSize:'50px'}}>Women</h1>
            <p style={{color:'black', marginTop:'30px'}}>8 Products</p>
            <div className='container4'>
        <div className='productContainer'>
          {
            product.map((item, index)=> (
              <div className='product' key={index}>
                {item.productImg}
                {item.productName}
                {item.productPrice}
              </div>
            ))
            }   
        </div>
        <div className='product1Container'>
            {
              product1.map((item, index)=>(
                <div className='product1' key={index}>
                  {item.product1Img}
                  {item.product1Name}
                  {item.product1Price}
                </div>
              ))
            }
        </div>
        </div>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default Women
