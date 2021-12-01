import { gql } from "@apollo/client";

export const POST_CONTACT_MESSAGE = gql`
  mutation MyMutation(
    $email: String
    $message: String
    $name: String
    $title: String
  ) {
    insert_contact(
      objects: {
        contact_title: $title
        contact_email: $email
        contact_message: $message
        contact_name: $name
      }
    ) {
      affected_rows
    }
  }
`;
