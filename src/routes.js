import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Feed from './pages/Feed';
import New from './pages/New';

const Routes = createAppContainer(
  createSwitchNavigator({
    Feed,
    New
  })
);

export default Routes;