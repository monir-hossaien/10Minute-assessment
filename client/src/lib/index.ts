import axios from "axios";


export async function getCourse(slug : string) {
    const url = "https://api.10minuteschool.com/discovery-service/api/v1/products"

    const response = await axios.get(`${url}/${slug}`, {
        headers: {'X-TENMS-SOURCE-PLATFORM': 'web'}
    })
    return response?.data?.data
}