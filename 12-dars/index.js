let users = [
    { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
    { id: 2, year: 2000, name: "Asilbek Topilov" },
    { id: 3, year: 2002, name: "Najmiddin Nazarov " },
    { id: 4, year: 2002, name: "Mominov Abdulloh" },
    { id: 5, year: 1995, name: "Sardor Tursunboyev" },
    { id: 6, year: 2002, name: "Azizbek Ziyoviddinov " },
    { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
    { id: 8, year: 2002, name: "Shukurov Shohruh" },
  ];
  
  updateUser({ id: 3, key: "name", value: "Guli" });
  // update
  const uptade =(id)=>{
    console.log(users.id = id.updateUser)
  }
  //   const updateUser = ({ id, key, value }) => {
  //   let res = users.map(
  //     (usr) => (usr.id === id ? { ...usr, [key]: value } : "hey")
  //     // usr.id === id ? { ...usr, [key]: value } : usr
  //   );
  //   console.log(res);
  //   return (students = res);
  // };
  
  



  // sprite
// let res ={id: 9, year:2002,name:"Azizjon Kamoljonov"}

// const userSiz =()=>{
//     let r =[...users, res]
//     console.log(r);
// }
// userSiz()


// delete
//   const del = (id) =>{
//     let r = users.filter((vl) => vl.id!==id)
//     console.log(r);
//   }
//   del(6)


// ried
//   const filter = (res) =>{
//     let r = users.filter((vl) => vl.name.includes(res))
//     console.log(r);
// }
// const sort = (res) =>{
//     let r = users.sort((a,b) => a.name.localeCompare(b.name))
//     console.log(r);
// }
// const find = (id) =>{
//     let r = users.find((vl) => vl.id===id)
//     console.log(r);
// }
// find(6)
// sort()
// filter("bek")