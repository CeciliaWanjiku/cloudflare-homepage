import React from 'react'

import {
  IconWrapper,
  BoxWrapper,
  IconHeader,
  IconParagraph,
  IconLink,
  IconImage
} from '../components/Icons'


const IconTemplate = (props) => {
  return (
      <BoxWrapper>
        <IconImage src={props.children.image}  alt=''/>
        <IconHeader>
          {props.children.header}
        </IconHeader>
        <IconParagraph>
          {props.children.content}
        </IconParagraph>
        <IconLink href={props.children.link}>
          {props.children.linkText}
          
        </IconLink>
      </BoxWrapper>
  )
}

export default IconTemplate