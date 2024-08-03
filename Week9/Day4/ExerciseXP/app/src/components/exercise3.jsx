// We'll reuse this code in Example 2
export function Example1({elements}) {
  return (
    <ul>
      {
        elements?.map((url, index) => (
          <li key={"li " + index}>
            {url}
          </li>
        ))
      }
    </ul>
  )
}

export function Example2({skills}) {
  return (
    <>
      {
        skills?.map(({Area, SkillSet}, skillIdx) => (
          <div key={"skill " + skillIdx}>
            <h3>{Area}</h3>
            <Example1 elements={SkillSet.map(skill => skill.Name)}></Example1>
          </div>
        ))
      }
    </>
  )
}

export function Example3({experiences}) {
  // In our json all "experiences.roles" arrays have only 1 element
  // Nevertheless my code works for general case
  return (
    <>
      {
        experiences?.map((value, skillIdx) => (
          <div key={"exp " + skillIdx}>
            <img src={value.logo} alt={"logo of " + value.companyName}/><br/>
            <a href={value.url}>{value.companyName}</a>
            {
              value.roles?.map((role, index) => (
                <div key={`role ${skillIdx}-${index}`}>
                  <p><b>{role.title}</b></p>
                  <p>{role.startDate} - {role.endDate}</p>
                  <p>{role.location}</p>
                  <p>{role.description}</p>
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  )
}
