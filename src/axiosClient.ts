import * as Qs from "qs";
import { AxiosInstance } from "axios";

interface IApiConfig {
    basePath?: string;
    authToken: string;
}

class AxiosHttpClient {

    private readonly axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }

    async getAsync<TResponse, TParams = {}>(path: string, params?: TParams): Promise<TResponse> {
        try {
            const response = await this.axios.get<TResponse>(path, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async postAsync<TResponse, TBody = {}, TParams = {}>(path: string, body?: TBody, params?: TParams): Promise<TResponse> {
        try {
            const response = await this.axios.post<TResponse>(path, body, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async putAsync<TResponse, TBody = {}, TParams = {}>(path: string, body?: TBody, params?: TParams): Promise<TResponse> {
        try {
            const response = await this.axios.put<TResponse>(path, body, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async deleteAsync<TResponse, TParams = {}>(path: string, params?: TParams): Promise<TResponse> {
        try {
            const response = await this.axios.delete(path, { params });
            return <TResponse>response.data;
        } catch (error) {
            throw error;
        }
    }

    setConfig(config: IApiConfig): void {
        this.axios.defaults.baseURL = config.basePath || this.axios.defaults.baseURL;
        this.axios.defaults.headers.common["authorization"] = "Bearer " + config.authToken;

        this.axios.defaults.paramsSerializer = (params?: object) => Qs.stringify(params, { allowDots: true, skipNulls: true });
    }
}

export {
    AxiosHttpClient,
};