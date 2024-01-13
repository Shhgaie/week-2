function Result(Semester_1,Semester_2,Year,Summarise){
    var Result = 0;
    var String_Result= '';
    if(Semester_1 !='' && Semester_2 !=''){
        Semester_1 = Number(Semester_1)
        Semester_2 = Number(Semester_2)
        if( Semester_1 >= 0 && Semester_1 <= 10 && Semester_2 >= 0 && Semester_2 <= 10){
             if(Year == 1){
                Result = (Semester_1+(Semester_2 * 2))/3
             }else if(Year == 2){
                Result = (Semester_1+(Semester_2 * 3))/4
             }else if(Year == 3){
                Result = (Semester_1+(Semester_2 * 4))/5
             }
             document.getElementById("Summarise").value = Result
        if(Result > 9){
            String_Result = 'HỌC SINH GIỎI'
        }else if(Result > 7){
            String_Result = 'HỌC SINH KHÁ'
        }else if(Result >= 4){
            String_Result = 'HỌC SINH TRUNG BÌNH'
        }else{
            String_Result = 'HỌC SINH YẾU'
        }
        document.getElementById("Result").innerHTML = String_Result;
        document.getElementById("Result").style.color = "red";
        }else{
            alert("Điểm của bạn chỉ từ 0 -> 10")
        }
    }else{
        alert("Vui lòng nhập điểm")
    }
}
function Cancel() {
   document.getElementById("Semester_1").value = '';
   document.getElementById("Semester_2").value = '';
   document.getElementById("Year").value = 1;
   document.getElementById("Summarise").value = '';
   document.getElementById("Result").innerHTML = '';
}