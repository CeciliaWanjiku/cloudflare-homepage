import styled from 'styled-components'

export const IconWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const BoxWrapper = styled.div`
  text-align: left;
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow);
`
export const IconImage = styled.img`
max-width: 100%;
height: 56px;
width: 4rem;
`
export const IconHeader = styled.h3`
  line-height: 1.25;
  font-size: 18px;
  margin-top: 0.5rem;
`

export const IconParagraph = styled.p`
  min-height: 5rem;
`

export const IconLink = styled.a`
text-decoration: none;
color: #0055dc;
font-weight: 700
background-color: transparent
`
