
export default function errorResponse(status: number, message: string) {
    return {
        status,
        message,
        payload : {},
        error: true
    };
}