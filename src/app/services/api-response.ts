import {ApiResponseHeader} from './api-response-header';

export interface ApiResponse<T> {
  header: ApiResponseHeader;
  data: T;
}
