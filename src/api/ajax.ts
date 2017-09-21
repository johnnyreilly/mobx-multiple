import axios, { AxiosRequestConfig } from 'axios';

export function ajax<TData>(config: AxiosRequestConfig) {
    return async () => {
        const result = await axios(config);
        return result.data as TData;
    };
}
