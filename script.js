//labelCreation
function labelCreation(tagname,attr,attrVal,content){
    var  label1 = document.createElement(tagname);
    label1.setAttribute=(attr,attrVal) ;
    label1.innerHTML=(content);
    return label1
}

//breakCreation
function breakCreation(){
    var break1 =document.createElement("br");
    return break1
}

//inputCreation
function inputCreation(tagname2,attr2,attrVal2,idname){
    var input1=document.createElement(tagname2);
    input1.setAttribute(attr2,attrVal2);
    input1.id= idname;
    return  input1;
}

//FirstName
var fname_label = labelCreation("label","for","firstName","First Name");
var fname_break = breakCreation();
var fname_input =  inputCreation("input", "type","text","firstName")
var fname_break2 = breakCreation();

var FirstName = document.body.append(fname_label,fname_break,fname_input,fname_break2)

//Middlename
var mname_label = labelCreation("label","for","middleName","Middle Name");
var mname_break = breakCreation();
var mname_input =  inputCreation("input", "type","text","middleName")
var mname_break2 = breakCreation();

var MiddleName = document.body.append(mname_label,mname_break,mname_input,mname_break2)

//LastName
var lname_label = labelCreation("label","for","lastName","Last Name");
var lname_break = breakCreation();
var lname_input =  inputCreation("input", "type","text","lastName")
var lname_break2 = breakCreation();

var LastName = document.body.append(lname_label,lname_break,lname_input,lname_break2)

//Email
var email_label = labelCreation("label","for","email","Email");
var email_break = breakCreation();
var email_input =  inputCreation("input", "type","email","email")
var email_break2 = breakCreation();

var Email = document.body.append(email_label,email_break,email_input,email_break2)

//Address
var address_label = labelCreation("label","for","address","Address");
var address_break = breakCreation();
var address_input =  inputCreation("input", "type","text","address")
var address_break2 = breakCreation();

var Address = document.body.append(address_label,address_break,address_input,address_break2)

//Submit
var Submit = document.createElement("button")
Submit.setAttribute("onclick","result()")
Submit.innerHTML="Click to Submit"
document.body.append(Submit)


//Result
function result(){
    let fname = document.getElementById("firstName").value;
    let mname = document.getElementById("middleName").value;
    let lname = document.getElementById("lastName").value;
    let mail = document.getElementById("email").value;
    let home = document.getElementById("address").value;

console.log(fname,mname,lname,mail,home)
}