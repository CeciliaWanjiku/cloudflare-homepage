import React from 'react'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  SecondCardHeading,
  CardImage,
  CardFieldset,
  CardButton
} from '../components/Card'

const CardTemplate = props => {
  const data = props.children
 
  return (
    <CardWrapper>
      <CardHeader>
        {data.header3 ?
               <SecondCardHeading>
            {data.header3}
            
          </SecondCardHeading>
          : " "
          
        }
        {data.header1 ? 
           <CardHeading>
            {data.header1}
          </CardHeading>
          : " "
        }
        {data.image ?
          <CardImage src={data.image} />
          : ""
        }
      </CardHeader>
      {data.content ? 
        <CardBody>
        {data.content}
        </CardBody>
        : ""
      }
      {data.seeMore ?
        <CardFieldset>
          <CardButton type='button'>Learn more</CardButton>
        </CardFieldset>
        : ""
      }

      
    </CardWrapper>
  )
}
export default CardTemplate
