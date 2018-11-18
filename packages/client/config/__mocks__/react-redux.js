const mockDispatch = jest.fn((action) => action)

module.exports = {
  connect: (mapStateToProps, mapDispatchToProps, mergeProps) => (reactComponent) => ({
    mapStateToProps,
    mapDispatchToProps: (dispatch = mockDispatch, ownProps) => mapDispatchToProps(dispatch, ownProps),
    mergeProps,
    reactComponent,
    mockDispatch
  }),
  Provider: ({ children }) => children
}
