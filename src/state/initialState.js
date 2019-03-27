// Initial state (temporary)
const initialState = {
  checkup: {
    activeQuestionIndex: 0,
    topics: [
      {
        id: '',
        name: '',
        questions: [
          {
            body: '',
            help: '',
            results: '',
            id: '',
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
