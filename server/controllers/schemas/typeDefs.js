const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID
    authors: String
    description:String
    
}
type User {
    _id: ID
    username: String
    password: String

}

type Query {
    book: [book]
    user: [user]
}
;

module.exports = typeDefs;