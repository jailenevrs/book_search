import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
        token
        user{
           _id
           username 
        }
    }
}`;





export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!){
    addUser(username: $username, email: $email, password: $password){
        token
      user {
        _id
        username
    }
}
}
`;

export const SAVE_BOOK = gql`
mutation saveBook($bookData: String!){
    saveBook(bookData: $bookData){
        _id
        username
        email
        savedBooks{
            bookId
            authors
            description
            image
            title
            link
        }
    }
}
`;

export const REMOVE_BOOK = gql`

mutation removeBook ($bookId: ID!){
    removeBook(bookId: $bookId){
        _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        title
        link
    }
}
}
`;