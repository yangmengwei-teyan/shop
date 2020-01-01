import React, { Component } from 'react';
import {Route} from 'react-router-dom'
class MyRouter extends Component {
    render() {
        const {routerList}=this.props
        console.log(this.props)
        return (
            <div>
           
              {
                //传参
                routerList.map((v, i) => {
                    return <Route path={v.path} key={i} render={(props) => {
                        let Com = v.com
                        if (v.children) {
                            return <Com {...props} children={v.children} />
                        } else {
                            return <Com {...props} />
                        }
                    }} />
                })
            }
            { /*
             {
            routerList.map((item,index)=>{
                return <Route path={item.path} key={index} render={(props)=>{
                    let Com=item.com
                    if(item.children){
                        return <Com {...props} children={item.children}></Com>
                    }else{
                        return <Com {...props}></Com>
                    }
                }}>
                        </Route>
            })    
            }
             {
               routerList.map((item,index)=>{
                    return <Route path={item.path} key={index} render={(props)=>{
                    let Com=item.com
                            if(item.children){
                                return <Com {...props} children={item.children}></Com>
                            }else{
                                return <Com {...props}></Com>
                            }
                    }}>
                                
                            </Route>
               })
           }
           {
               routerList.map((item,index)=>{
                   return <Route path={item.path} key={index} render={(props)=>{
                       let Com=item.com
                       if(item.children){
                           return <Com {...props} children={item.children}></Com>
                       }else{
                           return <Com {...props}></Com>
                       }
                   }}>
                   </Route>
               })
           }{
               routerList.map((item,index)=>{
                   return <Route path={item.path} key={index} render={(props)=>{
                       let Com=item.com
                       if(item.children){
                           return <Com {...props} children={item.children}></Com>
                       }else{
                           return <Com {...props}></Com>
                       }
                   }}>
                   </Route>
               })
           }
            */
            }
          
           
            </div>
        );
    }
}

export default MyRouter;