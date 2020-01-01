import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import '../mock'
import './App.css'
export class Shoop extends Component {
    state={
        index:0
    }
    render() {
        const {list,childrenList,Catering,Del,Add}=this.props
        console.log(childrenList)
        return (
            <div className="shoop" >
                        <div className="left">
                        {
                            list.map((item,index)=>{
                                return <div key={index} className="set" onClick={()=>{
                                    Catering(item,index)
                                }}>
                                {item.name}
                                     </div>
                            })
                        }
                        </div>
                        <div className="right">
                            {
                                childrenList.map((item,index)=>{
                                    return <div key={index}>
                                     <dl>
                                            <dt>
                                            <img src={item.image} style={{width:'100px',height:'100px'}} alt=""/>
                                            </dt>
                                            <dd>
                                            <p>{item.name}</p>
                                            <p>￥{item.price}</p>
                                            <button onClick={()=>{
                                                Del(index)
                                            }}>-</button>
                                            <span className={item.count>0?'block':'none'}>{item.count}</span>
                                            <button onClick={()=>{
                                                Add(index)
                                            }}>+</button>
                                            </dd>
                                     </dl>
                                    {item.name}
                                    </div>
                                })
                            }
                        </div>
                       
            </div>
        )
    }
    componentDidMount(){
       const {getList}=this.props
       getList()
    }
}
//从仓库里面去初始值
const mapStateToProps = (state) => {
    const {list,childrenList}=state
    return {
        list,
        childrenList
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
            getList(){
                dispatch((next)=>{
                    Axios.get('/getList').then(res=>{
                        // console.log(res)j
                        res.data.goods.map((item,index)=>{
                         item.counts=0
                       item.prices=0
                        //  console.log(res.data.goods)
                         item.foods.forEach((item,index)=>{
                             item.count=0
                             item.flag=false
                            //  console.log(item)
                         })
                        })
                        next({
                            type:'GET_SHOOP',
                            list:res.data
                        })
                        console.log(res.data)
                    })
                })
            },
            Catering(item,index){
                // console.log(item,index)
                dispatch({
                    type:'CATE_RING',
                    item,index
                })
            },
            Add(index){
                dispatch({
                    type:'ADD_COUNT',
                    index
                })
            },
            Del(index){
                dispatch({
                    type:'DEL_COUNT',
                    index
                })
            }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shoop)
