import React, { Component, Fragment } from 'react'
import Data  from './data.json';
import ThongTinDatGhe from './ThongTinDatGhe';
import HangGhe from './HangGhe'
export default class DatVe extends Component {
    renderHangGhe=()=>{
        return Data.map((hangGhe,index)=>{
            return <Fragment key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
        </Fragment>
        }) 
    }
    render() {
        return (
            <div className="bookingMovie">
               <div className='overplaybackground'>
               <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-center">
                            <div className="text-light display-4">Booking Movie</div>
                                <div className="mt-5 text-warning" style={{fontSize:"25px",marginRight:120}}>Màn Hình</div>
                            <div className="mt-2  text-right">
                                <div className="screen"> </div>
                                {this.renderHangGhe()}
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div style={{fontSize:'35px'}} className=" text-light mt-2">Danh Sách Ghế Bạn Chọn</div>
                            <ThongTinDatGhe></ThongTinDatGhe>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        )
    }
}
