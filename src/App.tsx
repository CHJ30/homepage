import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import {
  styleReset,
  List,
  ListItem,
  Divider,
  AppBar,
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableDataCell,
  Avatar,
  Tooltip,
} from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";
import avatar from "./assets/images/avatar.jpeg";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { Window, WindowHeader, Button, Toolbar, WindowContent } from "react95";
import { MainWindow, MainTable } from "./style";
const GlobalStyles = createGlobalStyle`
  ${styleReset}
  html {
    background: #367e7f;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppBar>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Button
                onClick={() => setOpen(!open)}
                active={open}
                style={{ fontWeight: "bold" }}
              >
                Start
              </Button>
              {open && (
                <List
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "100%",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <ListItem disabled>It's end</ListItem>

                  <Divider />
                  <ListItem
                    onClick={() => {
                      window.open(
                        "https://btfy.eu.org/?q=5oCO5LmI5Y+Y5oiQ5pyJ6ZKx5Lq6",
                        "_blank",
                        "noopener=yes,noreferrer=yes"
                      );
                    }}
                  >
                    The way to the rich
                  </ListItem>
                </List>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <MainWindow>
          <Window className="window">
            <WindowHeader className="window-header">
              <span>Hello World</span>
            </WindowHeader>
            <Toolbar>
              <Button
                variant="menu"
                size="sm"
                onClick={() => {
                  window.open(
                    "https://github.com/CHJ30",
                    "_blank",
                    "noopener=yes,noreferrer=yes"
                  );
                }}
              >
                GitHub
              </Button>
              <Button
                variant="menu"
                size="sm"
                onClick={() => {
                  window.open(
                    "https://twitter.com/CHJ30",
                    "_blank",
                    "noopener=yes,noreferrer=yes"
                  );
                }}
              >
                Twitter
              </Button>
              <Button
                variant="menu"
                size="sm"
                onClick={() => {
                  window.open(
                    "https://weibo.com/u/6682132870",
                    "_blank",
                    "noopener=yes,noreferrer=yes"
                  );
                }}
              >
                Weibo
              </Button>
              <Button
                variant="menu"
                size="sm"
                onClick={() => {
                  window.open(
                    "https://blog.csdn.net/qq_37963955?type=blog",
                    "_blank",
                    "noopener=yes,noreferrer=yes"
                  );
                }}
              >
                Blog
              </Button>
              <Tooltip text="18350825549" enterDelay={100} leaveDelay={500}>
                <Button variant="menu" size="sm">
                  weChat
                </Button>
              </Tooltip>
              <Tooltip text="it‍'s secret" enterDelay={100} leaveDelay={500}>
                <Button variant="menu" size="sm">
                  telegram
                </Button>
              </Tooltip>
            </Toolbar>
            <WindowContent>
              <Avatar size={50} src={avatar} />
              <p>My name is CHJ</p>
              <p>
                I am a frontend software developer currently based in HangZhou,
                China.
              </p>
              <p>
                Undisciplined ,be addicted to the game,noob of Front End
                Engineer
              </p>
              <p>And try to study hard</p>
            </WindowContent>
          </Window>
        </MainWindow>
        <MainTable>
          <Window style={{ width: 320 }}>
            <WindowHeader>Tools I use</WindowHeader>
            <WindowContent>
              <Table>
                <TableHead>
                  <TableRow head>
                    <TableHeadCell>Type</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Level</TableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableDataCell style={{ textAlign: "center" }}>
                      FE
                    </TableDataCell>
                    <TableDataCell>React</TableDataCell>
                    <TableDataCell>warrior</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: "center" }}>
                      FE
                    </TableDataCell>
                    <TableDataCell>Vue</TableDataCell>
                    <TableDataCell>warrior</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: "center" }}>
                      FE
                    </TableDataCell>
                    <TableDataCell>typeScript</TableDataCell>
                    <TableDataCell>warrior</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: "center" }}>
                      FE
                    </TableDataCell>
                    <TableDataCell>webpack</TableDataCell>
                    <TableDataCell>knight</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: "center" }}>
                      FS
                    </TableDataCell>
                    <TableDataCell>Nest</TableDataCell>
                    <TableDataCell>knight</TableDataCell>
                  </TableRow>
                </TableBody>
              </Table>
            </WindowContent>
          </Window>
        </MainTable>
      </ThemeProvider>
    </>
  );
}

export default App;
