import Link from "next/link";

const ServicesPage = () => {
    const data = [
        {
            id: 'llasdfj034578',
            serviceName: 'healthcare',
            image: 'https://images.pexels.com/photos/30528098/pexels-photo-30528098/free-photo-of-close-up-portrait-of-fallow-deer-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id: 'alsdfjdgsladgjk',
            serviceName: 'bike serviceF',
            image: 'https://images.pexels.com/photos/31236777/pexels-photo-31236777/free-photo-of-traditional-chinese-architecture-with-modern-buildings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        },
        {
            id: 'lasdgjowieruoweir',
            serviceName: 'gym service',
            image: 'https://images.pexels.com/photos/31198323/pexels-photo-31198323/free-photo-of-scenic-horseback-ride-in-northern-mindanao.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        }
    ]
    return (
        <div>
            <p className="font-bold text-3xl">ServicesPage</p>
            <div className="flex gap-5">
                {
                    data.map((d) => {
                        return (
                            <div>
                                <Link href={`/services/${d.id}`}> <img src={d.image} className="size-60" /></Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ServicesPage;