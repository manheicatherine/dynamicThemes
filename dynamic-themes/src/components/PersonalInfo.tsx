interface PersonalInfoProps  {
  theme: string;
};

export const  PersonalInfo =(props: PersonalInfoProps)=> {
  
  return (
    <div className={`gridPersonalInfoContainer `}>
    <h3>Susan Taylor</h3>
    <h6>Game <span className={`react-icons${props.theme}`}>Designer</span></h6>
    <p>
      Game designer at eric. delivering creative and wonderful experience.
      Contact today!
    </p>
  </div>
  )
}
