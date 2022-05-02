import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import questionsStyle from "./CustomMUI/questionsStyle";

export default function Questions() {
  const [open, setOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [thirdOpen, setThirdOpen] = React.useState(false);
  const [fourOpen, setfourOpen] = React.useState(false);
  const [fiveOpen, setfiveOpen] = React.useState(false);
  const [sixOpen, setSixOpen] = React.useState(false);
  const [sevenOpen, setSevenOpen] = React.useState(false);

  const { classes } = questionsStyle();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick_Two = () => {
    setSecondOpen(!secondOpen);
  };
  const handleClick_Three = () => {
    setThirdOpen(!thirdOpen);
  };
  const handleClick_Four = () => {
    setfourOpen(!fourOpen);
  };
  const handleClick_Five = () => {
    setfiveOpen(!fiveOpen);
  };
  const handleClick_Six = () => {
    setSixOpen(!sixOpen);
  };
  const handleClick_Seven = () => {
    setSevenOpen(!sevenOpen);
  };

  return (
    <List
      className={classes.list}
      sx={{ width: "100%", maxWidth: 640 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" className={classes.subheader}>
          Vanliga Frågor och Svar
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Hur länge innan föreställningen kan jag avboka min biljett?" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Senast 30 minuter innan förställningen startar går det att avboka biljett. Avbokning sker i kassan på biografen alt via telefon." />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick_Two}>
        <ListItemText primary="När släpps biobiljetter för bokning?" />
        {secondOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={secondOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Onsdag varannan vecka släpps biobiljetter för kommande visningar. " />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick_Three}>
        <ListItemText primary="Kan jag avboka eller boka om mina betalda biljetter?" />
        {thirdOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={thirdOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Det går bra att återlösa / omboka dina biljetter i biografens kassan fram till 15 minuter innan filmstart. Återköp av köpta biljetter medges endast om man kan visa sitt kontokort tillsammans med köpbekräftelse eller kvitto samt giltig legitimation i biljettkassan senast 15 minuter innan föreställningen börjar. Beloppet återförs då på kontokortet."></ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick_Four}>
        <ListItemText primary="Vi önskar ha biokalas hos er, är det möjligt?" />
        {fourOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={fourOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Vi anordnar barnkalas, företagsevanemang och andra event på förfågan. Boka i biljettkassan eller  kontakta oss via telefon för bokning och prisuppgifter. " />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick_Five}>
        <ListItemText primary="Får jag ta med egna snacks på bion?" />
        {fiveOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={fiveOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Ja, som biogäst är det ok att ta med sig egna snacks. För dem som önskar handla på plats har vi ett mindre utbud av snacks till försäljning i biokassan." />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick_Six}>
        <ListItemText primary="Kostar det något att bli medlem hos er?" />
        {sixOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={sixOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Medlemskap hos oss är kostnadsfritt." />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick_Seven}>
        <ListItemText primary="Var kan jag kontakta er om jag har övriga frågor eller synpunkter? " />
        {sevenOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={sevenOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText secondary="Kontakta oss antingen genom att besöka oss på plats, ringa eller maila. Det går även att nå oss via formuläret på 'Lämna feedback'." />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
