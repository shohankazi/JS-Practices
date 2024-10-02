// Create an array with 5 students names, after that create a function which takes two parameters(all students & studentName) iterate over all students and find that specific user "StudentName"

const names = ['rahim','karim','jalil','abdul','babul'];

function nameIterator(allStudents,studentName) {
    for(let i = 0; i < allStudents.length; i++){
        if(allStudents[i] === studentName){
           return (`Student ${names[i]} found`);
        }
    }
    return (`Student ${studentName} not found`);
        
}

const studentNames = nameIterator(names,'abdul');
console.log(studentNames);
