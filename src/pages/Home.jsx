import Card from "../components/Card";
import FormField from "../components/FormField"
import { GridLoader } from "react-spinners";
import { useState, useEffect } from 'react'


const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#222328] text-[32px]'>
                    Community Showcase
                </h1>
                <p className='mt-2 text-[#e66675] text-[14px] max-w'>
                    Browse through a collection of AI generated images
                </p>
            </div>

            <div className='mt-16'>
                <FormField />
            </div>

            <div className='mt-10'>
                {loading? (
                    <div className='flex justify-center items-center'>
                        <GridLoader color={aqua}/>
                    </div>
                ) : (<> </>)}
            </div>
        </section>
    )
}

export default Home