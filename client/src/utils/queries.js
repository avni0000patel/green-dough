import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profiles {
        _id
        image
      }
    }
  }
`;

export const QUERY_PROFILES = gql`
  query getProfiles {
    profiles {
      _id
      image
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query getSingleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      image
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      profiles {
        _id
        image
      }
    }
  }
`;
