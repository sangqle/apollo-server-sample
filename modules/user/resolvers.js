const resolvers = {
  Query: {
    async me(_, args, ctx, info) {
      const user = await ctx.prisma.users({}, info)
      console.log(user)
      return `It's working`
    }
  },
  Mutation: {
    user(_, { userId }, ctx, info) {
      return `Mutation working with userId : ${userId}`
    },
    login(_, args, ctx, info) {
      return {
        id: 'id-user1',
        email: args.input.email,
        password: args.input.password
      }
    }
  }
}

module.exports = resolvers
