const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Query{
    me: User
}
type Book {
    _id: ID
    authors: String
    description: String
    title: String
    image: String
    Link: String
    
}
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]

}

type Query {
    books: [Book]
    users: [User]
}
type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;