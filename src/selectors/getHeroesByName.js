import { heroes } from "../data/heroes"


export const getHeroesByName = (name = '') => {
    console.log('engrtooo')
    if(name === '') {
        return []
    }

    name.toLowerCase();

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))


}