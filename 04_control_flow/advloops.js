const coding = ["js","ruby","java","python","cpp"]

coding.forEach((item)=>{console.log(item)})

function printme(item){
    console.log(item)
}

coding.forEach(printme)

coding.forEach((item,index, arr)=>{
    console.log(item,index,arr)
})
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// books.forEach((item)=>{
//     console.log(item.title)
// })

const nums=[2,3,5,3]

const newNums = nums.filter((n)=>{ return n>2})

let userBooks = books.filter((bk)=>{
    if(bk.genre === "History"){
        return bk.title
    }
})

 userBooks= books.filter((bk)=>{
    if(bk.edition>2000){
        return bk                           
    }
 })

const arr = nums.map((num)=>{return num + 10})

console.log(arr)