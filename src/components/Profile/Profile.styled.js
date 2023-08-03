import styled from 'styled-components';

export const ProfileContainer = styled.div `
  width: 400px;
  height: 500px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.71);
`;

export const ProfileImg = styled.img `
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 40px auto;
`;

export const ProfileName = styled.p `
  color: black;
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 15px;
`;

export const ProfileTag = styled.p `
  color: grey;
  margin-bottom: 15px;
  font-size: 17px;
`;

export const ProfileLocation = styled.p `
  color: gray;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 99px;
`;

export const ProfileList = styled.ul `
  background-color: Lavender;
  height: 100px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProfileItem = styled.li `
  display: flex;
  flex-direction: column;
`;

export const ProfileItemText = styled.span `
  color: gray;
  font-weight: 400;
`;

export const ProfileItemStats = styled.span `
  color: black;
  font-weight: 700;
  font-size: 18px;
`;