export const NO_BUTTON_CLICKED = 'NO_BUTTON_CLICKED'
export const NOT_SURE_BUTTON_CLICKED = 'NOT_SURE_BUTTON_CLICKED'
export const YES_BUTTON_CLICKED = 'YES_BUTTON_CLICKED'
export const YES = 'YES'
export const NO = 'NO'
export const NOT_SURE = 'NOT_SURE'
export const QUESTION_SELECTED = 'QUESTION_SELECTED'

export const INITIAL_STATE = {
  activeQuestion: 'e0db8204-e1c3-4916-a31d-c29849547294',
  topics: [
    {
      topic: 'Money Troubles',
      questions: [
        {
          body: 'Is anyone chasing you for money?',
          help: 'The fact that someone is chasing you for money',
          id: 'e0db8204-e1c3-4916-a31d-c29849547294',
          resource: 'credit and debt',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
        },
        {
          body:
            'Do you have payments due or unpaid accounts? E.g. phone / Work and Income / Cash converters / power bills / car loan / gyms',
          help: 'Your unpaid accounts or due payments',
          id: 'c5f992d5-f7a7-473a-9709-5c153bb2e0d5',
          resource: 'credit and debt',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
        },
        {
          body:
            "Have you recently had any problems with a product or item you've bought?",
          help:
            'The problem you had with a product or item you brought recently',
          id: '6ef7db8b-fd50-452b-bdc3-1f9cb55a03a3',
          resource: 'consumer protection',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-12-consumer-protection/what-this-chapter-covers-chapter-12/'
        },
        {
          body:
            'Have you recently had any problems with a service you’ve bought?',
          help:
            'The problem you had recently had with a service you have brought',
          id: 'cc3533af-759e-465d-baab-32a454e19390',
          resource: 'consumer protection',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-12-consumer-protection/what-this-chapter-covers-chapter-12/'
        },
        {
          body: 'Do you have any unpaid fines?',
          help: 'Your unpaid fines',
          id: '535e450e-2e91-41a2-b0b7-1e52f4885c3e',
          resource: 'court fines',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-32-court-fines/what-this-chapter-covers-chapter-32/'
        }
      ]
    },
    {
      topic: 'Housing',
      questions: [
        {
          body: 'Have you recently received an eviction notice?',
          help: 'Your eviction notice',
          id: 'b42fa7f3-54d7-40bc-a714-329c39e1d03f',
          resource: 'tenancy and housing',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
        },
        {
          body: 'Has your landlord failed to lodge and/or return your bond?',
          help: 'That your bond has not been lodged or returned',
          id: '4abc42e3-86bf-4937-a86e-23091a2188bd',
          resource: 'bond and tenancy',
          url: 'https://www.tenancy.govt.nz/about-tenancy-services/contact-us/'
        },
        {
          body: 'Are there any belongings you have been unable to pick up?',
          help: 'Your trouble collecting your belongings',
          id: 'e1414269-ff59-4f13-9edf-d7ccfa3f990e',
          resource: 'tenancy and housing',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
        },
        {
          body: 'Do you have any unpaid rent?',
          help: 'Your unpaid rent',
          id: '45ed1070-95ba-4908-b8da-5b7659b774b9',
          resource: 'tenancy and housing',
          url: 'tenancy and housing'
        },
        {
          body: 'Do you have any problems with your landlord or flatmates?',
          help: 'Your problems with your landlord and/or flatmates',
          id: '09ecc503-e3ef-4548-a053-f3095b2edd82',
          resource: 'tenancy and housing',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
        },
        {
          body: 'Do you have any problems with your neighbours?',
          help: 'Problems with your neighbours',
          id: '87f1093e-7541-4ce6-b528-d6b30034908e',
          resource: 'neighbours',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-11-neighbourhood-life/what-this-chapter-covers-chapter-11/'
        },
        {
          body:
            'Are you having difficulties applying for government or community housing?',
          help:
            'Your difficulties with applying for government or community housing',
          id: '0a1ced1f-e5c2-4811-a88c-9b9414c1fcce',
          resource: 'community and government housing',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/social-housing-tenants-in-state-and-community-housing-chapter-15/'
        }
      ]
    },
    {
      topic: 'Crime',
      questions: [
        {
          body: 'Are you scheduled to appear in court for any reason?',
          help: 'Your court appearance',
          id: '9b4b3ff2-330c-4362-93a6-b88f000c6cb2',
          resource: 'criminal law',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-34-the-criminal-courts/what-this-chapter-covers-chapter-34/'
        },
        {
          body:
            'Have you or a family member had contact with the police you would like to discuss?',
          help: "Your, or your family member's contact with the police",
          id: 'bc3a41bf-d580-49c1-9d7f-885e95cba719',
          resource: 'criminal law',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-34-the-criminal-courts/what-this-chapter-covers-chapter-34/'
        }
      ]
    },
    {
      topic: 'Work and Income',
      questions: [
        {
          body: 'Are you having problems with Work and Income?',
          help: 'Your problems with Work and Income',
          id: 'ca84cbb6-0dd0-49e5-b3e7-688b54bb25ce',
          resource: 'dealing with Work and Income',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-7-dealing-with-work-and-income/what-this-chapter-covers-chapter-7/'
        },
        {
          body:
            'Would you like to change or review any of your Work and Income arrangements?',
          help: 'Reviewing or changing your Work and Income benefits',
          id: '12977a06-1fed-4e49-ac40-19890c91d21c',
          resource: 'dealing with Work and Income',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-7-dealing-with-work-and-income/what-this-chapter-covers-chapter-7/'
        }
      ]
    },
    {
      topic: 'Relationships and Family',
      questions: [
        {
          body:
            'Would you like to discuss the safety of yourself or your children?',
          topic: 'Relationships and family',
          help: 'The safety of yourself or your children',
          id: '7c958c28-1eef-459f-a429-4dee6d54433e',
          resource: 'domestic violence',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-29-domestic-violence/what-this-chapter-covers-chapter-29/'
        },
        {
          body:
            'Would you like to discuss arrangements, plans or orders about children? (e.g. who the child/ren live with, spend time with, or your involvement in major long-term issues)',
          topic: 'Relationships and family',
          help: 'Arrangements, plans, or orders about your children',
          id: '2fd3be2f-7169-4e49-ba26-f8713f58778f',
          resource: 'Parents, guardians and caregivers',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-27-parents-guardians-and-caregivers/what-this-chapter-covers-chapter-27/'
        },
        {
          body:
            'Do you have any concerns about Child Youth and Family and your whānau?',
          topic: 'Relationships and family',
          help: 'Concerns about Child Youth and Family and your whānau',
          id: 'eab94445-5746-4480-98f0-21bb2062130d',
          resource: 'Child Youth and Family',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-28-dealing-with-child-youth-and-family/what-this-chapter-covers-chapter-28/'
        },
        {
          body:
            'Would you like to discuss your rights in any personal relationship, including divorce or separation?',
          topic: 'Relationships and family',
          help:
            'Your rights in a personal relationship (including divorce and separation)',
          id: '9bae56af-1b8e-468f-8f4a-bccb38f39bdd',
          resource: 'personal relationships and the law',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-26-adult-relationships/what-this-chapter-covers-chapter-26/'
        },
        {
          body:
            'Concerns about your experiences as a child while you were in the care of adults or institutions?',
          topic: 'Relationships and family',
          help: 'Your experiences as a child',
          id: 'b44c9dad-e05d-433f-9690-2ec2d6fdb82e',
          resource: '?????',
          url: '?????'
        }
      ]
    },
    {
      topic: 'Employment',
      questions: [
        {
          body: 'Are you having any problems at work?',
          help: 'Your problems at work',
          id: '5b1529b7-fbcb-499d-90d4-a485786c474f',
          resource: 'resolving employment problems',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
        },
        {
          body:
            'Are you worried about getting fired, laid off, or having your hours cut?',
          help: 'Your concerns about losing your job or having your hours cut',
          id: 'b81e3436-82cb-4d3e-81d7-88c3cddb6658',
          resource: 'resolving employment problems',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
        },
        {
          body: 'Does your employer owe you money?',
          help: 'Your employer owes you money',
          id: 'b0da5e01-8453-4fd3-9b62-f6abaa7ec812',
          resource: 'resolving employment problems',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
        },
        {
          body:
            'Do you feel like you have been treated unfairly due to your gender, ethnicity, religion etc?',
          help: 'Discrimination at work',
          id: 'e6ef6d83-b8ee-4fee-9ecf-7f11ec04e393',
          resource: 'resolving employment problems',
          url:
            'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
        }
      ]
    },
    {
      topic: 'Other',
      questions: [
        {
          body:
            'Are you worried about how your child is being treated at school?',
          help: 'Concerns about how your child is being treated at school',
          id: '6ca4863b-ce36-4341-bab9-2210b58a18e4',
          resource: 'student rights',
          url: 'http://www.wclc.org.nz/student-rights-service/'
        },
        {
          body:
            'Do you have concerns around your immigration status in New Zealand?',
          help: 'Immigration status',
          id: '4b3de3a5-1e17-48d4-a513-1c009a2d0c87',
          resource: '????',
          url: '????'
        },
        {
          body:
            'Are you having trouble bringing family members to New Zealand?',
          help: 'Trouble bringing family members to New Zealand',
          id: 'f20cd7ed-2eb8-47d3-9463-eb7f3359d521',
          resource: '????',
          url: '????'
        }
      ]
    }
  ],
  responses: {
    'e0db8204-e1c3-4916-a31d-c29849547294': 'Yes',
    'c5f992d5-f7a7-473a-9709-5c153bb2e0d5': 'No',
    '6ef7db8b-fd50-452b-bdc3-1f9cb55a03a3': 'Unknown'
  }
}
