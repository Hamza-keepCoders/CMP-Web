import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Accordian = (props) => {
    // Initialize the state to open the first accordion item by default
    const [open, setOpen] = React.useState(props.count === 1 ? props.count : 0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Accordion open={open === props.count} icon={<Icon id={props.count} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(props.count)}>{props.title}</AccordionHeader>
            <AccordionBody>
                {props.desc}
            </AccordionBody>
        </Accordion>
    );
}

export default Accordian;

function Icon({ id, open }) {
  return (
    <i className={`fa fa-arrow-right ${id === open ? "rotate-90" : ""} h-5 w-5 transition-transform`}></i>
  );
}
