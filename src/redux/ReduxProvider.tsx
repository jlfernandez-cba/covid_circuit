import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

type Props = { children: ReactElement };

export const ReduxProvider = ({ children }: Props): ReactElement => {
  return <Provider store={store}>{children}</Provider>;
};
