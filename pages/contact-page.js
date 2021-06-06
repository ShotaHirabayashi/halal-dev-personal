import Layout from '../components/Layout'
import Image from 'next/image'
const Contact= () => {
    return (
        <Layout title="contact">
            Contact
            <Image 
            className="rounded-full"
            src="/avatar.jpg"
            width={60}
            height={60}
            alt="avatart" />
        </Layout>
    )
}

export default Contact
