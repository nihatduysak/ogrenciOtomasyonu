let students = [];

const titleRow = document.querySelector('#titleRow');
const addStudent = document.querySelector('#addStudent');
addStudent.addEventListener('click', pushStudent);

// if(typeof localStorage.students != 'undefined'){
//     students = JSON.parse(localStorage.students);
// }

if(localStorage.students) {
    students = JSON.parse(localStorage.students)
};

let studentID = 0;

if(localStorage.studentID){
    studentID = Number(localStorage.studentID);
}

function generateId(){
    studentID++;
    localStorage.studentID = studentID;
    return studentID;
}

function pushStudent() {
    let studentFirstName = prompt('Öğrencinin Adını Giriniz');
    let studentLastName = prompt('Öğrencinin Soyadını Giriniz');
    let studentAge = prompt('Öğrencinin Yaşını Giriniz');
    let studentGender = prompt('Öğrencinin Cinsiyetini Giriniz'); 
    let studentPicLink = prompt('Öğrencinin Fotoğraf Linkini Giriniz') ;    
   
    students.push(
        {
            id: generateId(),
            name: studentFirstName,
            surname: studentLastName,
            age: studentAge,
            gender: studentGender,
            picture: studentPicLink
        }
    )
    
    studentList2.innerHTML += `<tr><td>${studentID}</td>
    <td>${studentFirstName}</td><td>${studentLastName}</td><td>${studentAge}</td>
    <td>${studentGender}</td><td><img src="${studentPicLink}"/>
    </td></tr>`

    saveStudents();
}

function saveStudents() {
    localStorage.students = JSON.stringify(students);

}

function studentIndex(studentID){
    for(let i = 0; i < students.length; i++){
        if(students[i].id === studentID){
            return i;
        }
    }
    return -1;
}

function delControl(){

	let e = confirm("Silme işlemini onaylıyor musun?");

	if (e) {
		alert("Öğrenci kaydı silindi");
	}else{
		alert("Kayıt silme işlemi iptal edildi");
	}

}

const delAllStudent = document.querySelector('#delAllStudent');
const studentList2 = document.querySelector('#studentList2');
delAllStudent.addEventListener('click', deleteAll);

function deleteAll() { 
    let askAll = confirm('Tüm kaydın silinmesini onaylıyor musunuz?')
    if(askAll){
        let askAll = confirm("Silme işlemini onaylıyor musun?");

	if (askAll) {
        localStorage.clear();
        studentList2.innerHTML = '';
        alert('Tüm kayıt başarıyla silindi');
        location.reload();
	}else{
		alert("Tüm kaydın silme işlemi iptal edildi");
	}
}
}

const delStudent = document.querySelector('#delStudent');
delStudent.addEventListener('click', askDelStudent);
function askDelStudent(){
    let delStudent = Number(prompt('Silmek istediginiz öğrenci satır numarasını giriniz'));
    let ask = confirm("Silme işlemini onaylıyor musun?");

	if (ask) {
		alert("Öğrenci kaydı silindi");
	}else{
		alert("Kayıt silme işlemi iptal edildi");
	}
    studentList2.deleteRow(delStudent);
    saveStudents();
};

const editStudent = document.querySelector('#editStudent');
