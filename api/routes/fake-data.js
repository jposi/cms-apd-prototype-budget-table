module.exports = {
  projects: [{
    id: 'fr-mmis-2017-01',
    name: 'Participant webapp to view spenddown status',
    description: '',
    state: 'Franklin',
    spent: 385235,
    requests: [{
      id: 'FR-MMIS-2017-01-R01',
      submitted: '2017-06-09',
      approved: '2017-06-14',
      dollars: {
        added: 827000,
        subtracted: 0
      }
    }, {
      id: 'FR-MMIS-2017-01-R02',
      submitted: '2017-06-28',
      approved: '2017-07-03',
      dollars: {
        added: 342000,
        subtracted: 13900
      }
    }]
  }, {
    id: 'FR-MMIS-2017-02',
    name: 'Provider claims reporting functionality',
    description: '',
    state: 'Franklin',
    spent: 0,
    requests: [{
      id: 'FR-MMIS-2017-02-R01',
      submitted: '2017-02-03',
      approved: '2017-02-11',
      dollars: {
        added: 3523567,
        subtracted: 0
      }
    }, {
      id: 'FR-MMIS-2017-02-R02',
      submitted: '2017-07-14',
      dollars: {
        added: 735733,
        subtracted: 0
      }
    }]
  }],
  requests: [{
    id: 'FR-MMIS-2017-01-R01',
    name: 'State of Franklin, MMIS, FFY 2017 #1',
    state: 'Franklin',
    submitters: [{
      name: 'Alexis Nikephoros',
      email: 'alexis@medicaid.franklin.us',
      phone: '555-123-4567'
    }, {
      name: 'Jordan Yafe',
      email: 'jordan@medicaid.franklin.us',
      phone: '555-123-4567'
    }],
    prose: {
      executiveSummary: 'Franklin Agency for Persons with Disabilities (APD) and the Agency for Health Care Administration (AHCA) will implement a Client Data Management System (CDMS) to replace the existing legacy system. This system will interface with the Franklin Medicaid Management Information System (FMMIS) through the recipient, provider, prior authorization and claims processes.',
      statementOfOutcomes: 'The new system will collect, process, and store client and provider information in a consistent, accurate and efficient manner. It will also support electronic visit verification, which will ensure services are delivered as agreed upon and help us monitor client progress and provider performance. The system will also integrate with FMMIS for all waiver services, including electronic claims submission and tracking.',
      proposedBudget: 'We propose to spend some money',
      papdSummary: 'In summary, our PAPD existed and now we have this',
      personnel: 'We\'re going to hire people!',
      acquisitionsPlan: 'We\'re going to buy stuff!',
      costAllocationEstimate: 'We estimate that costs will be allocated',
      costBenefitAnalysis: 'Our analysis reveals that the costs have benefits',
      proposedActivity: 'We propose having activities',
      continuityOfOperations: 'We plan to keep doing stuff',
      otherAssurances: 'We assure you that we like cookies'
    },
    outcomes: [{
      priority: 1,
      outcome: 'Higher client and provider satisfaction',
      example: 'Better customer service leads to increased participation in services',
      measures: 'Client participation in services\nProvider enrollment and retention'
    }, {
      priority: 1,
      outcome: 'Improved fiscal sustainability',
      example: 'Better services tracking increases public/private partnerships',
      measures: 'Improved cost avoidance\nProportional investment in services'
    }, {
      priority: 1,
      outcome: 'Fraud and abuse prevention',
      example: 'Electronic visit verification prevents misuse of services',
      measures: 'Increased fraud detection\nLong-term drop in fraud and abuse'
    }, {
      priority: 1,
      outcome: 'Better data and analytics',
      example: 'Modern data systems support fast, accurate federal reporting',
      measures: 'Improved performance on federal reporting metrics'
    }],
    costs: [
      {
        category: 'Project initiation',
        type: 'ddi',
        ffp: 0.9,
        years: [{
          ffy: 2015,
          total: 260000
        }]
      }, {
        category: 'Project manager',
        type: 'ddi',
        ffp: 0.9,
        years: [{
          ffy: 2015,
          total: 238000
        }, {
          ffy: 2016,
          total: 329000
        }]
      }
    ],
    mdbt: {
      development: {
        internal: 0,
        external: 0
      },
      operations: {
        internal: 0,
        external: 0
      },
      other: {
        internal: 0,
        external: 0,
        interagency: 0
      }
    }
  }]
};
