export default {
  cmeModulesTotal: 0,
  pageNumber: 1,
  perPage: 25,
  cmeModules: [],
  filters: {
    diseases: [],
    methods: [],
    types: [],
    categories: []
  },
  cmeModule: {},
  timeline: {},
  currentStep: {},
  currentPanel: {},
  filtersValues: {
    diseases: [
      "Airway diseases",
      "Interstitial lung diseases",
      "Paediatric respiratory diseases",
      "Pulmonary vascular diseases",
      "Respiratory critical care",
      "Respiratory infections",
      "Sleep and breathing disorders",
      "Thoracic oncology"
    ],
    methods: [
      "Cell and molecular biology",
      "Endoscopy and interventional pulmonology",
      "Epidemiology",
      "General respiratory patient care",
      "Imaging",
      "Physiology",
      "Public health",
      "Pulmonary function testing",
      "Respiratory intensive care",
      "Surgery",
      "Transplantation"
    ],
    types: ["Case Based", "Topic Based"],
    categories: [
      "COPD",
      "Asthma",
      "Infectious Diseases",
      "Rare/Orphan Disease",
      "Pulmonary Fibrosis",
      "Pleural diseases",
      "Respiratory critical care",
      "PAH",
      "Lung Cancer",
      "Sleep/NIV",
      "Cystic Fibrosis"
    ]
  }
};
