import React from 'react';
import { Heading, Box, Grid } from '@chakra-ui/core';

export const PlayerBox = ({player, ...rest}) => {

  return (
    <Box {...rest} >
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </Grid>
      <Heading textAlign="center">{player.life}</Heading>
      <Heading textAlign="center">{player.name}</Heading>
    </Box>
  );
};