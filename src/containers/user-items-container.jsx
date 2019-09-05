import { compose } from 'redux';

import UserItems from '../components/users-items/user-items.component';
import WithLoading from '../components/with-loading/with-loading.component';
import withEmpty from '../components/with-empty/with-empty.component';

export default compose(
  withEmpty('No users found.'),
  WithLoading
)(UserItems);
