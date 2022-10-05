import { Skill } from "../typings"
import { sanityClient } from "../sanity"
import { groq } from "next-sanity"

export const fetchSkills = async () => {
    const query = groq`
        *[_type == "skill"]
    `
    const result = await sanityClient.fetch(query)

    const skills: Skill[] = result
    
    return skills
}