import { PageInfo } from "../typings"
import { sanityClient } from "../sanity"
import { groq } from "next-sanity"

export const fetchPageInfo = async () => {
    const query = groq`
        *[_type == "pageInfo"][0]
    `

    const result = await sanityClient.fetch(query)

    const pageInfo: PageInfo = result

    return pageInfo
}