import React, { useState, useEffect } from 'react'

import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Container, Grid, AccordionSummary, AccordionDetails } from '@mui/material'
import { FAQ__List, friends_VPN_Basics } from './FAQList'
import './accordionStyles.css'
import { GetDescBullets } from './bulletsList/GetDescBullets'

function FAQs() {
  useEffect(() => {
    document.title = 'FAQs and TroubleShooting | FriendsVPN'
  }, [])

  const [expandedPanel, setExpandedPanel] = useState(false)

  const handleAccordionChange = panel => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false)
  }

  if (FAQ__List.display) {
    return (
      <div className={window.location.pathname === '/app-faqs' ? 'AppFAQsBackground' : 'FAQsBackground '}>
        <Container maxWidth='lg'>
          <div className='FAQs'>
            <p className='FAQ__Title'>FAQs</p>
            <p className='faq__sub_title'>Need answer? Find them here...</p>
          </div>

          <Grid
            container
            spacing={7}
            xs={12}
            md={8}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Grid
              item
              style={{
                padding: '0',
              }}
            >
              <div>
                <h2>VPN BASICS</h2>

                {FAQ__List.list.map((singleList, index) => {
                  return (
                    <Accordion
                      key={index}
                      square={false}
                      expanded={expandedPanel === singleList.id}
                      onChange={handleAccordionChange(singleList.id)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1d-content' id='panel1d-header'>
                        <p className='FAQ__summary'>{singleList.question || ''}</p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p className='p__element' dangerouslySetInnerHTML={{ __html: singleList?.answer || '' }} />
                        <GetDescBullets descBullets={singleList?.descBullets} />
                        <div dangerouslySetInnerHTML={{ __html: singleList?.answer2 || '' }} />
                      </AccordionDetails>
                    </Accordion>
                  )
                })}


                <h2 style={{ marginTop: '2rem' }}>FriendsVPN BASICS</h2>
                {friends_VPN_Basics.list.map((singleList2, index) => {
                  return (
                    <Accordion
                      key={index}
                      expanded={expandedPanel === singleList2.id}
                      onChange={handleAccordionChange(singleList2.id)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                        <p className='FAQ__summary'>{singleList2.question || ''}</p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p className='p__element' dangerouslySetInnerHTML={{ __html: singleList2?.answer || '' }} />
                        <GetDescBullets descBullets={singleList2?.descBullets} />
                        <GetDescBullets descBullets1={singleList2?.descBullets1} />
                        <p dangerouslySetInnerHTML={{ __html: singleList2?.answer2 || '' }} />
                        <GetDescBullets descBullets2={singleList2?.descBullets2} />
                        <p dangerouslySetInnerHTML={{ __html: singleList2?.answer3 || '' }} />
                        <GetDescBullets descBullets3={singleList2?.descBullets3} />
                        <div dangerouslySetInnerHTML={{ __html: singleList2?.answer4 || '' }} />
                        <GetDescBullets descBullets4={singleList2?.descBullets4} />
                      </AccordionDetails>
                    </Accordion>
                  )
                })}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default FAQs
