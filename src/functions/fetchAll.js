import {useEffect, useState} from 'react'
import axios from 'axios'

export default function FetchAll(skip) {

    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios({
            method:'GET',
            url: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',
            params: {$top: 30, $skip: skip, $format: 'JSON'}
        }).then(res => {
            setData(prevState => {
                return [...prevState, ...res.data]
        })
            setHasMore(res.data.length > 0)
            setLoading(false)
        })
    },[skip])

    return {data, hasMore, loading}
}
