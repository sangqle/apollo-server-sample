const resolvers = {
  Query: {
    post(_, args, ctx, info) {
      return `It's working`
    }
  },
  Mutation: {
    post(_, args, ctx, info) {
      return 'Mutation working'
    }
  }
}

module.exports = resolvers
