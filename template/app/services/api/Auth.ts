import Api from './Api';
import { AxiosPromise } from 'axios';

export class Auth {
  static sendLoginReq = (): AxiosPromise => Api.get('');
}
