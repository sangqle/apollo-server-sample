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

below can import data
```graphql
type User {
  id: ID! @id
  createdAt: DateTime! @createdAt
  updatedAt: DateTime! @updatedAt
  handle: String! @unique
  name: String
  tweets: [Tweet!]!
}

type Tweet {
  id: ID! @id
  createdAt: DateTime! @createdAt
  text: String!
  owner: User!
  location: Location! @relation(name: "TweetHasLocatio", link: TABLE)
}

type Location {
  id: ID! @id
  latitude: Float!
  longitude: Float!
}
```
