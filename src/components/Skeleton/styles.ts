import styled from 'styled-components';

interface PropsContainer {
  width: number | string;
  direction: 'column' | 'row';
  align: 'center' | 'left' | 'right';
}

export const Container = styled.div<PropsContainer>`
 width: ${props => props.width};
 display: flex;
 flex-direction: ${props => props.direction};
 align-items: ${props => props.align}
`;