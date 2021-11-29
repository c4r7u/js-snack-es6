let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

  const stringArray1 = students.map((element, index, array) => {
      const Name = element.name.toUpperCase()
      return Name
  })
  console.log(stringArray1);


  const stringArray2 = students.filter((element, index, array) => {

    const Grades = element.grades > 70

    return Grades
  })
  console.log(stringArray2);



  const stringArray3 = students.filter((element, index, array) => {
    const Id = element.grades > 70 && element.id > 120
    return Id
  })
  console.log(stringArray3);

