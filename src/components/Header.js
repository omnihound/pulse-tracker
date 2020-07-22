import React from "react";
import { Box, Heading, Icon, IconButton } from "@chakra-ui/core";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <Box as="header" bg="grey" height="45px" width="full">
      <Icon name="pulse" color="white" size="1.25em" m="3"></Icon>
      <Heading display="inline" size="sm" color="white" m="1">
        Pulse Tracker
      </Heading>
      <Box float="right">
        <IconButton
          icon="addPlayer"
          isRound="true"
          onClick={() => dispatch({ type: "ADD_PLAYER" })}
        />
        <IconButton
          icon="twenty"
          isRound="true"
          onClick={() => dispatch({ type: "RESET_ALL_PLAYER_LIFE", value: 20 })}
        />
        <IconButton
          icon="forty"
          isRound="true"
          onClick={() => dispatch({ type: "RESET_ALL_PLAYER_LIFE", value: 40 })}
        />
      </Box>
    </Box>
  );
};
