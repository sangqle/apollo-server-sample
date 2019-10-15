const {
  UserInputError,
  AuthenticationError,
  ApolloError
} = require("apollo-server");
const resolvers = {
  Query: {
    async me(_, args, ctx, info) {
      throw new Error("user input error");
    }
  },
  Mutation: {
    createUser(_, { userId }, ctx, info) {
      return `Mutation working with userId : ${userId}`;
    },
    login(_, args, ctx, info) {
      // throw new UserInputError("user input error", {
      //   invalidArgs: Object.keys(args)
      // });
      throw new ApolloError("sadfsadfsadfasdf", 324, { sdf: "sdfsdfsdfsdf" });
      return {
        id: "id-user1",
        email: args.input.email,
        password: args.input.password
      };
    }
  },
  Subscription: {
    something_changed: {
      subscribe: (_, args, ctx) => {
        console.log(ctx.connection);
        return ctx.pubsub.asyncIterator("something_changed");
      }
    }
  }
};

module.exports = resolvers;
