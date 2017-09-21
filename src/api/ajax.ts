import axios, { AxiosRequestConfig } from 'axios';

export function ajax<TData>(config: AxiosRequestConfig) {
    return async () => {
        const result = await axios({ ...config, headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:8080'} });
        return result.data as TData;
    };
}
