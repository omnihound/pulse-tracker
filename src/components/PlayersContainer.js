import React from "react";
import { Grid, Box } from "@chakra-ui/core";
import { PlayerBox } from "./PlayerBox";
import { useSelector } from "react-redux";
import useWindowSize from "../hooks/useWindowSize";

export const PlayersContainer = () => {
  const players = useSelector((state) =>
    Object.keys(state).map((key) => state[key])
  );
  const windowSize = useWindowSize();

  return (
    <Box>
      <Grid
        templateColumns={`repeat(${Math.ceil(players.length / 2)}, 1fr)`}
        gap={6}
      >
        {players.slice(0, Math.ceil(players.length / 2)).map((player) => (
          <PlayerBox
            key={player.name}
            id={player.id}
            player={player}
            w="100%"
            h={`${(windowSize.height - 50) / 2}px`}
          />
        ))}
      </Grid>
      <Grid
        templateColumns={`repeat(${Math.floor(players.length / 2)}, 1fr)`}
        gap={6}
      >
        {players.slice(Math.ceil(players.length / 2)).map((player) => (
          <PlayerBox
            key={player.name}
            id={player.id}
            player={player}
            w="100%"
            h={`${(windowSize.height - 50) / 2}px`}
          />
        ))}
      </Grid>
    </Box>
  );
};
