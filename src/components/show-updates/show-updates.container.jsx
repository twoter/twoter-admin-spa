import { compose } from 'redux';

import WithLoading from '../with-loading/with-loading.component';
import withEmpty from '../with-empty/with-empty.component';
import ShowUpdates from './show-updates.component';

export default compose(
  withEmpty('No updates found.'),
  WithLoading
)(ShowUpdates);
