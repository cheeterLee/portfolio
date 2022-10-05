import { Project } from "../typings"
import { sanityClient } from "../sanity"
import { groq } from "next-sanity"

export const fetchProjects = async () => {
    const query = groq`
        *[_type == "project"] {
            ...,
            technologies[]->
        }
    `
    const result = await sanityClient.fetch(query)

    const projects: Project[] = result
    
    return projects
}