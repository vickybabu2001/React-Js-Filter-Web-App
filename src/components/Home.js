import React, { useState } from 'react'
import Fooddata from './data'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
const Home = () => {
    const [menu, setMenu] = useState(Fooddata);
    const filteritems=(curritems)=>{
        const updateItems=Fooddata.filter((curr,ind)=>{
            return curr.category===curritems;
        })
        setMenu(updateItems);
    }
    return (

        <section className='iteam_section mt-2 container'>
            <h2 className='text-center mb-2' style={{ fontWeight: 400 }}>Filter Your Food Here</h2>
            <br></br>

            <div className="btn-container d-flex justify-content-around mt-2">
                <button className="btn btn-danger" onClick={() => filteritems("punjabi")}>Punjabi</button>
                <button className="btn btn-primary" onClick={() => filteritems("vadapav")}>Vadapav</button>
                <button className="btn btn-success" onClick={() => filteritems("Pizza")}>Pizza</button>
                <button className="btn btn-danger" onClick={() => filteritems("Chai")}>Chai</button>
                <button className="btn btn-primary" onClick={() => filteritems("Frankie")}>Frankie</button>
                <button className="btn btn-primary" onClick={() => setMenu(Fooddata)}>All</button>
            </div>
            <div className='container mt-3'>
                <div className="row d-flex justify-content-arround">
                    {
                        menu.map((el,end)=>{
                            return(
                                <>
                        <Card style={{ width:'19rem',margin:"31px"}}>
            <Card.Img variant="top" src={el.imgdata} style={{ height: "16rem" }} className='mt-3'/>
                <Card.Body>
                    <Card.Title>{el.rname}</Card.Title>
                    <Card.Text>
                        Price:{el.price}
                    </Card.Text>
                    <div className='button_div d-flex justify-content-center'>
                    <Button variant="primary" className='col-lg-10'>Add to Cart</Button>
                    </div>
                   
                </Card.Body>
            </Card>
        </>
    )
   })
        }
            </div >
        </div >
  </section >

    );
}

export default Home;
