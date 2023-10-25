import { SkillsProps } from "./skills.types";
import React, { useState } from 'react'


export const Skills = (props: SkillsProps) =>{
    const {skills} = props
    const [isLoggedin , setIsLoggedin] = useState(false)
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