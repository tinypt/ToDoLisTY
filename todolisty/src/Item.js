import React , {Component} from 'react'

class Item extends Component{
    render(){
    let {text} = this.props

        return(
            <div>
                {text}
            </div>
        )
    }
}

export default Item