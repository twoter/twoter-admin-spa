import { compose } from 'redux';

import UserItems from './user-items.component';
import WithLoading from '../with-loading/with-loading.component';
import withEmpty from '../with-empty/with-empty.component';

export default compose(
  withEmpty('No users found.'),
  WithLoading
)(UserItems);
