import { useState } from "react"

export type Props = {
    skills: string[]
}

export const Skills = ({
    skills
}: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <>
            <ul>
                {skills.map((skill) => {
                return <li key={skill}>{skill}</li>
                })}
            </ul>
            {isLoggedIn ? (
                <button>Start learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </>
    )
}
