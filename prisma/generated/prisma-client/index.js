"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Tweet",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
<<<<<<< HEAD
  },
  {
    name: "Comment",
    embedded: false
=======
>>>>>>> bcd32d4da86b9dbb14ab460c4d35b9a417fb4c11
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/test1/dev`
});
exports.prisma = new exports.Prisma();
