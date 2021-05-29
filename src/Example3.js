import './App.css'
import React, { Component } from 'react';
import data from "./detilProduk.json";

class Example3 extends Component {
	render() {
		return (
            <div><h3 className='sub-judul'>Produk Kopi</h3>
                {
                    data.offers.offers.map((Detail) => {
                        return (
                            <ul className='card'>
                                <li><img height='314' src={Detail.image} alt="another"/></li>
                                <li id='jenis'><p>{Detail.jenis}</p></li>
                                <li id='price'><p>{Detail.price} ({Detail.priceCurrency})</p></li>    
                            </ul>
                        );
                    })
                }
                <div className='footer'>
                    <h4>Dian Asmara Dahana @2021 | <a href='https://github.com/dianasmrdhn/TugasPrak4-PWL'>Github Saya</a></h4>                   
                </div>
            </div>
        );
    }
} 
export default Example3;