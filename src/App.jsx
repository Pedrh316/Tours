import React from 'react';
import Tours from './Tours';
import Loading from './Loading';
import './index.css';
const url = 'https://course-api.com/react-tours-project'

export default function App(){
    const [loading, setLoading] = React.useState(true);
    const [tours, setTours] = React.useState([]);

    const removeTour = (id) => {
        setTours(prevTours => prevTours.filter(tour => tour.id !== id))
    }

    const fetchTours = async () => {
        setLoading(true);

        try{
            const response = await fetch(url);
            const tours = await response.json();
            console.log(tours);
            setLoading(false);
            setTours(tours);
        } catch(error){
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchTours();
    }, [])

    if(tours.length === 0){
        return (
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <button className="btn" onClick={fetchTours}>refresh</button>
                </div>
            </main>
        )
    }

    if(loading){
        return (
            <main>
                <Loading/>
            </main>
        )
    } 
    return (
        <main>
            <Tours removeTour={removeTour} tours={tours}/>
        </main>
    )

}