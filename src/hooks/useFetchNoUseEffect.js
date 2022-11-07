import { useState, useEffect } from "react"

export async function useFetch(url) {
    const res = await fetch(url)
    const json = res.json()

    return { json } 
}