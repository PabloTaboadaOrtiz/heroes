import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import  queryString  from 'query-string';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCards } from '../hero/HeroCards'

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q=''} = queryString.parse(location.search)


    const [formValues, handleInputChange] = useForm(
        {searchText: q}
    )

    const {searchText} = formValues
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (ev) => {

        ev.preventDefault()
        navigate(`?q=${searchText}`)
    }
    return (
        <>
           <h1>Search Screen</h1>
           <hr></hr>
           <div className="row">
               <div className="col-5">
                   <h4>Formulario</h4>
                   <hr></hr>
                   <form onSubmit={handleSearch}>
                       <input 
                        type="text"
                        placeholder="heroe"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={handleInputChange}
                       />
                       <button className="btn btn-outline-primary mt-1 btn-block" type="submit">
                            buscar...
                       </button>
                   </form>
               </div>
               <div className="col-7">
                   <h4>Resultados</h4>
                   <hr></hr>
                   {
                       heroesFiltered.map(heroe => (
                           <HeroCards key={heroe.id}
                           {...heroe}></HeroCards>
                       ))
                   }
               </div>
           </div>
        </>
    )
}
