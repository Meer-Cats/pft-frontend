import {IApiCollection} from './api-collection';
import { ApiResponse } from './api-response';
import * as Lodash from 'lodash';

export interface ApiCollectionResponse<T>
  extends ApiResponse<IApiCollection<T>> {
}
