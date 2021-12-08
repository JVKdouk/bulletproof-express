class GeneralError extends Error {
  public message: string;
  public status: number;

  constructor(message = 'Internal Server Error', status = 500) {
    super(message);

    this.message = message;
    this.status = status;
  }
}

export default GeneralError;