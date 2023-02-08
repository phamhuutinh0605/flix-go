import React, { Component } from 'react'
import { connect } from 'react-redux'
class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;

            }
            let cssGheDangDat='';
            let indexGheDangDat=this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe);
            if(indexGheDangDat!==-1){
                cssGheDaDat='gheDangChon';
            }
            return <button onClick={()=>{
                this.props.datGhe(ghe)
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return <span className="rowNumber">
            {this.props.hangGhe.danhSachGhe.map((hang,index)=>{
                return <span className="rowNumber" key={index}>{hang.soGhe}</span>
            })}
        </span>
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className="ml-4">
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }
    render() {
        return (
            <div className="text-light text-left ml-3 mt-5" style={{ fontSize: 30 }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        danhSachGheDangDat:state.DatVeReducer.danhSachGheDangDat,
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        datGhe:(ghe)=>{
            dispatch({
                type:'DAT_GHE',
                ghe:ghe
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HangGhe);