//Author: Eric Wall
//Author: Emil Bero - made refinements to the code

//Description: This file contains the Ecosystem component. This component is used to display the ecosystem page.

const Ecosystem = () => {
    return (
        <div id="ecosystem" className="max-w-[1080px] m-auto p-4 py-16 border-t">
            <h1 className="py-4 text-4xl font-bold text-center text-black">
                ECOSYSTEM
            </h1>
            <div className="grid md:grid-cols-2 gap-4 w-full py-8">
                <div className="flex flex-col mt-4">
                    <p className="text-lg font-normal text-gray-700 text-justify mt-4">
                        French Village Forest Conservation is home to a diverse ecosystem. With historic and
                        interesting flora and fauna, there is something to see for everyone. Whether you are
                    </p>
                    <div className="aspect-w-1 aspect-h-1">
                        <img
                            src="images/outlooktrail.jpg"
                            alt="picture of burial"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <p className="text-lg font-normal text-gray-700 text-justify mt-4">
                        interested in the historic coastal yellow birch that Nova Scotia is famous for, or our
                        small reptile friends that take refuge under rocks; the diversity never stops astonishing.
                        Nestled in the heart of the French Village Forest Conservation Site, a haven of
                        biodiversity awaits nature enthusiasts.The thriving ecosystem showcases a rich tapestry
                    </p>
                </div>
                <div className="flex flex-col mt-4">
                    <p className="text-lg font-normal text-gray-700 text-justify mt-4">
                        of flora and fauna, providing a visual and sensory feast for visitors of all interests.
                        Towering coastal yellow birches, steeped in historical significance, stand as proud
                        sentinels, echoing the tales of Nova Scotia's past.Meandering through the trails, one
                        may stumble upon the intricate world beneath rocks, where small reptilian inhabitants
                        seek refuge.It's a microcosm of life, a delicate balance where every species plays a
                        vital role in the symphony of nature. From vibrant wildflowers that carpet the forest
                        floor to the elusive wildlife that flits between the branches, the French Village Forest
                        Conservation encapsulates the essence of natural beauty, inviting all who wander to
                        witness its awe-inspiring wonders.
                    </p>
                    <div className="aspect-w-1 aspect-h-1">
                        <img
                            src="images/foresttrees.jpg"
                            alt="picture of burial"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <p className="text-lg font-normal text-gray-700 text-justify">
                Venture along the winding trails, and you may be fortunate enough to catch a glimpse
                of the Eastern coyote, its haunting calls echoing through the woodland, creating an
                air of mystery.As you tread softly over the forest floor, be enchanted by the delicate
                trilliums and vibrant lady's slippers, painting the ground with a palette of colors
                unique to this region. Along the meandering brooks, the Northern red-backed salamander
                gracefully maneuvers through its habitat, emblematic of the intricate ecosystems that
                thrive in this protected haven.Each step taken within the French Village Forest
                Conservation reveals a choreography of life, a harmonious blend of Central Nova Scotia's
                untamed beauty.This conservation area stands as a testament to the vital need to preserve
                and protect these natural wonders, ensuring that the diverse tapestry of life continues
                to flourish for generations to come.
            </p>

            <p className="text-lg font-normal text-gray-700 text-justify mt-4">
                As you explore the intertwining trails, the distinct call of the elusive barred owl may
                greet you from the lofty branches overhead, a testament to the diverse avian residents
                that find refuge in this lush haven. Among the verdant undergrowth, keep an eye out for
                the rare Pink Lady's Slipper orchid, adding a touch of elegance to the forest floor.
                Along the meandering waterways, the playful antics of the North American river otter may
                capture your attention, a delightful display of the charismatic wildlife thriving in this
                protected landscape. The French Village Forest Conservation is not merely a collection of
                trees; it's a living, breathing symphony of Central Nova Scotia's natural heritage, where
                each species, from the majestic owl to the delicate orchid, contributes to the vibrant
                tapestry of life.
            </p>
        </div>
    );
};

export default Ecosystem;
