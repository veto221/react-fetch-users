export async function getFromUrl<T>(path: string): Promise<T> {
    const request = new Request(path, {method: 'GET'})
    const response = await fetch(request)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    // may error if there is no body, return empty array
    return response.json().catch(() => ({}))
}