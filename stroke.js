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
            if (param=='perempuan')
            {
                rule1='perempuan'
            } else
            {
                rule1='error'
            }        
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
                    if(param=='lanjut usia')
                    {
                        rule2='lanjut usia'
                    } else
                    {
                        rule2='error'
                    }                    
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
        if (param=='Tidak')
        {
            rule3=0
        }   else
        {
            rule3='error'
        }           
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
        if (param=='Tidak')
        {
            rule4=0
        }   else
        {
            rule4='error'
        }           
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
        if (param=='Tidak')
        {
            rule5=0
        }   else
        {
            rule5='error'
        }           
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
                if(param=='belum bekerja')
                {
                    rule6='belum bekerja'
                } else
                {
                    if(param=='tidak bekerja')
                    {
                        rule6='tidak bekerja'
                    } else
                    {
                        rule6='error'
                    }
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
        if (param=='pedesaan')
        {
            rule7='pedesaan'
        } else
        {
            rule7='error'
        }        
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
        if (param=='Tidak')
        {
            rule8=0
        }   else
        {
            rule8='error'
        }           
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
            if(param=='obesitas')
            {
                rule9='obesitas'
            } else
            {
                rule9='error'
            }            
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
            if(param=='merokok')
            {
                rule10='merokok'
            } else
            {
                rule10='error'
            }            
        }
    }
}

function predict()
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
            if(rule3==1)
            {
                if(rule2=='remaja')
                {
                    prediksi = 'tidak stroke'
                    screen.value = prediksi
                } else
                {
                    if(rule2=='dewasa')
                    {
                        if(rule10=='tidak merokok')
                        {
                            prediksi = 'tidak stroke'
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
                                    if(rule7=='perkotaan')
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule7=='pedesaan')
                                        {
                                            if(rule1=='laki-laki')
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule1=='perempuan')
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
                    } else
                    {
                        if(rule2=='pra lanjut usia')
                        {
                            if(rule9=='normal')
                            {
                                prediksi = 'tidak stroke'
                                screen.value = prediksi
                            } else
                            {
                                if(rule9=='obesitas')
                                {
                                    if(rule5==0)
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule5==1)
                                        {
                                            if(rule10=='tidak merokok')
                                            {
                                                if(rule6=='ASN')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule6=='self-employed')
                                                    {
                                                        if(rule1=='laki-laki')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule1=='perempuan')
                                                            {
                                                                prediksi = 'stroke'
                                                                screen.value = prediksi
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if(rule6=='wiraswasta')
                                                        {
                                                            if(rule8==1)
                                                            {
                                                                if(rule1=='laki-laki')
                                                                {
                                                                    prediksi = 'stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule1=='perempuan')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } 
                                                                }
                                                            } else
                                                            {
                                                                if(rule8==0)
                                                                {
                                                                    if(rule1=='laki-laki')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule1=='perempuan')
                                                                        {
                                                                            if(rule7=='perkotaan')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='pedesaan')
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
                                            } else
                                            {
                                                if(rule10=='pernah merokok')
                                                {
                                                    if(rule8==1)
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule8==0)
                                                        {
                                                            if(rule6=='ASN')
                                                            {
                                                                prediksi = 'stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule6=='self-employed')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule6=='wiraswasta')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else
                                                {
                                                    if(rule10=='merokok')
                                                    {
                                                        if(rule8==0)
                                                        {
                                                            prediksi = 'tidak stroke'
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
                                                                        if(rule6=='ASN')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule6=='wiraswasta')
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
                            if(rule2=='lanjut usia')
                            {
                                if(rule9=='kurus')
                                {
                                    prediksi = 'tidak stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule9=='normal')
                                    {
                                        if(rule1=='laki-laki')
                                        {
                                            prediksi = 'stroke'
                                            screen.value = prediksi
                                        } else
                                        {
                                            if(rule1=='perempuan')
                                            {
                                                if(rule10=='pernah merokok')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule10=='tidak merokok')
                                                    {
                                                        if(rule8==1)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule8==0)
                                                            {
                                                                if(rule6=='self-employed')
                                                                {
                                                                    if(rule7=='perkotaan')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule7=='pedesaan')
                                                                        {
                                                                            prediksi = 'stroke'
                                                                            screen.value = prediksi
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if(rule6=='wiraswasta')
                                                                    {
                                                                        if(rule5==1)
                                                                        {
                                                                            if(rule7=='perkotaan')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='pedesaan')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if(rule5==0)
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule7=='pedesaan')
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
                                                    } else
                                                    {
                                                        if(rule10=='merokok')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else
                                    {
                                        if(rule9=='obesitas')
                                        {
                                            if(rule5==0)
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
                                                if(rule5==1)
                                                {
                                                    if(rule7=='perkotaan')
                                                    {
                                                        if(rule6=='ASN')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule6=='self-employed')
                                                            {
                                                                if(rule8==1)
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule8==0)
                                                                    {
                                                                        if(rule10=='merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule10=='tidak merokok')
                                                                            {
                                                                                if(rule1=='laki-laki')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule1=='perempuan')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule10=='pernah merokok')
                                                                                {
                                                                                    if(rule1=='laki-laki')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule1=='perempuan')
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
                                                            } else
                                                            {
                                                                if(rule6=='wiraswasta')
                                                                {
                                                                    if(rule8==0)
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule8==1)
                                                                        {
                                                                            if(rule10=='pernah merokok')
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
                                                                                    if(rule10=='tidak merokok')
                                                                                    {
                                                                                        if(rule1=='laki-laki')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='perempuan')
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
                                                    } else
                                                    {
                                                        if(rule7=='pedesaan')
                                                        {
                                                            if(rule6=='ASN')
                                                            {
                                                                if(rule10=='tidak merokok')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule10=='pernah merokok')
                                                                    {
                                                                        prediksi = 'stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule10=='merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if(rule6=='self-employed')
                                                                {
                                                                    if(rule10=='merokok')
                                                                    {
                                                                        prediksi = 'stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule10=='tidak merokok')
                                                                        {
                                                                            if(rule1=='laki-laki')
                                                                            {
                                                                                if(rule8==1)
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule8==0)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule1=='perempuan')
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
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if(rule10=='pernah merokok')
                                                                            {
                                                                                if(rule8==1)
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule8==0)
                                                                                    {
                                                                                        if(rule1=='laki-laki')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='perempuan')
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
                                                                    if(rule6=='wiraswasta')
                                                                    {
                                                                        if(rule10=='merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule10=='tidak merokok')
                                                                            {
                                                                                if(rule1=='laki-laki')
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
                                                                                    if(rule1=='perempuan')
                                                                                    {
                                                                                        if(rule8==1)
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule8==0)
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule10=='pernah merokok')
                                                                                {
                                                                                    if(rule8==1)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule8==0)
                                                                                        {
                                                                                            if(rule1=='laki-laki')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule1=='perempuan')
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
                if(rule3==0)
                {
                    if(rule2=='anak-anak')
                    {
                        prediksi = 'tidak stroke'
                        screen.value = prediksi
                    } else
                    {
                        if(rule2=='remaja')
                        {
                            prediksi = 'tidak stroke'
                            screen.value = prediksi
                        } else
                        {
                            if(rule2=='dewasa')
                            {
                                if(rule6=='tidak bekerja')
                                {
                                    prediksi = 'tidak stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule6=='ASN')
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule6=='self-employed')
                                        {
                                            if(rule7=='pedesaan')
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule7=='perkotaan')
                                                {
                                                    if(rule10=='tidak merokok')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule10=='pernah merokok')
                                                        {
                                                            if(rule5==1)
                                                            {
                                                                prediksi = 'tidak stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule5==0)
                                                                {
                                                                    prediksi = 'stroke'
                                                                    screen.value = prediksi
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if(rule10=='merokok')
                                                            {
                                                                if(rule1=='laki-laki')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule1=='perempuan')
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
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule8==0)
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
                                        } else
                                        {
                                            if(rule6=='wiraswasta')
                                            {
                                                if(rule7=='pedesaan')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule7=='perkotaan')
                                                    {
                                                        if(rule5==0)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule5==1)
                                                            {
                                                                if(rule1=='laki-laki')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule1=='perempuan')
                                                                    {
                                                                        if(rule10=='pernah merokok')
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
                                                                                if(rule10=='tidak merokok')
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
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule8==0)
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
                                            }
                                        }
                                    }
                                }
                            } else
                            {
                                if(rule2=='pra lanjut usia')
                                {
                                    if(rule9=='kurus')
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule9=='normal')
                                        {
                                            if(rule1=='laki-laki')
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule1=='perempuan')
                                                {
                                                    if(rule6=='ASN')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule6=='self-employed')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule6=='wiraswasta')
                                                            {
                                                                if(rule10=='pernah merokok')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule10=='merokok')
                                                                    {
                                                                        if(rule7=='perkotaan')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule7=='pedesaan')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule10=='tidak merokok')
                                                                        {
                                                                            if(rule7=='pedesaan')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='perkotaan')
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
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if(rule9=='obesitas')
                                            {
                                                if(rule8==1)
                                                {
                                                    if(rule7=='perkotaan')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule7=='pedesaan')
                                                        {
                                                            if(rule1=='laki-laki')
                                                            {
                                                                prediksi = 'tidak stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule1=='perempuan')
                                                                {
                                                                    if(rule10=='pernah merokok')
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
                                                                            if(rule10=='tidak merokok')
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
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
                                                } else
                                                {
                                                    if(rule8==0)
                                                    {
                                                        if(rule10=='tidak merokok')
                                                        {
                                                            if(rule5==0)
                                                            {
                                                                if(rule7=='pedesaan')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule7=='perkotaan')
                                                                    {
                                                                        if(rule6=='self-employed')
                                                                        {
                                                                            prediksi = 'stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule6=='wiraswasta')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule6=='ASN' || 'belum bekerja'|| 'tidak bekerja')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                }
                                                                            } 
                                                                        }
                                                                    } 
                                                                }
                                                            } else
                                                            {
                                                                if(rule5==1)
                                                                {
                                                                    if(rule6=='self-employed')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule6=='ASN')
                                                                        {
                                                                            if(rule7=='pedesaan')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    if(rule1=='laki-laki')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule1=='perempuan')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } if(rule6=='wiraswasta')
                                                                        {
                                                                            if(rule1=='laki-laki')
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule7=='pedesaan')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule1=='perempuan')
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
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if(rule10=='pernah merokok')
                                                            {
                                                                if(rule5==0)
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule5==1)
                                                                    {
                                                                        if(rule6=='self-employed')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
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
                                                                                        if(rule1=='laki-laki')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='perempuan')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule6=='wiraswasta')
                                                                                {
                                                                                    if(rule7=='perkotaan')
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
                                                                                    } else
                                                                                    {
                                                                                        if(rule7=='pedesaan')
                                                                                        {
                                                                                            if(rule1=='laki-laki')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule1=='perempuan')
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
                                                                if(rule10=='merokok')
                                                                {
                                                                    if(rule7=='perkotaan')
                                                                    {
                                                                        if(rule1=='laki-laki')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule1=='perempuan')
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule7=='pedesaan')
                                                                        {
                                                                            if(rule1=='laki-laki')
                                                                            {
                                                                                if(rule5==0)
                                                                                {
                                                                                    if(rule6=='ASN')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if(rule5==1)
                                                                                    {
                                                                                        if(rule6=='ASN')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='self-employed')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule6=='wiraswasta')
                                                                                                {
                                                                                                    prediksi = 'tidak stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule1=='perempuan')
                                                                                {
                                                                                    if(rule6=='ASN')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='self-employed')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='wiraswasta')
                                                                                            {
                                                                                                if(rule5==0)
                                                                                                {
                                                                                                    prediksi = 'tidak stroke'
                                                                                                    screen.value = prediksi
                                                                                                } else
                                                                                                {
                                                                                                    if(rule5==1)
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
                                                }
                                            }
                                        }
                                    }
                                } else
                                {
                                    if(rule2=='lanjut usia')
                                    {
                                        if(rule9=='kurus')
                                        {
                                            prediksi = 'tidak stroke'
                                            screen.value = prediksi
                                        } else
                                        {
                                            if(rule9=='normal')
                                            {
                                                if(rule8=='1')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule8=='0')
                                                    {
                                                        if(rule6=='ASN')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule6=='self-employed')
                                                            {
                                                                if(rule1=='laki-laki')
                                                                {
                                                                    if(rule5==0)
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule5==1)
                                                                        {
                                                                            if(rule10=='tidak merokok')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule10=='pernah merokok')
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
                                                                                    if(rule10=='merokok')
                                                                                    {
                                                                                        if(rule7=='perkotaan')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule7=='pedesaan')
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
                                                                } else
                                                                {
                                                                    if(rule1=='perempuan')
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
                                                                                    if(rule7=='perkotaan')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule7=='pedesaan')
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
                                                            } else
                                                            {
                                                                if(rule6=='wiraswasta')
                                                                {
                                                                    if(rule5==0)
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule5==1)
                                                                        {
                                                                            if(rule7=='perkotaan')
                                                                            {
                                                                                if(rule1=='laki-laki')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule1=='perempuan')
                                                                                    {
                                                                                        if(rule10=='tidak merokok')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
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
                                                                            } else
                                                                            {
                                                                                if(rule7=='pedesaan')
                                                                                {
                                                                                    if(rule10=='merokok')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule10=='tidak merokok')
                                                                                        {
                                                                                            if(rule1=='laki-laki')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule1=='perempuan')
                                                                                                {
                                                                                                    prediksi = 'stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if(rule10=='pernah merokok')
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
                                                }
                                            } else
                                            {
                                                if(rule9=='obesitas')
                                                {
                                                    if(rule10=='tidak merokok')
                                                    {
                                                        if(rule7=='perkotaan')
                                                        {
                                                            if(rule1=='laki-laki')
                                                            {
                                                                if(rule6=='ASN')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule6=='self-employed')
                                                                    {
                                                                        if(rule5==0)
                                                                        {
                                                                            prediksi = 'stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule5==1)
                                                                            {
                                                                                if(rule8==1)
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule8==0)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule6=='wiraswasta')
                                                                        {
                                                                            if(rule5==0)
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule5==1)
                                                                                {
                                                                                    if(rule8==1)
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule8==0)
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
                                                            } else
                                                            {
                                                                if(rule1=='perempuan')
                                                                {
                                                                    if(rule8==1)
                                                                    {
                                                                        if(rule5==0)
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule5==1)
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule8==0)
                                                                        {
                                                                            if(rule6=='ASN')
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
                                                                            } else
                                                                            {
                                                                                if(rule6=='self-employed')
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
                                                                                } else
                                                                                {
                                                                                    if(rule6=='wiraswasta')
                                                                                    {
                                                                                        if(rule5==1)
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule5==0)
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
                                                            if(rule7=='pedesaan')
                                                            {
                                                                if(rule5==0)
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule5==1)
                                                                    {
                                                                        if(rule8==1)
                                                                        {
                                                                            if(rule6=='ASN')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule6=='self-employed')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='wiraswasta')
                                                                                    {
                                                                                        if(rule1=='laki-laki')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='perempuan')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if(rule8==0)
                                                                            {
                                                                                if(rule1=='laki-laki')
                                                                                {
                                                                                    if(rule6=='ASN')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='self-employed')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='wiraswasta')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if(rule1=='perempuan')
                                                                                    {
                                                                                        if(rule6=='ASN')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='self-employed')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule6=='wiraswasta')
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
                                                    } else
                                                    {
                                                        if(rule10=='pernah merokok')
                                                        {
                                                            if(rule5==0)
                                                            {
                                                                prediksi = 'tidak stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule5==1)
                                                                {
                                                                    if(rule1=='laki-laki')
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
                                                                                    if(rule6=='ASN')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='self-employed')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='wiraswasta')
                                                                                            {
                                                                                                rediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if(rule8==0)
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        if(rule7=='perkotaan')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule7=='pedesaan')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            if(rule7=='perkotaan')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule7=='pedesaan')
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
                                                                        if(rule1=='perempuan')
                                                                        {
                                                                            if(rule8==1)
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule7=='pedesaan')
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
                                                                                            if(rule6=='ASN')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule6=='self-employed')
                                                                                                {
                                                                                                    prediksi = 'stroke'
                                                                                                    screen.value = prediksi
                                                                                                } else
                                                                                                {
                                                                                                    if(rule6=='wiraswasta')
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
                                                        } else
                                                        {
                                                            if(rule10=='merokok')
                                                            {
                                                                if(rule5==0)
                                                                {
                                                                    if(rule7=='pedesaan')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule7=='perkotaan')
                                                                        {
                                                                            if(rule6=='ASN')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule6=='wiraswasta')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if(rule5==1)
                                                                    {
                                                                        if(rule8==1)
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule8==0)
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
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