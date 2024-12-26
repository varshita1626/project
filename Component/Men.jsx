import React from 'react'
import './Men.css';
import { NavLink } from 'react-router-dom';

const Men = () => {

  const product = [{
    productImg: <img src='https://static.wixstatic.com/media/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg' style={{height:'322px',width:'241px'}} />,
    productName: <p> I'm product</p>,
    productPrice: <p>$15.00</p>
  },{
    productImg: <img src='https://static.wixstatic.com/media/c837a6_9359210da13b4ad5b6c62faf5c369b6b~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_9359210da13b4ad5b6c62faf5c369b6b~mv2.jpg' style={{height:'322px',width:'241px'}} />,
    productName: <p> I'm product</p>,
    productPrice: <p>$15.00</p>
  },{
    productImg: <img src='https://static.wixstatic.com/media/c837a6_8645b4599db54d359dfe8bb70471e801~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8645b4599db54d359dfe8bb70471e801~mv2.jpg' style={{height:'322px',width:'241px'}} />,
    productName: <p> I'm product</p>,
    productPrice: <p>$15.00</p>
  },{
    productImg: <img src='https://static.wixstatic.com/media/c837a6_22d6a5b4c57d437c8f2097ab1e29f97f~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_22d6a5b4c57d437c8f2097ab1e29f97f~mv2.jpg' style={{height:'322px',width:'241px'}} />,
    productName: <p> I'm product</p>,
    productPrice: <p>$15.00</p>
  },

]
const product1 = [{
  product1Img: <img src='https://static.wixstatic.com/media/c837a6_fdb039110b784858933d038f14f78b1c~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_fdb039110b784858933d038f14f78b1c~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
  product1Name: <p> I'm product</p>,
  product1Price: <p>$15.00</p>,
},{
  product1Img: <img src='https://static.wixstatic.com/media/c837a6_6a83893e75e048b3a61c7a8711b93da3~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_6a83893e75e048b3a61c7a8711b93da3~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
  product1Name: <p> I'm product</p>,
  product1Price: <p>$15.00</p>,
},{
  product1Img: <img src='https://static.wixstatic.com/media/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
  product1Name: <p> I'm product</p>,
  product1Price: <p>$15.00</p>,
},{
  product1Img: <img src='https://static.wixstatic.com/media/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
  product1Name: <p> I'm product</p>,
  product1Price: <p>$15.00</p>,
},
]
  return (
    <div className='main'>
      <div className='slides'>
          <p style={{color:'black', fontSize:'25px', marginTop:'50px'}}>Browse by</p>
          <hr />
          <p style={{color:'black', fontSize:'15px', padding:'5px'}}><NavLink className='' to="/Allproducts" style={{textDecoration:'none', color:'black',}}>All Products</NavLink></p>
          <p style={{color:'black', fontSize:'15px', padding:'5px'}}>Men</p>
          <p style={{color:'black', fontSize:'15px', padding:'5px'}}><NavLink className='' to="/New" style={{textDecoration:'none', color:'black'}}>New Drops</NavLink></p>
          <p style={{color:'black', fontSize:'15px', padding:'5px'}}><NavLink className='' to="/Women" style={{textDecoration:'none', color:'black'}}>Women</NavLink></p>

          <p style={{color:'black', fontSize:'25px', marginTop:'50px'}}>Filter by</p>
          <hr />
          <p style={{color:'black'}}>Size</p>
          <script>
            <select name="" id="">Large</select>
          </script>
        </div>
        <div className='drops'>
          <div className='text'>
            <h1 style={{color:'black', marginTop:'80px', fontSize:'50px'}}>Men</h1>
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

export default Men
