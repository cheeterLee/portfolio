import { PageInfo } from "../typings"

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLC_BASE_URL}/api/getPageInfo`)

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo

    console.log(pageInfo)
    
    return pageInfo
}