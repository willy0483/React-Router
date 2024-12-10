import React from 'react';
import { ContainerStyle } from './Container.Styled';

export const Container = ({ width, children,height }) => {
    return <ContainerStyle height={height} width={width}>{children}</ContainerStyle>;
};