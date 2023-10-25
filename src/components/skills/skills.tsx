import { SkillsProps } from "./skills.types";
import React, { useEffect, useState } from 'react'


export const Skills = (props: SkillsProps) =>{
    const {skills} = props
    const [isLoggedin , setIsLoggedin] = useState(false)
    useEffect(() => {
        setTimeout(() =>{
            setIsLoggedin(true)
        } , 1500)
    } , [])
    return(
        <>
        <ul>
            {skills.map((skill) =>{
                return <li key={skill}>{skill}</li>
            })}
        </ul>
        {isLoggedin ? (
         <button>Start Learning</button>)
         :(
            <button onClick={() => setIsLoggedin(true)}>Login</button>
         )
        }
        </>
    )
}