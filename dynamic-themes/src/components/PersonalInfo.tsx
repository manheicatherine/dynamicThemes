interface PersonalInfoProps  {
  theme: string;
};

export const  PersonalInfo =(props: PersonalInfoProps)=> {
  
  return (
    <div className={`gridPersonalInfoContainer `}>
    <h3>Jennifer</h3>
    <h6>Graphic <span className={`react-icons${props.theme}`}>Designer</span></h6>
    <p>
    Graphic designer at eric. delivering creative and wonderful experience.
      Contact today!
    </p>
  </div>
  )
}
