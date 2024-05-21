import { BookmarksResponse } from "@/types"
import axios from "axios"

//const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL
//'http://localhost:8080' 

export async function getAllBookmarks(page: number, query: string): Promise<BookmarksResponse> {
    let API_URL = `/api/bookmarks?page=${page}`
    if(query) {
        API_URL += `&query=${query}`
    }
    console.log(`url = ${API_URL}`)
    
    const res = await axios.get<BookmarksResponse>(`${API_URL}`)

    return res.data
}