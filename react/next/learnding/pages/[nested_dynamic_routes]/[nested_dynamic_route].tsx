import { useRouter } from 'next/router'

export default function NestedDynamicRoute() {
    const router = useRouter()
    const { nested_dynamic_routes, nested_dynamic_route } = router.query

    return <p>/{nested_dynamic_routes}/{nested_dynamic_route}</p>
}