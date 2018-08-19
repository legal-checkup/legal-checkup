export const NEXT_QUESTION = 'NEXT_QUESTION'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'

export const INITIAL_STATE = {
  activeQuestion: 1,
  questions: {
    1: {
      body: 'Is anyone chasing you for money?',
      topic: 'Money Troubles',
      help: 'The fact that someone is chasing you for money',
      resource: 'credit and debt',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
    },
    2: {
      body:
        'Do you have payments due or unpaid accounts? E.g. phone / Work and Income / Cash converters / power bills / car loan / gyms',
      topic: 'Money Troubles',
      help: 'Your unpaid accounts or due payments',
      resource: 'credit and debt',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-13-credit-and-debt/what-this-chapter-covers-chapter-13/'
    },
    3: {
      body:
        "Have you recently had any problems with a product or item you've bought?",
      topic: 'Money Troubles',
      help: 'The problem you had with a product or item you brought recently',
      resource: 'consumer protection',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-12-consumer-protection/what-this-chapter-covers-chapter-12/'
    },
    4: {
      body: 'Have you recently had any problems with a service you’ve bought?',
      topic: 'Money Troubles',
      help: 'The problem you had recently had with a service you have brought',
      resource: 'consumer protection',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-12-consumer-protection/what-this-chapter-covers-chapter-12/'
    },
    5: {
      body: 'Do you have any unpaid fines?',
      topic: 'Money Troubles',
      help: 'Your unpaid fines',
      resource: 'court fines',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-32-court-fines/what-this-chapter-covers-chapter-32/'
    },
    6: {
      body: 'Have you recently received an eviction notice?',
      topic: 'Housing',
      help: 'Your eviction notice',
      resource: 'tenancy and housing',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
    },
    7: {
      body: 'Has your landlord failed to lodge and/or return your bond?',
      topic: 'Housing',
      help: 'That your bond has not been lodged or returned',
      resource: 'bond and tenancy',
      url: 'https://www.tenancy.govt.nz/about-tenancy-services/contact-us/'
    },
    8: {
      body: 'Are there any belongings you have been unable to pick up?',
      topic: 'Housing',
      help: 'Your trouble collecting your belongings',
      resource: 'tenancy and housing',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
    },
    9: {
      body: 'Do you have any unpaid rent?',
      topic: 'Housing',
      help: 'Your unpaid rent',
      resource: 'tenancy and housing',
      url: 'tenancy and housing'
    },
    10: {
      body: 'Do you have any problems with your landlord or flatmates?',
      topic: 'Housing',
      help: 'Your problems with your landlord and/or flatmates',
      resource: 'tenancy and housing',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/what-this-chapter-covers-chapter-15/'
    },
    11: {
      body: 'Do you have any problems with your neighbours?',
      topic: 'Housing',
      help: 'Problems with your neighbours',
      resource: 'neighbours',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-11-neighbourhood-life/what-this-chapter-covers-chapter-11/'
    },
    12: {
      body:
        'Are you having difficulties applying for government or community housing?',
      topic: 'Housing',
      help:
        'Your difficulties with applying for government or community housing',
      resource: 'community and government housing',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-15-tenancy-and-housing/social-housing-tenants-in-state-and-community-housing-chapter-15/'
    },
    13: {
      body: 'Are you scheduled to appear in court for any reason?',
      topic: 'Crime',
      help: 'Your court appearance',
      resource: 'criminal law',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-34-the-criminal-courts/what-this-chapter-covers-chapter-34/'
    },
    14: {
      body:
        'Have you or a family member had contact with the police you would like to discuss?',
      topic: 'Crime',
      help: "Your, or your family member's contact with the police",
      resource: 'criminal law',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-34-the-criminal-courts/what-this-chapter-covers-chapter-34/'
    },
    15: {
      body: 'Are you having problems with Work and Income?',
      topic: 'Work and Income',
      help: 'Your problems with Work and Income',
      resource: 'dealing with Work and Income',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-7-dealing-with-work-and-income/what-this-chapter-covers-chapter-7/'
    },
    16: {
      body:
        'Would you like to change or review any of your Work and Income arrangements?',
      topic: 'Work and Income',
      help: 'Reviewing or changing your Work and Income benefits',
      resource: 'dealing with Work and Income',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-7-dealing-with-work-and-income/what-this-chapter-covers-chapter-7/'
    },
    17: {
      body:
        'Would you like to discuss the safety of yourself or your children?',
      topic: 'Relationships and family',
      help: 'The safety of yourself or your children',
      resource: 'domestic violence',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-29-domestic-violence/what-this-chapter-covers-chapter-29/'
    },
    18: {
      body:
        'Would you like to discuss arrangements, plans or orders about children? (e.g. who the child/ren live with, spend time with, or your involvement in major long-term issues)',
      topic: 'Relationships and family',
      help: 'Arrangements, plans, or orders about your children',
      resource: 'Parents, guardians and caregivers',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-27-parents-guardians-and-caregivers/what-this-chapter-covers-chapter-27/'
    },
    19: {
      body:
        'Do you have any concerns about Child Youth and Family and your whānau?',
      topic: 'Relationships and family',
      help: 'Concerns about Child Youth and Family and your whānau',
      resource: 'Child Youth and Family',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-28-dealing-with-child-youth-and-family/what-this-chapter-covers-chapter-28/'
    },
    20: {
      body:
        'Would you like to discuss your rights in any personal relationship, including divorce or separation?',
      topic: 'Relationships and family',
      help:
        'Your rights in a personal relationship (including divorce and separation)',
      resource: 'personal relationships and the law',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-26-adult-relationships/what-this-chapter-covers-chapter-26/'
    },
    21: {
      body:
        'Concerns about your experiences as a child while you were in the care of adults or institutions?',
      topic: 'Relationships and family',
      help: 'Your experiences as a child',
      resource: '?????',
      url: '?????'
    },
    22: {
      body: 'Are you having any problems at work?',
      topic: 'Employment',
      help: 'Your problems at work',
      resource: 'resolving employment problems',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
    },
    23: {
      body:
        'Are you worried about getting fired, laid off, or having your hours cut?',
      topic: 'Employment',
      help: 'Your concerns about losing your job or having your hours cut',
      resource: 'resolving employment problems',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
    },
    24: {
      body: 'Does your employer owe you money?',
      topic: 'Employment',
      help: 'Your employer owes you money',
      resource: 'resolving employment problems',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
    },
    25: {
      body:
        'Do you feel like you have been treated unfairly due to your gender, ethnicity, religion etc?',
      topic: 'Employment',
      help: 'Discrimination at work',
      resource: 'resolving employment problems',
      url:
        'http://communitylaw.org.nz/community-law-manual/chapter-18-resolving-employment-problems/what-this-chapter-covers-chapter-18/'
    },
    26: {
      body: 'Are you worried about how your child is being treated at school?',
      topic: 'Other',
      help: 'Concerns about how your child is being treated at school',
      resource: 'student rights',
      url: 'http://www.wclc.org.nz/student-rights-service/'
    },
    27: {
      body:
        'Do you have concerns around your immigration status in New Zealand?',
      topic: 'Other',
      help: 'Immigration status',
      resource: '????',
      url: '????'
    },
    28: {
      body: 'Are you having trouble bringing family members to New Zealand?',
      topic: 'Other',
      help: 'Trouble bringing family members to New Zealand',
      resource: '????',
      url: '????'
    }
  },
  responses: {
    /* Example responses: question key (number) is response key
    1: 'Yes',
    2: 'No',
    3: 'Unknown'
  */
  }
}
