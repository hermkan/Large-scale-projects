import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";
import './directory.styles.scss'

class Directory extends React.Component {
 constructor(){
  super()
   this.state = {
    sections,
   }
 }
 render(){
  return (
    <div className="directory-menu">
      {
        this.state.sections.map(({id, ...otherProps})=>{
          return <MenuItem key={id} {...otherProps} />
        })
      }
    </div>
  )
}
}

export default Directory