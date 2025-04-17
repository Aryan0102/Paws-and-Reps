import React from 'react'
import Collapsible from "./Collapsible";

const HomeSection = () => {
    return (
        <div>
            <div className='bg-gray-100 text-center py-16 px-4'>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Lifting for a Cause
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                    Paws & Reps brings fitness enthusiasts together to support animal welfare.
                    Join us in making a difference through every rep!
                </p>
                <a
                    href="/donate"
                    className="bg-emerald-600 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-emerald-700 transition"
                >
                    Donate Now
                </a>
            </div>

            {/* Highlights / Mission section */}
            <div className="py-12 px-4 flex flex-col justify-between items-center text-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
                <p className="max-w-3xl mb-8 text-center">
                    At Paws & Reps, we believe awareness starts with movement — and together, we can make a real impact for the health of female dogs. Whether you're a gym owner, a fitness influencer, or a passionate dog parent, there’s a way for you to get involved, give back, and help prevent UTI infections in dogs through fitness-driven action.
                </p>
                {/* Key points */}
                <h2 className="text-2xl font-bold mb-6 text-center">Who are you?</h2>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                <Collapsible
                        false
                        title="🧱 Gym Owner/Trainer"
                    >
                        Consectetur adipiscing elit pellentesque habitant morbi tristique.
                        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
                        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
                        et netus et. Elementum integer enim neque volutpat. Faucibus in ornare
                        quam viverra orci sagittis. Amet volutpat consequat mauris nunc congue
                        nisi vitae suscipit. Dui accumsan sit amet nulla. Proin sagittis nisl
                        rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio ut sem
                        nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
                        auctor augue
                    </Collapsible>

                    <Collapsible
                        false
                        title="💪 Fitness Influencer"
                    >
                        Consectetur adipiscing elit pellentesque habitant morbi tristique.
                        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
                        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
                        et netus et. Elementum integer enim neque volutpat. Faucibus in ornare
                        quam viverra orci sagittis. Amet volutpat consequat mauris nunc congue
                        nisi vitae suscipit. Dui accumsan sit amet nulla. Proin sagittis nisl
                        rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio ut sem
                        nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
                        auctor augue
                    </Collapsible>
                    
                    <Collapsible
                        false
                        title="🐾 Dog Owner/Supporter"
                    >
                        Consectetur adipiscing elit pellentesque habitant morbi tristique.
                        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
                        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
                        et netus et. Elementum integer enim neque volutpat. Faucibus in ornare
                        quam viverra orci sagittis. Amet volutpat consequat mauris nunc congue
                        nisi vitae suscipit. Dui accumsan sit amet nulla. Proin sagittis nisl
                        rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio ut sem
                        nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
                        auctor augue
                    </Collapsible>

                </div>
            </div>
        </div>
    )
}

export default HomeSection