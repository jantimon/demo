import { useRouter } from "next/router"

export const getServerSideProps = () => {
    return { props: { } }
}

export default function City() {
    const {query} = useRouter();
    return <>
    
        <h1>Weather for {query.city}</h1>
        <span>it's sunny</span>
    </>

}