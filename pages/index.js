// Packages
import Unsplash from "unsplash-js";
import Card from '../components/card';


// Components
import Layout from '../components/Layout';

const Index = ({ collections }) => {
    return (
        <Layout>
           {collections.map((item) => (
               <Card key={item.id} {...item} />
           ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const unsplash = new Unsplash({ accessKey: process.env.TOKEN_UNSPLASH });
    const data = await unsplash.users.collections('markozxuu');
    const collections = await data.json();
    return {
        props: {
            collections,
        }
    }
}

export default Index;
