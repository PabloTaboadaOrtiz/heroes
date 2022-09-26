import { heroes } from "../data/heroes"


export const getHeroByPublisher = (publisher) => {

    return heroes.filter(hero => hero.publisher === publisher )
}