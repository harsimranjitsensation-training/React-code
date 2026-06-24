//1st method
// function Student(props){
//   return (
//     <>
//       <h1>My name is {props.name}</h1>
//       <h2>Age is {props.age}</h2>
//     </>
//   )
// }

// export default Student;

//2nd method
function Student({name,age}){
  return (
    <>
      <h1>My name is {name}</h1>
      <h2>Age is {age}</h2>
    </>
  )
}

export default Student;