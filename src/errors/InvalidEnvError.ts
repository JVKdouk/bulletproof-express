import GeneralError from './GeneralError';

class InvalidEnvError extends GeneralError {
  constructor() {
    super('Server Exception', 500);

    this.status = 500;
    this.message = 'Server Exception';
  }
}

export default InvalidEnvError;