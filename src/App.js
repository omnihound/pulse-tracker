import React from "react";
import { ThemeProvider, theme } from "@chakra-ui/core";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Header } from "./components/Header";
import { PlayersContainer } from "./components/PlayersContainer";
import { players } from "./reducers/players";
import { customIcons } from "./customIcons";

const store = createStore(players);

const updatedTheme = { ...theme, icons: { ...theme.icons, ...customIcons } };

function App() {
  //const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <ThemeProvider theme={updatedTheme}>
        <Header></Header>
        <PlayersContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
