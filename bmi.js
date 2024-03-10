let button=document.getElementById('btn');
button.addEventListener('click',()=>{
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
    const result1=document.getElementById('output1');
    const result2=document.getElementById('output2');
    let h_status=false,w_status=false;
    if(height===''||isNaN(height)||(height<=0)){
        document.getElementById('height-error').innerHTML='Provide valid height';
    }
    else{
        document.getElementById('height-error').innerHTML='';
        h_status=true;
    }
    if(weight===''||isNaN(weight)||(weight<=0)){
        document.getElementById('weight-error').innerHTML='Provide valid weight';
    }
    else{
        document.getElementById('weight-error').innerHTML='';
        w_status=true;
    }
    if(h_status && w_status){
        const bmi=(weight/((height/100)*(height/100))).toFixed(2);
    
    if(bmi<18.6){
        result1.innerHTML='BMI: '+ bmi;
        result2.innerHTML='REMARKS: UNDERWEIGHT';
    }
    else if(bmi>=18.6&&bmi<=24.9){
        result1.innerHTML='BMI: '+ bmi;
        result2.innerHTML='REMARKS: NORMAL';
    }
    else{
        result1.innerHTML='BMI: '+ bmi;
        result2.innerHTML='REMARKS: OVERWEIGHT';
    }}
    else{
        alert('ERROR');
        result1.innerHTML='';
        result2.innerHTML='';
    }
});