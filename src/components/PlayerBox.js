import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";
import {
  Heading,
  Box,
  Flex,
  Grid,
  IconButton,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import axios from "axios";

export const PlayerBox = ({ player, id, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [rotateAngle, setRotateAngle] = useState(0);

  const loadOptions = (inputValue) => {
    const request = axios.get(
      `https://api.scryfall.com/cards/search?q=${inputValue}+type%3Alegendary`
    );

    if (request) {
      return request.then((response) => {
        const options = response.data.data.map((datum) => {
          return { value: datum, label: datum.name };
        });

        return options;
      });
    }
  };

  const dispatch = useDispatch();

  const otherPlayers = useSelector((state) =>
    Object.keys(state)
      .map((key) => state[key])
      .filter((_player) => _player.name !== player.name)
  );

  const updateRotateAngle = () => {
    switch (rotateAngle) {
      case 0:
        setRotateAngle(180);
        return;
      case 180:
        setRotateAngle(0);
        return;
      default:
        return;
    }
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    return inputValue;
  };

  return (
    <Box {...rest} transform={`rotate(${rotateAngle}deg)`}>
      <Grid templateColumns="repeat(3, 1fr)">
        <Box w="100%" fontSize="0.75em" textAlign="center">
          <Button
            onClick={() =>
              dispatch({
                type: "SET_PLAYER_LIFE",
                id: player.id,
                name: player.name,
                value: -1,
              })
            }
            rounded="2em"
            height="1.5em"
            paddingRight="0.15rem"
            paddingLeft="0.15rem"
            marginTop="1.5rem"
            minWidth="2rem"
          >
            -1
          </Button>
        </Box>
        <Box w="100%">
          <Heading textAlign="center" size="1.6rem">
            {player.life}
          </Heading>
        </Box>
        <Box w="100%" fontSize="0.75em" textAlign="center">
          <Button
            onClick={() =>
              dispatch({
                type: "SET_PLAYER_LIFE",
                id: player.id,
                name: player.name,
                value: 1,
              })
            }
            rounded="2em"
            height="1.5em"
            paddingRight="0.15rem"
            paddingLeft="0.15rem"
            marginTop="1.5rem"
            minWidth="2rem"
          >
            +1
          </Button>
        </Box>
      </Grid>
      {
        <Box textAlign="center">
          <Image
            rounded="full"
            size={["2.5rem","10rem"]}
            src={
              player.commander
                ? player.commander.image_uris.art_crop
                : `https://api.adorable.io/avatars/285/${player.name}.png`
            }
            alt={player.commander ? player.commander.name : player.name}
          />
        </Box>
      }

      <Heading size="md" textAlign="center">
        {player.name}
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" marginTop="1rem">
        <Box w="100%" textAlign="center">
          <IconButton
            icon="rotate"
            size="sm"
            isRound="true"
            onClick={() => updateRotateAngle()}
          ></IconButton>
          <IconButton
            icon="edit"
            size="sm"
            isRound="true"
            onClick={onOpen}
          ></IconButton>
        </Box>
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit: {player.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AsyncSelect
              cacheOptions
              loadOptions={loadOptions}
              onInputChange={handleInputChange}
              onChange={(value) =>
                dispatch({
                  type: "SET_PLAYER_COMMANDER",
                  payload: value.value,
                  id: player.id,
                })
              }
            />
            <Text>Commander Damage</Text>
            {otherPlayers.map((_player, index) => (
              <Flex key={`${player.name}-${index}-${_player.name}`}>
                <Text mt={"1.5em"} mr={"1.5em"}>
                  {_player.name}
                </Text>
                <Text mt={"1.5em"} mr={"1.5em"}>
                  {(player.commanderDamage &&
                    player.commanderDamage[_player.id]) ||
                    0}
                </Text>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "SET_COMMANDER_DAMAGE",
                      id: player.id,
                      commanderId: _player.id,
                      name: player.name,
                      value: -1,
                    });
                  }}
                  rounded="2em"
                  height="1.5em"
                  paddingRight="0.15rem"
                  paddingLeft="0.15rem"
                  marginTop="1.5rem"
                  minWidth="2rem"
                >
                  -1
                </Button>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "SET_COMMANDER_DAMAGE",
                      id: player.id,
                      commanderId: _player.id,
                      name: player.name,
                      value: 1,
                    });
                  }}
                  rounded="2em"
                  height="1.5em"
                  paddingRight="0.15rem"
                  paddingLeft="0.15rem"
                  marginTop="1.5rem"
                  minWidth="2rem"
                >
                  +1
                </Button>
              </Flex>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
