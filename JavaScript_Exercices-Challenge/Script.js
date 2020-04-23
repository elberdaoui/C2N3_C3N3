document.write("<h3>  ARRAY 1 </h3>")
// ARRAY 1
const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]

  // Part 1 - Find all users older than 24
  document.write("<h3>  Part 1 </h3>")
  var sum = 0
  for(x in texasss){
    sum = sum + texasss[x].age
    if(texasss[x].age > 24)
    document.write("<li>" + texasss[x].name + "</li>")
  }

  // Part 2 - Find the total age of all users
  document.write("<h3>  Part 2 </h3>")

  document.write(sum)
  // Part 3 - List all female coders
  document.write("<h3>  Part 3 </h3>")

  for(usrf of texasss){
    if(usrf.gender === "f")
    document.write("<li>" + usrf.name + "</li>")
  }


  document.write("<h3>  ARRAY 2 </h3>")
  // ARRAY 2
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]

  // Part 1 - List all users in US in ascending order
  document.write("<h3>  Part 1 </h3>")

  var srtusr = newieyork.sort((a, b) => (a.name > b.name) ? 1 : -1)
  for(prsname of srtusr){
    if(prsname.us === true)
    document.write("<li>" + prsname.name + "</li>")
  }


  // Part 2 - Sort all users by age
  document.write("<h3>  Part 2 </h3>")

  var srtage = newieyork.sort((a, b) => (a.age > b.age) ? 1 : -1)
  for(prsnage of srtage){
    document.write("<li>" + prsnage.name + " :  " + prsnage.age + "</li>")
  }

  // Part 3 -  List all female coders
  document.write("<h3>  Part 3 </h3>")

  for(prsnf of newieyork){
    if(prsnf.gender === "f" && prsnf.coder)
    document.write("<li>" + prsnf.name + "</li>")
  }
document.write("<h3>  ARRAY 3 </h3>")
  // ARRAY 3
  const vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 47,
      coder:false,
      gender: 'm',
    },
  ]

  // Part 1 - Find the total age of male coders under 25
  document.write("<h3>  Part 1 </h3>")
  var s = 0;

  for (const usr of vegzas){
    if (usr.gender === 'm' && usr.coder == true && usr.age < 25){
      s += usr.age;
      document.write("<li>" + "le totale est : " + s + "</li>");
    }
    // Part 2 - List all male coders over 30


    if(usr.age > 30 && usr.gender === 'm' && usr.coder == true)

      document.write( "<li>" + usr.name + "</li>" + "<h3>  Part 2 </h3>")
}


  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
  document.write("<h3>  Part 3 </h3>")

  const allarrays = texasss.concat(newieyork, vegzas).reduce((a, b) => a + b.age, 0)

  document.write(allarrays)
