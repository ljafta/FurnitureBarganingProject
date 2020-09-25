import React from 'react';

export interface AppMenuStateType {
  open: boolean;
  // eslint-disable-next-line
  handleAppMenuOpen: (open: boolean) => any;
}

const AppMenuState: AppMenuStateType = {
  open: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleAppMenuOpen: () => {},
};

export const AppMenuContext = React.createContext<AppMenuStateType>({
  open: AppMenuState.open,
  handleAppMenuOpen: AppMenuState.handleAppMenuOpen,
});

interface Props {
  children: React.ReactNode;
}

const AppMenuController = ({children}: Props) => {
  const [open, setOpen] = React.useState(false);

  function handleAppMenuOpen(open: boolean) {
    setOpen(open);
  }

  return (
    <AppMenuContext.Provider value={{open, handleAppMenuOpen}}>
      {children}
    </AppMenuContext.Provider>
  );
};

export default AppMenuController;
