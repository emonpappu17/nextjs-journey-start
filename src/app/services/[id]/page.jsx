import React from 'react';

const ServiceDetailPage = ({ params }) => {
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
    const id = params?.id;
    console.log('id paisi', id);

    const singleData = data.find((d) => d.id == id);
    if (singleData) {
        return (
            <div>
                <h1>ServiceDetailPage</h1>
                <p>ID: {id}</p>
                <p>{singleData?.serviceName}</p>
                <img className='size-40' src={singleData?.image} />
            </div>
        );
    } else {
        return (
            <>
                <p>Not Found Service</p>
            </>
        )
    }

};

export default ServiceDetailPage;