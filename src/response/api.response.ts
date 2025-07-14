
export default function apiResponse(status: number, message: string, data: {} | []) {
    return {
        status,
        message,
        payload: data || {},
        error: false
    };
}
