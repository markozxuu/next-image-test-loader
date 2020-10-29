// Packages
import Unsplash from "unsplash-js";
import Card from '../components/card';


// Components
import Layout from '../components/Layout';
import Banner from '../components/banner';

const Index = ({ collections }) => {
    return (
        <Layout>
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

// yyM7J0rtEgc1eRvV0eL9tdgJOiIfXX9uDvoxdlM4NH4