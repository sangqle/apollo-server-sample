```graphql
type User {
  id: ID! @id
  profile: Profile! @relation(link: INLINE, onDelete: CASCADE)
  posts: [Post!]! @relation(link: TABLE)
}

type Profile {
  id: ID! @id
  user: User!
}

type Post {
  id: ID! @id
  author: User!
}
```
In this example above many user can connect with a
