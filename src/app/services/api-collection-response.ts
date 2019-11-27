import {IApiCollection} from './api-collection';
import {ApiResponse} from './api-response';

export interface ApiCollectionResponse<T>
  extends ApiResponse<IApiCollection<T>> {
}
