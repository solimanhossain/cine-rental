export default async function useFetchData(url) {
    const res = await fetch(url);

    if (!res.ok) return new Error("Failed to fetch data");

    return await res.json();
}
