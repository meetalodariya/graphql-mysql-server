export default class HttpError extends Error {
  statusCode;
  level;
  constructor(err) {
    super(err);
  }
}
