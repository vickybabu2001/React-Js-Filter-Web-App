import React from 'react';
import { Table } from 'react-bootstrap';

const CartDetails = () => {
    return (
        <>
         <div className='container mt-2'>
            <h2 className='text-center'>Items Detail Page</h2>
            <section className='container mt-2'>
                <div className="row d-flex">
                    <div className='items_img'>
                        <img style={{ height: "19rem"}} src='https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp' alt='' />
                    </div>
                    <div className='details'>
                        <Table>
                            <tr>
                                <p>Resturent</p>
                            </tr>
                        </Table>
                    </div>
                </div>
            </section>
         </div>
        </>
    );
}

export default CartDetails;
