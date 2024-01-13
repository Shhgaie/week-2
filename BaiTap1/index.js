function Grade(text_name,your_score) {
    var string_grade = "";
    if(your_name != ''){
        if(your_score != ''){
            if(your_score >= 0 && your_score <= 100){
                if(your_score > 90){
                    string_grade = 'Exelence'
                }else if(your_score > 80){
                    string_grade = 'Very Good'
                }else if(your_score > 60){
                    string_grade = 'Fair'
                }else if(your_score >= 50){
                    string_grade = 'Medium'
                }else{
                    string_grade = 'Fail'
                }
            }else{
                string_grade = 'Score must be between 0 and 100'
            }
            document.getElementById("string_grade").innerHTML = text_name +" Grade:  <b>"+ string_grade + '</b>'

        }else{
            alert("Please enter a Score")
        }
    }else{
        alert("Please enter a Name")
    }
}