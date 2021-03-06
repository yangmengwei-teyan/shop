import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
export class Home extends Component {
  render() {
      const {children}=this.props
    console.log(this.props.children)
    return (
      <div>
        <header></header>
        <main>
                <nav>
                    {
                    children.map((item,index)=>{
                        return <NavLink to={item.path} activeClassName="active" key={index}>
                                {item.title}
                            </NavLink>
                    })  
                    }
                </nav>
        <div className="content">
                  
                   
        </div>
        </main>
        <footer>
                <NavLink to="/pj" activeClassName="active">
                联系商家
                </NavLink>
        <p>
                <span>数量</span>  &nbsp;
                <span>总价</span>
        </p>
        <NavLink to="/login" activeClassName="active" >
        结账
        </NavLink>
        </footer>
      </div>
    )
  }
}
//从仓库取初始值
const mapStateToProps = (state) => {
 
    return {
      
    }
}
//改变更新值
const mapDispatchToProps =(dispatch) => {
        return {

        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
