import { useRouter } from 'next/router'

export default function DynamicRoute() {
    const router = useRouter()
    const { dynamic_route } = router.query

    console.table(router.query)

    return <p> route: { dynamic_route }</p>
}
