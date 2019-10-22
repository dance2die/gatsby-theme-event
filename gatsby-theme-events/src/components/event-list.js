import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";

const EventList = ({ events }) => (
  <>
    <Styled.h1>Upcoming Events</Styled.h1>
    <Styled.ul>
      {events.map(({ id, slug, name, startDate, location }) => (
        <Styled.li key={id}>
          <Styled.strong>
            <Link to={slug}>{name}</Link>
          </Styled.strong>
          <br />
          {new Date(startDate).toLocaleDateString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}{" "}
          in {location}
        </Styled.li>
      ))}
    </Styled.ul>
  </>
);
export default EventList;
