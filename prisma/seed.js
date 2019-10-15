const { prisma } = require("../prisma/generated/prisma-client");

(async function(_, args, ctx, info) {
  const user = await prisma.createUser(
    {
      handle: "test handle"
    },
    `{id}`
  );
})();
