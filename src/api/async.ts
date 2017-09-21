export interface IAsyncRequest<TResponseData extends {}> {
    isRequesting: boolean;
    error?: any;
    response?: TResponseData;
}
export function empty<TRequest>(): IAsyncRequest<TRequest> {
    return { isRequesting: false };
}

export function isRequesting<TRequest>(): IAsyncRequest<TRequest> {
    return { isRequesting: true };
}

export async function performAsyncRequest<TResponseData>(
    requestAction: () => Promise<TResponseData>
): Promise<IAsyncRequest<TResponseData>> {
    try {
        const response = await requestAction();
        return { isRequesting: false, response };
    } catch (error) {
        return { isRequesting: false, error };
    }
}