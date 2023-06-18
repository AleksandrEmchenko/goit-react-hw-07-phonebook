import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 232px;
`;

export const ContactFild = styled.input`
  padding: 5px;
  width: 232px;
  border: 1px solid rgba(172, 183, 192, 0.3);
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12),
    0px 4px 4px rgba(172, 183, 192, 0.06), 1px 4px 6px rgba(172, 183, 192, 0.16);
  border-radius: 20px;
  color: grey;
`;

export const ContactLabel = styled.label`
  font-weight: 500;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const ButtonSub = styled.button`
  margin-top: 5px;
  width: 242px;
  border: 1px solid rgba(172, 183, 192, 0.3);
  box-shadow: 0px 1px 1px rgba(172, 183, 192, 0.12),
    0px 4px 4px rgba(172, 183, 192, 0.06), 1px 4px 6px rgba(172, 183, 192, 0.16);
  border-radius: 20px;
  font-weight: 500;
  padding: 5px;
`;
