import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Image from './images/img1.svg'
import Vid from './images/Screenshot 2020-05-18 at 12.42.56.png'
import Icon1 from './images/icon 1.svg'
import illustration1 from './images/illustration_protect-presence.svg'
import illustration2 from './images/illustration_secure-teams-devices.svg'
import Icon2 from './images/icon2.svg'
import Icon3 from './images/icon3.svg'
import Logo from './images/logo-cloudflare-dark.svg'
import styled from 'styled-components'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  SecondCardHeading,
  CardFieldset,
  CardButton
} from './components/Card'

import IconTemplate from './templates/iconTemplate'
import CardTemplate from './templates/cardTemplate'

import * as contentful from 'contentful'

function App () {
  const [hadError, setError] = useState(false)
  const [cardData, setCardData] = useState({})

    // {

  //     entries.items.forEach(entry => {
  //       if (entry.fields) {
  //         console.log('....', entry.fields)
  //       }
  //     })
  //   }
  var client = contentful.createClient({
    space: 'rfgmckv84976',
    accessToken: 'Q-dMobDxcN9KfGGlGOYecL6VjS0RmhiEidZkyDP7rd8'
  })

  async function fetchData() {
    await client.getEntries({ content_type: 'cardStyle' })
      .then(entries => setCardData(entries.items))
     .catch(err => setError(err))
    
}
  useEffect(() => {
    fetchData()
  })

  console.log(cardData[0])
  // for (let data of cardData) {
  //   console.log(data)
  // }
  

  const obj = {
    image: Icon1,
    header: 'Security',
    content:
      'Firewall, DDoS protection, rate limiting, bot management, VPN, and more',
    link: '/',
    linkText: 'Read More >'
  }
  const obj2 = {
    image: Icon1,
    header: 'Security',
    content:
      'Firewall, DDoS protection, rate limiting, bot management, VPN, and more',
    link: '/',
    linkText: 'Read More >'
  }
  const obj3 = {
    image: Icon1,
    header: 'Security',
    content:
      'Firewall, DDoS protection, rate limiting, bot management, VPN, and more',
    link: '/',
    linkText: 'Read More >'
  }

  const obj4 = {
    header1: 'Built for anything connected to the Internet.',
    content: ''
  }

  const obj5 = {
    header3:
      'Cloudflare is the foundation for your infrastructure, applications, and teams.',
    content:
      'Cloudflare secures and ensures the reliability of your external-facing resources such as websites, APIs, and applications. It protects your internal resources such as behind-the-firewall applications, teams, and devices. And it is your platform for developing globally scalable applications.',
    link: '/',
    linkText: 'Read More >'
  }

  const obj6 = {
    header3: 'CLOUDFLARE FOR INFRASTRUCTURE',
    header1: 'Protect your Internet presence.',
    content:
      'Your website, APIs, and applications are your key channels for doing business with your customers and suppliers. As more and more shift online, ensuring these resources are secure, performant and reliable is a business imperative.Cloudflare for Infrastructure is a complete solution to enable this for anything connected to the Internet.'
  }

  const obj7 = {
    image: illustration1
  }
  const obj8 = {}
  return (
    <div className='app-layout'>
      <div className='two-sections'>
        <div className='first-section'>
          <CardWrapper>
            <CardHeader>
              <CardHeading>
                Extending Cloudflare to all your networks
              </CardHeading>
            </CardHeader>

            <CardBody>
              Now more than ever, you need your networks to continue to be
              secure, fast, and reliable. Cloudflare Magic Transit offers DDoS
              protection and traffic acceleration for all your network
              infrastructure— whether on-premise, cloud-hosted, or in a hybrid
              environment.
            </CardBody>
            <CardFieldset>
              <CardButton type='button'>Learn more</CardButton>
            </CardFieldset>
          </CardWrapper>
        </div>
        <div className='second-section'>
          <CardWrapper>
            <CardHeader>
              <img src={Image} alt='' />
            </CardHeader>
          </CardWrapper>
        </div>
      </div>

      <div className='banner-section'>
        <div className='block-text'>
          <div className='text-group'>
            <h3>Protect and accelerate your websites, apps, and teams.</h3>
          </div>
        </div>
        <div className='btn-group'>
          <a href='/' className='btn'>
            {' '}
            Sign up
          </a>
          <a href='/' className='btn'>
            Contact sales{' '}
          </a>
        </div>
      </div>
      <div className='two-sections'>
        <div className='second-section'>
          <CardWrapper>
            <CardHeader>
              <SecondCardHeading>
                Extending Cloudflare to all your networks
              </SecondCardHeading>
            </CardHeader>

            <CardBody>
              We’ve always believed in the Internet. Originally conceived as a
              communications network for humanity during a crisis, it’s come a
              long way since then. But in this moment, it’s being put to use for
              that original purpose. Around the world thousands of network
              engineers, technicians, and system administrators are working
              tirelessly to keep this system functioning for the rest of us.
              They’re grappling with greater network demands, a rapid
              acceleration in remote work, and a growing risk of cyber threats.
              They persevere so that the Internet continues to be secure, fast,
              and reliable. Cloudflare is proud to be helping them with these
              efforts. Our mission: to help build a better Internet.
            </CardBody>
          </CardWrapper>
        </div>
        <div className='first-section'>
          <CardWrapper>
            <CardHeader>
              <CardHeading>The Internet was #BuiltForThis</CardHeading>
              <img src={Vid} alt='' />
            </CardHeader>
          </CardWrapper>
        </div>
      </div>
      <div className='icon-section'>
        <IconTemplate>{obj}</IconTemplate>
        <IconTemplate>{obj2}</IconTemplate>
        <IconTemplate>{obj3}</IconTemplate>
      </div>

      <div className='two-sections'>
        <div className='first-section'>
          <CardTemplate>{obj4}</CardTemplate>
        </div>
        <div className='second-section'>
          <CardTemplate>{obj5}</CardTemplate>
        </div>
      </div>
      <div className='two-sections'>
        <div className='first-section'>
          <CardTemplate>{obj6}</CardTemplate>
        </div>
        <div className='second-section'>
          <CardTemplate>{obj7}</CardTemplate>
        </div>
      </div>
    </div>
  )
}

export default App
