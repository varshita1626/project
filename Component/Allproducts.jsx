import React from 'react'
import './Allproducts.css'
import { NavLink } from 'react-router-dom'

const Allproducts = () => {

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
      product1Img: <img src='https://static.wixstatic.com/media/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product1Name: <p> I'm product</p>,
      product1Price: <p>$15.00</p>,
    },{
      product1Img: <img src='https://static.wixstatic.com/media/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product1Name: <p> I'm product</p>,
      product1Price: <p>$15.00</p>,
    },{
      product1Img: <img src='https://static.wixstatic.com/media/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product1Name: <p> I'm product</p>,
      product1Price: <p>$15.00</p>,
    },
    ]

    const product2 = [{
      product2Img: <img src='https://static.wixstatic.com/media/c837a6_e57f006d920347efa9e390762ecb7120~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_e57f006d920347efa9e390762ecb7120~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product2Name: <p> I'm product</p>,
      product2Price: <p>$15.00</p>,
    },{
      product2Img: <img src='https://static.wixstatic.com/media/c837a6_7d2a4773c9714fcd86ed78a0b9d1d086~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7d2a4773c9714fcd86ed78a0b9d1d086~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product2Name: <p> I'm product</p>,
      product2Price: <p>$15.00</p>,
    },{
      product2Img: <img src='https://static.wixstatic.com/media/c837a6_8558a07ad8084a9cb9de58022d440527~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_8558a07ad8084a9cb9de58022d440527~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product2Name: <p> I'm product</p>,
      product2Price: <p>$15.00</p>,
    },{
      product2Img: <img src='https://static.wixstatic.com/media/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product2Name: <p> I'm product</p>,
      product2Price: <p>$15.00</p>,
    },
    ]

    const product3 = [{
      product3Img: <img src='https://static.wixstatic.com/media/c837a6_6a83893e75e048b3a61c7a8711b93da3~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_6a83893e75e048b3a61c7a8711b93da3~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product3Name: <p> I'm product</p>,
      product3Price: <p>$15.00</p>,
    },{
      product3Img: <img src='https://static.wixstatic.com/media/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_fd300737ecf3406b83fd9be5d67463e4~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product3Name: <p> I'm product</p>,
      product3Price: <p>$15.00</p>,
    },{
      product3Img: <img src='https://static.wixstatic.com/media/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product3Name: <p> I'm product</p>,
      product3Price: <p>$15.00</p>,
    },{
      product3Img: <img src='https://static.wixstatic.com/media/c837a6_dff384ebdb954fd9a5903b028ce213c7~mv2.jpg/v1/fill/w_301,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_dff384ebdb954fd9a5903b028ce213c7~mv2.jpg' style={{height:'322px',width:'241px'}}/>,
      product3Name: <p> I'm product</p>,
      product3Price: <p>$15.00</p>,
    },
    ]
  return (
    <div className='All'>
      <div className='slides'>
          <p style={{color:'black', fontSize:'25px', marginTop:'50px'}}>Browse by</p>
          <hr />
          <p className='p1' style={{color:'black', fontSize:'15px', padding:'5px' , cursor:'pointer'}}>All Products</p>
          <p className='p1' style={{color:'black', fontSize:'15px', padding:'5px', cursor:'pointer'}}><NavLink className='' to="/Men" style={{textDecoration:'none', color:'black'}}>Men</NavLink></p>
          <p className='p1' style={{color:'black', fontSize:'15px', padding:'5px', cursor:'pointer'}}><NavLink className='' to="/New" style={{textDecoration:'none', color:'black'}}>New Drops</NavLink></p>
          <p className='p1' style={{color:'black', fontSize:'15px', padding:'5px', cursor:'pointer'}}><NavLink className='' to="/Women" style={{textDecoration:'none', color:'black'}}>Women</NavLink></p>

          <p style={{color:'black', fontSize:'25px', marginTop:'50px'}}>Filter by</p>
          <hr />
          <p style={{color:'black'}}>Size</p>
          <script>
            <select name="" id="">Large</select>
          </script>
        </div>
        <div className='drops'>
          <div className='text'>
            <h1 style={{color:'black', marginTop:'80px', fontSize:'50px'}}>All Products</h1>
            <p style={{color:'black', marginTop:'30px'}}>16 Products</p>
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
        <div className='product2Container'>
            {
              product2.map((item, index)=>(
                <div className='product2' key={index}>
                  {item.product2Img}
                  {item.product2Name}
                  {item.product2Price}
                </div>
              ))
            }
        </div>
        <div className='product3Container'>
            {
              product3.map((item, index)=>(
                <div className='product3' key={index}>
                  {item.product3Img}
                  {item.product3Name}
                  {item.product3Price}
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

export default Allproducts
