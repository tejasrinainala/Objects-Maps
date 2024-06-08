const details={
    name:'',
    age:'',
    education:'',
    address:''
}
const newuser={
    name:'tejaari',
    age:'19',
    education:'B.Tech.'
}

Object.assign(details,newuser)//merging objects with object spread.
console.log(details)
const updateDetails={...details,...newuser,verified:true}
console.log(updateDetails)





//output
{ name: 'tejaari', age: '19', education: 'B.Tech.', address: '' }
{
  name: 'tejaari',
  age: '19',
  education: 'B.Tech.',
  address: '',
  verified: true
}
