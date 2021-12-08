import GeneralError from './GeneralError';

class AdminError extends GeneralError {
  constructor() {
    super('Not an admin', 403);

    this.status = 403;
    this.message = 'Not an admin';
  }
}

export default AdminError;