
import Layout from '../components/Layout'
import {getAllPrefData} from '../lib/pref'
import Pref from '../components/Pref'


const Blog = ({prefs}) => {
    return (
        <Layout title="blog">
            <ul className='mt-5'>
           {prefs && prefs.map((pref) => <Pref key={pref.pref_code} pref={pref} />)}
           </ul>
        </Layout>
    )
}

export default Blog


export async function getStaticProps(){
    const prefs = await getAllPrefData()
    return {
        props: {prefs}
    }
}