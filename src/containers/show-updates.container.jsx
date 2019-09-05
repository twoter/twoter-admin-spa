import { compose } from 'redux';

import WithLoading from '../components/with-loading/with-loading.component';
import withEmpty from '../components/with-empty/with-empty.component';
import ShowUpdates from '../components/show-updates/show-updates.component';

export default compose(
  withEmpty('No updates found.'),
  WithLoading
)(ShowUpdates);
