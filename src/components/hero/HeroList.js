import { useMemo } from 'react';
import {HeroCards} from './HeroCards.js';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])
     

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {heroes.map(hero => (
                <HeroCards 
                    key={hero.id}
                    {...hero}
                >
                </HeroCards>))}
        </div>
    )
}
