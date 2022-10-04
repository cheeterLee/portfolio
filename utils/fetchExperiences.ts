import { Experience } from "../typings"

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLC_BASE_URL}/api/getExperience`)

    const data = await res.json()
    const experiences: Experience[] = data.experiences

    console.log(experiences)
    
    return experiences
}