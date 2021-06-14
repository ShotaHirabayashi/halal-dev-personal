
import Layout from '../../components/Layout'
import {getAllPrefData} from '../../lib/pref'
import PrefComp from '../../components/Pref'


const Pref = ({prefs}) => {
    return (
        <Layout title="pref">
            <ul className='mt-5'>
                {prefs && prefs.map((pref) => <PrefComp key={pref.pref_code} pref={pref}category="grocery"/>)}
            </ul>
        </Layout>
    )
}

export default Pref

export async function getStaticProps(){
    const prefs = await getAllPrefData()
    return {
        props: {
            prefs
        },
        revalidate:7200,
    }
}