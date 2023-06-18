import styled from "@emotion/styled";

export const ItemList = styled.li`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin-bottom: 2px;
`;

export const Contact = styled.span`
  font-weight: 500;
`;

export const ContactBox = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: 5px;
  padding: 5px 5px;
  border: 1px solid rgba(172, 183, 192, 0.3);
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12),
    0px 4px 4px rgba(172, 183, 192, 0.06), 1px 4px 6px rgba(172, 183, 192, 0.16);
  border-radius: 20px;
`;

export const Button = styled.button`
  border: 1px solid rgba(172, 183, 192, 0.3);
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12),
    0px 4px 4px rgba(172, 183, 192, 0.06), 1px 4px 6px rgba(172, 183, 192, 0.16);
  border-radius: 20px;
  color: #ff0000;
`;
