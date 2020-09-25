import React from 'react';

export interface ChangeheadernameType {
  hearder: string;
  // eslint-disable-next-line
  ChangeheaderName: (hearder: string) => any;
}

const ChangeheadernameState: ChangeheadernameType = {
  hearder: 'home',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ChangeheaderName: () => {},
};

export const HeaderNameContext = React.createContext<ChangeheadernameType>({
  hearder: ChangeheadernameState.hearder,
  ChangeheaderName: ChangeheadernameState.ChangeheaderName,
});

interface Props {
  children: React.ReactNode;
}

const HeaderController = ({children}: Props) => {
  const [hearder, setHeader] = React.useState('home');

  function ChangeheaderName(hearder: string) {
    setHeader(hearder);
  }

  return (
    <HeaderNameContext.Provider value={{hearder, ChangeheaderName}}>
      {children}
    </HeaderNameContext.Provider>
  );
};

export default HeaderController;
