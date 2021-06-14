
import Layout from '../components/Layout'
import {getAllTagsData} from '../lib/restaurantTags'
import TagsComp from '../components/RestaurantTags'


const RestaurantTags = ({tags}) => {
    return (
        <Layout title="tags">
            <h3>Restaurant tags</h3>
            <ul className='mt-5'>
                {tags && tags.map((tag) => <TagsComp key={tag.slug} tag={tag} />)}
            </ul>
        </Layout>
    )
}

export default RestaurantTags

export async function getStaticProps(){
    const tags = await getAllTagsData()
    return {
        props: {
            tags
        },
        revalidate:7200,
    }
}