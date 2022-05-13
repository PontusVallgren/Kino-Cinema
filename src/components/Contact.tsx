import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import { Box } from "@mui/system";
import Questions from "./Questions";
import FeedBackForm from "./FeedBackForm";
import contactStyle from "./CustomMUI/contactStyle";
import Image from "next/Image";
import risback from "./Img/risback.png";

export default function Contact() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const { classes } = contactStyle();
  return (
    <Box className={classes.wrapper}>
      <Box
        className={classes.bigBox}
        sx={{ width: "100%", typography: "body1" }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="tabs">
              <Tab label="Kontakta oss" value="1" />
              <Tab label="Frågor och Svar" value="2" />
              <Tab label="Åldersgränser" value="3" />
              <Tab label="Lämna Feedback" value="4" />
            </TabList>
          </Box>
          <TabPanel className={classes.smallBox} value="1">
            <h3 className={classes.title}>Risbäck Cinema</h3>
            <p>Tel: 0121- 123 45 678</p>
            <p>Adress: Risbäcksgatan 1337</p>
            <p> 917 03 Risbäck</p>
            <h4 className={classes.rightField}>
              Vid bokning av rullstol eller större sällskap, fler än 8 personer:
              Kontakta oss gärna dagen innan planerat besök. Bokning sker på
              tel: 0121- 123 45 678. Telefontider är samma som våra öppettider.
            </h4>
            <h4 className={classes.title2}>Öppettider:</h4>
            <p>Måndag - Fredag 10.00 -21.00</p>
            <p>Lördag 10.00-22.00</p>
            <p>Söndag 12.00-22.00</p>
            <p className={classes.rightField}>
              <a
                className={classes.maplink}
                href="https://goo.gl/maps/Wi72QAZAp6iRqcED6"
              >
                Klicka här för karta på Google Maps.
              </a>
              <Image
                src={risback}
                id="risback"
                alt="map of Risback"
                width="150px"
                height="100px"
                layout="responsive"
              />
            </p>
          </TabPanel>
          <TabPanel className={classes.smallBox} value="2">
            <Questions></Questions>
          </TabPanel>
          <TabPanel className={classes.smallBox} value="3">
            <h3 className={classes.title}>Åldersgränser på bio:</h3>
            <p>
              En film som ska visas på bio i Sverige granskas av
              <a
                className={classes.statensmedie}
                href="https://www.statensmedierad.se/aldersgranser-for-film"
              >
                : Statens Medieråd ,
              </a>
              som ger filmen en åldersgräns enligt gällande regler och
              riktlinjer för åldergräns på film. Vårt uppdrag är att säkerställa
              att dessa följs på biografen
              <a
                className={classes.statensmedie}
                href="https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20101882-om-aldersgranser-for-film-som-ska_sfs-2010-1882"
              >
                . Här
              </a>
              , kan du läsa mer information åldersgränser på bio.
            </p>

            <h4 className={classes.title}>
              Är åldergräns på film en rekommendation?
            </h4>
            <p className={classes.title}>
              Filmens åldergräns betyder att den uppfyller de kriterier för att
              visas för de som uppfyller åldergränsen. Men det är{" "}
              <em>alltid den vuxne som tar ansvar</em> för det filminnehåll som
              barnet tar del utav.
            </p>
            <p className={classes.ages}>
              <strong>18-årsgräns / Vuxen: </strong>
              Personen har fyllt 18 år och är myndig. Man behöver vara beredd
              att kunna styrka sin ålder med en ID-handling, till exempel giltig
              legitimation, körkort eller pass.
            </p>
            <p className={classes.ages}>
              <strong>15-årsgräns: </strong> Personen har fyllt 15 år.
              15-årsgränsen betyder att en film har bedömts kunna vara till
              skada för välbefinnandet för barn under 15 år.
            </p>
            <p className={classes.ages}>
              <strong>11-årsgräns:</strong> Personen har fyllt 11 år. I vuxet
              sällskap får man se filmer med 15-årsgräns.
            </p>
            <p className={classes.ages}>
              <strong>7-årsgräns:</strong> Personen har fyllt 7 år för att få se
              på filmen utan vuxet sällskap. I vuxet sällskap är filmen
              barntillåten.
            </p>
            <p className={classes.ages}>
              <strong>Barntillåten:</strong> Tillåten för alla åldrar.
            </p>
          </TabPanel>
          <TabPanel className={classes.smallBox} value="4">
            <FeedBackForm></FeedBackForm>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export { Contact };
