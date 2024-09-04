import React from 'react';

const Accordian = (props) => {
    const [open, setOpen] = React.useState(props.count === 1 ? props.count : 0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="accordion">
            <div 
                className="accordion-header" 
                onClick={() => handleOpen(props.count)}
            >
                {props.title}
                <Icon id={props.count} open={open} />
            </div>
            <div className={`accordion-body ${open === props.count ? 'open' : ''}`}>
                {props.desc}
            </div>
            <style>
              {`
              .accordion {
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden; /* Ensures smooth transition by hiding overflow */
}

.accordion-header {
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.accordion-body {
  padding: 0 20px; /* No top/bottom padding to smooth height transition */
  max-height: 0;
  opacity: 0;
  overflow: hidden; /* Hide content when not visible */
  transition: all ease 0.5s, opacity 0.3s ease-out;
}

.accordion-body.open {
  max-height: 500px; /* Or a value that fits your content */
  opacity: 1;
}

.icon {
  font-family: 'Font Awesome 5 Free'; /* Ensure you have Font Awesome included */
  font-weight: 900;
  font-size: 20px;
  transition: transform 0.3s ease-out;
}

.icon.rotate {
  transform: rotate(90deg);
}
              `}

            </style>
        </div>
    );
}

export default Accordian;

function Icon({ id, open }) {
  return (
    <i className={`icon fa fa-arrow-right ${id === open ? "rotate" : ""}`}></i>
  );
}
