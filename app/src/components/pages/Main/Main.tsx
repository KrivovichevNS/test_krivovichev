import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Main = (): JSX.Element => {
  const context = useContext(AppContext);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            История запросов
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {context.reqData.length !== 0
              ? context.reqData.map((el) => (
                  <li key={el.id}>
                    {el.url}, {el.time}
                  </li>
                ))
              : "Запросов нет"}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Main;
