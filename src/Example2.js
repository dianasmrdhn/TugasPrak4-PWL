import React, { Component } from 'react';
import data from "./detilProduk.json";
import './App.css'

class Example2 extends Component {
	render() {
		return (
            <section className='tengah'>
				<div className='label'>
				   <h3>{data.name}</h3>
				   <p>Website yang berisi jenis-jenis kopi di Indonesia</p>
				   <img height='400' src={data.image} alt='sampel' id='image'/>
				</div>
				<div className='keterangan'>
				   <p></p>
				   <p className='Jenis'>Jenis : {data.jenis}</p>
				   <p className="Price">price : {data.price} ({data.priceCurrency})</p>
				   <br></br>
				</div>
				<button>Buy it for {data.price} ({data.priceCurrency})</button>
            </section>
        );
    }
} 
export default Example2;