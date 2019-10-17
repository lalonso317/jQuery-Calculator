$(document).ready(function() {
    var num1 = ""
    var oper = ""
    var num2 = ""
    $('#calculator').on('click','button', function(e){    
        var val = $(this).html()

        if (val === '='){ 
            if (oper === '+'){
                $('#result').html(Number(num1) + Number(num2))
            } else if (oper === '-'){
                $('#result').html(Number(num1) - Number(num2))
            } else if (oper === '*'){
                $('#result').html(Number(num1) * Number(num2))
            } else if (oper === '/'){
                $('#result').html(Number(num1) / Number(num2)) 
            }    
            }else if (val === '*' || val === '+' || val === '-' || val === '/'){
            oper = val
        } else if (val === 'C'){
            num1 = ''
            oper = ''
            num2 = ''
            $('#result').html('')  
        } else{
            if(oper === ''){
                num1 += val
                $('#result').html(num1)

            }else{
                num2 += val
                $('#result').html(num2)
            }            
        }
        console.log('num1:' + num1)
        console.log('oper:' + oper)
        console.log('num2:' + num2) 
    })
    })
    // $('.num').on('click',function(e){
    //     var currentval = $('#result').val()
    //     var val        = $(this).data('value')
    //     $('#result') = (currentval+val)
       
    //    $('').on('click',function(e){
    //        $('#result').val('')
    //    })
    //    $('#equal').on('click','button',function(e){
    //     var val = $("#result").var().split(' ')
    //     var result = ""
    //     if(val[1] == '/'){
    //         result = Number(val[0]) / Number(val[2]) 
    //     } else if(val[1] == '*'){
    //         result = Number(val[0]) *  Number(val[2])
    //     }else if(val[1] == '+'){
    //         result = Number(val[0]) +  Number(val[2])
    //     }else if(val[1] == '-'){
    //         result = Number(val[0]) -  Number(val[2])
    //     }
    //     $('#result') = val(result)
    // })