import React from 'react'
import { Badge } from 'reactstrap'

const TypeBadge = (props) =>{
    return(
        <Badge color={props.color}>{props.type}</Badge>
    )
}

export default TypeBadge;