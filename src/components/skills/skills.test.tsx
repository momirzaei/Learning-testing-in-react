import { render , screen } from "@testing-library/react";
import { Skills } from "./skills";
import React from "react";

describe('skills' , () => {
    const skills = ["HTML" , "CSS" , "JavaScript"  ]
    test("skills render correctly" , () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })
    // because we have a list of items
    // we should use (all) in the queries
    test('renders a list of skills' , () => {
        render(<Skills skills={skills}/>)
        const listItemElement = screen.getAllByRole('listitem')
        expect(listItemElement).toHaveLength(skills.length)
    } )
    test('renders login button' , () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button",{
            name : 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })
    test('Start Learning button is not render ', () => {
        render(<Skills  skills ={skills} />)
        const startLearningButton = screen.queryByRole('button' , {
            name : 'Start Learning'
        })
        expect(startLearningButton).not.toBeInTheDocument()
    })  
})

// textmatch is a type regex , string or func
// in string if u use {exact:false} u can ignore case and handle substring match
// in regex we use /word/  by using i u can ignore case sensitive
// (/^word$/i) means full string match , but not case sensitive
//  in funtion (content?: string , element?: Element |null ) => boolean
// like screen.getByText((content) => content.startsWith('word))

//queryBy and queryAllBy return match if not returns null and error if more than 1 match
// second one return all query or empty array