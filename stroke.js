var screen=document.querySelector('#screen');

var dicek1=document.querySelector('#cek1');
var dicek2=document.querySelector('#cek2');
var dicek3=document.querySelector('#cek3');
var dicek4=document.querySelector('#cek4');
var dicek5=document.querySelector('#cek5');
var dicek6=document.querySelector('#cek6');
var dicek7=document.querySelector('#cek7');
var dicek8=document.querySelector('#cek8');
var dicek9=document.querySelector('#cek9');
var dicek10=document.querySelector('#cek10');

var btn=document.querySelectorAll('.btn');
var rule1 = 0
var rule2 = 0

item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
});

//jenis kelamin
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

//kategori umur
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

//riwayat hipertensi
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

//riwayat penyakit jantung
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

//status pernikahan
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

//tipe pekerjaan
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

//area tempat tinggal
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


//riwayat diabetes
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

//kategori obesitas
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


//status merokok
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

function predict2()
{
    if (rule4==1)
    {
        if (rule2=='dewasa')
        {
            prediksi = 'tidak stroke'
            screen.value = prediksi
        } else
        {
            if(rule2=='pra lanjut usia')
            {
                if(rule8==1)
                {
                    prediksi = 'stroke'
                    screen.value = prediksi
                } else 
                {
                    if(rule8==0)
                    {
                        prediksi = 'tidak stroke'
                        screen.value = prediksi
                    }
                }
            } else
            {
                if(rule2=='lanjut usia')
                {
                    if(rule6=='ASN')
                    {
                        if(rule7=='perkotaan')
                        {
                            prediksi = 'tidak stroke'
                            screen.value = prediksi
                        } else
                        {
                            if(rule7=='pedesaan')
                            {
                                if(rule5==0)
                                {
                                    prediksi = 'stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule5==1)
                                    {
                                        if(rule3==1)
                                        {
                                            prediksi = 'tidak stroke'
                                            screen.value = prediksi
                                        } else
                                        {
                                            if(rule3==0)
                                            {
                                                if(rule10=='tidak merokok')
                                                {
                                                    prediksi = 'stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule10=='pernah merokok')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule10=='merokok')
                                                        {
                                                            prediksi = 'stroke'
                                                            screen.value = prediksi
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else
                    {
                        if(rule6=='self-employed')
                        {
                            if(rule7=='pedesaan')
                            {
                                if(rule9=='obesitas')
                                {
                                    prediksi = 'tidak stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule9=='normal')
                                    {
                                        if(rule10=='tidak merokok')
                                        {
                                            prediksi = 'tidak stroke'
                                            screen.value = prediksi
                                        } else
                                        {
                                            if(rule10=='merokok')
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule10=='pernah merokok')
                                                {
                                                    if(rule5==1)
                                                    {
                                                        prediksi = 'stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule5==0)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else
                            {
                                if(rule7=='perkotaan')
                                {
                                    if(rule9=='normal')
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule9=='obesitas')
                                        {
                                            if(rule3==1)
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule3==0)
                                                {
                                                    if(rule10=='tidak merokok')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule10=='merokok')
                                                        {
                                                            prediksi = 'stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule10=='pernah merokok')
                                                            {
                                                                if(rule8==0)
                                                                {
                                                                    prediksi = 'stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule8==1)
                                                                    {
                                                                        if(rule1=='perempuan')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule1=='laki-laki')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else
                        {
                            if(rule6=='wiraswasta')
                            {
                                if(rule10=='tidak merokok')
                                {
                                    prediksi = 'tidak stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule10=='pernah merokok')
                                    {
                                        if(rule5==0)
                                        {
                                            if(rule1=='perempuan')
                                            {
                                                prediksi = 'stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule1=='laki-laki')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                }
                                            }
                                        } else
                                        {
                                            if(rule5==1)
                                            {
                                                if(rule9=='normal')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule9=='obesitas')
                                                    {
                                                        if(rule8==1)
                                                        {
                                                            if(rule7=='pedesaan')
                                                            {
                                                                prediksi = 'tidak stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule7=='perkotaan')
                                                                {
                                                                    prediksi = 'stroke'
                                                                    screen.value = prediksi
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if(rule8==0)
                                                            {
                                                                if(rule7=='perkotaan')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule7=='pedesaan')
                                                                    {
                                                                        if(rule3==0)
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule3==1)
                                                                            {
                                                                                if(rule1=='perempuan')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule1=='laki-laki')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }            
                                                }
                                            }
                                        }
                                    } else
                                    {
                                        if(rule10=='merokok')
                                        {
                                            if(rule7=='pedesaan')
                                            {
                                                if(rule1=='perempuan')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule1=='laki-laki')
                                                    {
                                                        if(rule9=='normal')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule9=='obesitas')
                                                            {
                                                                prediksi = 'stroke'
                                                                screen.value = prediksi
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if(rule7=='perkotaan')
                                                {
                                                    if(rule8==0)
                                                    {
                                                        prediksi = 'stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule8==1)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else
    {
        if (rule4==0)
        {
            
        }
    }
            
}