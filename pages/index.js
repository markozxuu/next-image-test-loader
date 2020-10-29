// Packages
import Unsplash from "unsplash-js";


// Components
import Layout from '../components/Layout';
import Banner from '../components/banner';
import Card from '../components/card';

const Index = ({ collections }) => {
    return (
        <Layout>
           <h1 style={{ marginBottom: 20, fontSize: '1.8em' }}>Next image component</h1>
           <Banner /> 
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
