import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_IMAGE = gql`
  mutation addImage($userId: ID!, $image: String!) {
    addImage(userId: $userId, image: $image) {
      _id
      name
      images
    }
  }
`;

export const REMOVE_IMAGE = gql`
  mutation removeImage($image: String!) {
    removeImage(image: $image) {
      _id
      name
      images
    }
  }
`;