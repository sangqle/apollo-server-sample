const resolvers = {
  Query: {
    async me(_, args, ctx, info) {
      console.log(ctx.connection);
      const user = await ctx.prisma.users({}, info)
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
  },
  Subscription: {
    something_changed: {
      subscribe: (_, args, ctx) =>{
        console.log(ctx.connection);
        return ctx.pubsub.asyncIterator('something_changed')
      }
    }
  }
}

module.exports = resolvers
