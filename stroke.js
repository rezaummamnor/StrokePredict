var screen=document.querySelector('#screen');
var dicek=document.querySelector('#cek');
var btn=document.querySelectorAll('.btn');
var rule1 = 0
var rule2 = 0

item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
});

function input1(param)
{
    if (param=='laki-laki') 
    {
       rule1='laki-laki'
    }  else 
        {
        rule1='perempuan'
        }
}

function input2(param)
{
    if (param=='anak-anak') 
    {
       rule2='anak-anak'
    }  else 
    {
        if(param=='remaja')
        {
            rule2='remaja'
        } else
        {
            if(param=='dewasa')
            {
                rule2='dewasa'
            } else
            {
                if(param=='pra lanjut usia')
                {
                    rule2='pra lanjut usia'
                } else
                {
                    rule2='lanjut usia'
                }
            }
        } 

    }
}

function input3(param)
{
    if (param=='Ya') 
    {
       rule3=1
    }  else 
        {
        rule3=0
        }
}

function input4(param)
{
    if (param=='Ya') 
    {
       rule4=1
    }  else 
        {
        rule4=0
        }
}

function input5(param)
{
    if (param=='Ya') 
    {
       rule5=1
    }  else 
        {
        rule5=0
        }
}

function input6(param)
{
    if (param=='ASN') 
    {
       rule6='ASN'
    }  else 
    {
        if(param=='self-employed')
        {
            rule6='self-employed'
        } else
        {
            if(param=='wiraswasta')
            {
                rule6='wiraswasta'
            } else
            {
                if(param=='belum berkerja')
                {
                    rule6='belum berkerja'
                } else
                {
                    rule6='tidak berkerja'
                }
            }
        } 

    }
}

function input7(param)
{
    if (param=='perkotaan') 
    {
       rule7='perkotaan'
    }  else 
        {
        rule7='pedesaan'
        }
}

function input8(param)
{
    if (param=='Ya') 
    {
       rule8=1
    }  else 
        {
        rule8=0
        }
}

function input9(param)
{
    if (param=='kurus') 
    {
       rule9='kurus'
    }  else 
    {
        if(param=='normal')
        {
            rule9='normal'
        } else
        {
            rule9='obesitas'
        }
    }
}

function input10(param)
{
    if (param=='tidak merokok') 
    {
       rule10='tidak merokok'
    }  else 
    {
        if(param=='pernah merokok')
        {
            rule10='pernah merokok'
        } else
        {
            rule10='merokok'
        }
    }
}


function predict()
{
    if (rule3==1)
    {
        if (rule4==1)
        {
            prediksi = 'stroke'
            screen.value = prediksi
        }   else
            {
                prediksi = 'tidak stroke'
                screen.value = prediksi
            }

    }   else
        {
            if (rule4==1)
            {
                prediksi = 'stroke'
                screen.value = prediksi
            }   else
                {
                    prediksi = 'tidak stroke'
                    screen.value = prediksi
                }
        }
    }

