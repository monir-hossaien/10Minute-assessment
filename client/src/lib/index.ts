

export async function getCourse(slug: string, lang: string) {
    const url = "https://api.10minuteschool.com/discovery-service/api/v1/products";

    const res = await fetch(
        `${url}/${slug}?lang=${lang}`,
        {
            headers: {
                "X-TENMS-SOURCE-PLATFORM": "web",
                "Accept": "application/json"
            },
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch course: ${res.status}`);
    }
    const data = await res.json();
    return data.data;
}
