import React from 'react'

import { PageHeading, PageText } from '../styled'

export default function AboutPageContent ({ format }) {
  return (
    <>
      <PageHeading format={format}>About</PageHeading>
      <PageText format={format}>
        The Legal Check-up is an initiative from Wellington & Hutt Valley
        Community Law Centre in conjunction with students from PaperHat’s Cowboy
        team.
      </PageText>
      <PageText format={format}>
        The idea of a <em>legal health check</em> has been used all over the
        world and is based on international research that found that people
        often have multiple, unaddressed legal issues, but don’t think of them
        as <em>legal</em> problems. Because of this, people don’t seek legal
        advice when legal advice could help them.
      </PageText>
      <PageText format={format}>
        By asking simple questions about common issues that a lawyer could help,
        this Checkup helps people identify potential legal issues. As this check
        up is created by, and for New Zealanders, the questions are focused on
        the legal issues that New Zealanders are most likely to experience,
        where legal advice could help sort.
      </PageText>
      <PageText format={format}>
        It is a helpful tool to identify legal issues, but does not form legal
        advice, nor is it guaranteed to identify all issues that a lawyer could
        help with. Please reach out to your local community law centre if you
        have any concerns about any legal issues you a facing. You can find
        information about Community Law services and clinic hours below.
      </PageText>
      <PageText format={format}>
        The Legal Checkup does not create a legal obligation between the user,
        and Community Law, or guarantee legal assistance for the potential legal
        needs.
      </PageText>
      <PageHeading format={format}>Acknowledgements:</PageHeading>

      <PageText format={format}>
        Special acknowledgement to the Halton Legal Clinic in Canada, and the
        Queensland Public Interest Law Clearing House Inc (QPILCH) along with
        the National Association of Community Legal Centres (NACLC) who have
        inspired this initiative.
      </PageText>
      <PageText format={format}>Interface design by: Hamish Dryer</PageText>
      <PageText format={format}>
        Built by the Cowboy hat team from Paperhat
      </PageText>
    </>
  )
}
