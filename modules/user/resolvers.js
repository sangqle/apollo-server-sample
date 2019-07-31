const resolvers = {
  Query: {
    me(_, args, ctx, info) {
      return `It's working`
    }
  }
}

module.exports = resolvers
