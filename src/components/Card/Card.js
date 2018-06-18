import styled from "styled-components";
import as from "../../enhancers/as";
import Base from "../Base";

const Card = styled(Base)`
  display: inline-block;
  box-shadow: rgba(51, 51, 51, 0.1) 0px 1px 6px,
    rgba(51, 51, 51, 0.15) 0px 1px 4px;
  padding: 0.5em 1em;
  float: left;
`;

export default as("div")(Card);
