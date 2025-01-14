
export type Props = {
    skills: string[]
}

export const Skills = ({
    skills
}: Props) => {
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
    </>
  )
}
