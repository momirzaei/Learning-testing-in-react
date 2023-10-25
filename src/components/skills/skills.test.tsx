import { logRoles, render , screen } from "@testing-library/react";
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
    //using findBy and findAllBy returns Promise resolve
    // if an element match in query and promise
    // failed if it takes more than default value that is 
    // 1000 ms and u can pass 3rd argument for default time value
    // findAllBy is for a group of element 
    // and the same as findBy
    // cause it is promise we should 
    // add async - await 
    test('start learning button is eventually displayed',async() =>{
        // using logRoles showing all items and how we can use them for debuging
        const view = render(<Skills skills={skills} />)
        logRoles(view.container)
        // using screen.debug for visualizing and formating for debug
        // screen.debug
        const startLearningButton =await screen.findByRole('button',{
            name:"Start Learning"
        },{
            timeout:2000
        })
        // screen.debug
        expect(startLearningButton).toBeInTheDocument()
    })
})

// textmatch is a type regex , string or func
// in string if u use {exact:false} u can ignore case and handle substring match
// in regex we use /word/  by using i u can ignore case sensitive
// (/^word$/i) means full string match , but not case sensitive
//  in funtion (content?: string , element?: Element |null ) => boolean
// like screen.getByText((content) => content.startsWith('word))

//queryBy and queryAllBy return match if not returns null and error if more than 1 match
// second one return all query or empty array\
// we can using testing playground for generating test for diffrent parts of our code