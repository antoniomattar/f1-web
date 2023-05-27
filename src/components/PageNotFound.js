import { Text } from "@chakra-ui/react";
import React from "react";

export default function PageNotFound() {
  return (
    <React.Fragment>
      <Text fontSize="50px" color="black" margin="50">
        404 Page Not Found,
        <br />
        You are lost in the woods. This page does not exist.
        <br />
        Please go back to the home page. Thank you!
      </Text>
    </React.Fragment>
  );
}
