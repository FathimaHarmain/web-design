function validateForm(){
    alert('im in validateForm function')
    let val=true;
    let nameValue = document.formName.nameName.value;
    let pass = 1;
    let pass2 = 2;
    let genderSelected = document.querySelector('input[name=gender]:checked')

    console.log('nameValue>>',nameValue)
    if(nameValue.length <5){
        alert('im in if condition')
        val=false;
    }
    //if(numberValue.length<10 || numberValue.length>10){
    // val=false;
    //}
    if(!numberValue.length==10){
        val=false;
    }
    function resetForm(){
        document.formName.nameName.value=''
    }

    return val;
}