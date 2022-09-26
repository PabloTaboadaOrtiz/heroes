import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';


export const HeroScreen = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const hero = useMemo(() => getHeroById(id), [id])

    const handleReturn = () => {
        navigate(-1)
    }

    if(!hero) {
        return <Navigate to="/"/>
    }

    const imagePath = `/assets/${hero.id}.jpg`
    return (
        <div className="col">
            <div className="card">

                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={imagePath} className="card-img" alt={hero.superhero}/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title"> {hero.superhero} </h5>
                            <p className="card-text"> {hero.alter_ego} </p>
                            {
                                hero.alter_ego !== hero.characters && <p className="text-muted">{hero.characters}</p> 
                            }
                            <p className="card-text">
                                <small className="text-muted">{hero.first_appearance}</small>
                            </p>
                        </div>
                    </div>

                    <button onClick={handleReturn} className="btn btn-outline-info">Return </button>
                </div>
            </div>
        </div>
        )
}
