import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => <span>{children}</span>;

export default Title;
