import styled from "styled-components";

export const Grid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;
  & > li {
    display: block;
  }
  & > li > a {
    display: block;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
