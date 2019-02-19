import { graphql } from 'gatsby'
import { isEmpty } from 'ramda'

const getInitialState = () => {
  const query = graphql`
    {
      allGoogleSheetQuestionsRow {
        edges {
          node {
            id
            status
            topic
            questiontext
            helptext
            resultstext
            resourcelink
          }
        }
      }
    }
  `

  return isEmpty(query) ? 'Nothing returned' : query
}

// Initial state (temporary)
const initialState = {
  query: getInitialState(),
  checkup: {
    activeQuestionIndex: 0,
    topics: [
      {
        id: '4DDB61C7677B4BA2813D2CAE98EF51D5',
        name: 'Money Troubles',
        questions: [
          {
            body: 'Is anyone chasing you for money?',
            help: '',
            results: 'The fact that someone is chasing you for money',
            id: '759CDC30C25B489A9EB71B7E859F2DD7',
            resource: 'credit and debt',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
          },
          {
            body: 'Do you have payments due or unpaid accounts?',
            help:
              'phone / Work and Income / Cash converters / power bills / car loan / gyms',
            results: 'Your unpaid accounts or due payments',
            id: '8A9B3C23BA41440187B0B9F9EB0D8400',
            resource: 'credit and debt',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
          },
          {
            body:
              "Have you recently had any problems with a product or item you've bought?",
            help: '',
            results:
              'The problem you had with a product or item you brought recently',
            id: 'A7D51C38F34A4EA1919C74013E703C39',
            resource: 'consumer protection',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-12-consumer-protection/what-this-chapter-covers-chapter-12/'
          },
          {
            body:
              'Have you recently had any problems with a service you’ve bought?',
            help: '',
            results:
              'The problem you had recently had with a service you have brought',
            id: '5DBE75B1D33D43DD8AC4E00730B5BD3D',
            resource: 'consumer protection',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-12-consumer-protection/what-this-chapter-covers-chapter-12/'
          },
          {
            body: 'Do you have any unpaid fines?',
            help: '',
            results: 'Your unpaid fines',
            id: 'E2C5A2E126474F56B76719EBC818686E',
            resource: 'court fines',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-32-court-fines/what-this-chapter-covers-chapter-32/'
          }
        ]
      },
      {
        id: '6A83066039A94C1088BBC759E66CB2E7',
        name: 'Housing',
        questions: [
          {
            body: 'Have you recently received an eviction notice?',
            help: '',
            results: 'Your eviction notice',
            id: '9FC65A2D929B4A7DB86BE5417A190928',
            resource: 'tenancy and housing',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
          },
          {
            body: 'Has your landlord failed to lodge and/or return your bond?',
            help: '',
            results: 'That your bond has not been lodged or returned',
            id: 'C3D47C40225E4AE08C1512B79603ADB5',
            resource: 'bond and tenancy',
            url:
              'https://www.tenancy.govt.nz/about-tenancy-services/contact-us/'
          },
          {
            body: 'Are there any belongings you have been unable to pick up?',
            help: '',
            results: 'Your trouble collecting your belongings',
            id: '3BB7BDCBE09B48B99BFD74EC6A4466C0',
            resource: 'tenancy and housing',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
          },
          {
            body: 'Do you have any unpaid rent?',
            help: '',
            results: 'Your unpaid rent',
            id: '86A9B3EDF65043DE92503EFD8B530475',
            resource: 'tenancy and housing',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
          },
          {
            body: 'Do you have any problems with your landlord or flatmates?',
            help: '',
            results: 'Your problems with your landlord and/or flatmates',
            id: '6AA1854FF9354B95968BBA34B4F92F6E',
            resource: 'tenancy and housing',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
          },
          {
            body: 'Do you have any problems with your neighbours?',
            help: '',
            results: 'Problems with your neighbours',
            id: '288852DF29C440259BC9C1FA141821D4',
            resource: 'neighbours',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-11-neighbourhood-life/what-this-chapter-covers-chapter-11/'
          },
          {
            body:
              'Are you having difficulties applying for government or community housing?',
            help: '',
            results:
              'Your difficulties with applying for government or community housing',
            id: '64BC22049E5A4FEEAA51505CF79C1571',
            resource: 'community and government housing',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/social-housing-tenants-in-state-and-community-housing-chapter-15/'
          }
        ]
      },
      {
        id: 'C0501ED83A8D4A42A1FA3E6BD7ADFC6F',
        name: 'Crime',
        questions: [
          {
            body: 'Are you scheduled to appear in court for any reason?',
            help: '',
            results: 'Your court appearance',
            id: '39BB22A504F445FEAB5EA0800B6EABA3',
            resource: 'criminal law',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-34-the-criminal-courts/what-this-chapter-covers-chapter-34/'
          },
          {
            body:
              'Have you or a family member had contact with the police you would like to discuss?',
            help: '',
            results: "Your, or your family member's contact with the police",
            id: '2D525EC086934DF0B82B8D01B7AF4E77',
            resource: 'criminal law',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-34-the-criminal-courts/what-this-chapter-covers-chapter-34/'
          }
        ]
      },
      {
        id: '07213088A2B44D4B982F6FF8A6C17407',
        name: 'Work and Income',
        questions: [
          {
            body: 'Are you having problems with Work and Income?',
            help: '',
            results: 'Your problems with Work and Income',
            id: '87DA47D8ACD14C89948A1513C91A8271',
            resource: 'dealing with Work and Income',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-7-dealing-with-work-and-income/what-this-chapter-covers-chapter-7/'
          },
          {
            body:
              'Would you like to change or review any of your Work and Income arrangements?',
            help: '',
            results: 'Reviewing or changing your Work and Income benefits',
            id: 'EF232E20AC6140A2830E3800954FDD61',
            resource: 'dealing with Work and Income',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-7-dealing-with-work-and-income/what-this-chapter-covers-chapter-7/'
          }
        ]
      },
      {
        id: '9A446019CF9842BB93D3097879973E25',
        name: 'Relationships and Family',
        questions: [
          {
            body:
              'Would you like to discuss the safety of yourself or your children?',
            help: '',
            results: 'The safety of yourself or your children',
            id: '4B5D2C495D7C4DC996E06E6505A6AAA2',
            resource: 'domestic violence',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-29-domestic-violence/what-this-chapter-covers-chapter-29/'
          },
          {
            body:
              'Would you like to discuss arrangements, plans or orders about children?',
            help:
              'who the child/ren live with, spend time with, or your involvement in major long-term issues',
            results: 'Arrangements, plans, or orders about your children',
            id: '522575FC96D443C294938C75EBEF4B45',
            resource: 'Parents, guardians and caregivers',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-27-parents-guardians-and-caregivers/what-this-chapter-covers-chapter-27/'
          },
          {
            body:
              'Do you have any concerns about Child Youth and Family and your whānau?',
            help: '',
            results: 'Concerns about Child Youth and Family and your whānau',
            id: '9C11FDA3C57543158261F434C2EDC88B',
            resource: 'Child Youth and Family',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-28-dealing-with-child-youth-and-family/what-this-chapter-covers-chapter-28/'
          },
          {
            body:
              'Would you like to discuss your rights in any personal relationship, including divorce or separation?',
            help: '',
            results:
              'Your rights in a personal relationship (including divorce and separation)',
            id: '30385CC6362443A4BA83DF081CD3D7E9',
            resource: 'personal relationships and the law',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-26-adult-relationships/what-this-chapter-covers-chapter-26/'
          },
          {
            body:
              'Concerns about your experiences as a child while you were in the care of adults or institutions?',
            help: '',
            results: 'Your experiences as a child',
            id: 'F6044D7F0A7E4F81B755D0099EE9FD6B',
            resource: '',
            url: ''
          }
        ]
      },
      {
        id: 'B4EC55D2014740F88AD3E3F94371A3F5',
        name: 'Employment',
        questions: [
          {
            body: 'Are you having any problems at work?',
            help: '',
            results: 'Your problems at work',
            id: 'F3290A11500A4EABAD05DC0F3005F4AF',
            resource: 'resolving employment problems',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
          },
          {
            body:
              'Are you worried about getting fired, laid off, or having your hours cut?',
            help: '',
            results:
              'Your concerns about losing your job or having your hours cut',
            id: 'BC60D4FA6BC548D9A28F14261C883E87',
            resource: 'resolving employment problems',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
          },
          {
            body: 'Does your employer owe you money?',
            help: '',
            results: 'Your employer owes you money',
            id: '11BF1DB8DC6941D7B9057B46154DA6DA',
            resource: 'resolving employment problems',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
          },
          {
            body:
              'Do you feel like you have been treated unfairly due to your gender, ethnicity, religion etc?',
            help: '',
            results: 'Discrimination at work',
            id: '2CDB3B20E34E48E29091055A678CB400',
            resource: 'resolving employment problems',
            url:
              'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
          }
        ]
      },
      {
        id: '6FC5D30617CE43D6A0EB05D0C4243037',
        name: 'Other',
        questions: [
          {
            body:
              'Are you worried about how your child is being treated at school?',
            help: '',
            results: 'Concerns about how your child is being treated at school',
            id: '692D1218BF3E43489B7F8DF76A679713',
            resource: 'student rights',
            url: 'http://www.wclc.org.nz/student-rights-service/'
          },
          {
            body:
              'Do you have concerns around your immigration status in New Zealand?',
            help: '',
            results: 'Immigration status',
            id: '6729B7CD5B6B425FB782260BEEAE47F4',
            resource: '',
            url: ''
          },
          {
            body:
              'Are you having trouble bringing family members to New Zealand?',
            help: '',
            results: 'Trouble bringing family members to New Zealand',
            id: '79591D25C03D4AA7912E1366DD282586',
            resource: '',
            url: ''
          }
        ]
      }
    ],
    responses: []
  }
}

export default initialState
