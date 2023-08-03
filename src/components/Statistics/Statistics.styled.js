import styled from 'styled-components';

export const StatisticsSection = styled.section `
  width: 500px;
  /* height: 500px; */
  background-color: white;
  margin: 0 auto 200px auto;
  padding-top: 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.71);
  overflow: hidden;
`;

export const StatisticsTitle = styled.h2 `
  color: gray;
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul `
  display: flex;
  justify-content: center;
  /* border-radius: 0 0 10px 10px; */
`;

export const StatisticsItem = styled.li `
  padding: 20px;
  background-color: ${props => props.color};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StatisticsLabel = styled.span `
  color: white;
  font-weight: 500;
  font-size: 17px;
`;

export const StatisticsPercentage = styled.span `
  color: white;
  font-size: xx-large;
`;