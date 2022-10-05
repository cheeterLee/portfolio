import { Experience } from "../typings"
import { sanityClient } from "../sanity"
import { groq } from "next-sanity"

export const fetchExperiences = async () => {
    const query = groq`
        *[_type == "experience"] {
            ...,
            technologies[]->
        }
    `;

    const result = await sanityClient.fetch(query)

    const experiences: Experience[] = result
    
    return experiences
}