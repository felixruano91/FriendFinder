$('#submit').on('click', function(){
    let values = [];
    var name = $('#name').val();
    var photoUrl = $('#photo').val();
    for (let i = 1; i <= 10; i++) {
      if (!isNaN(parseInt($("#q" + i + " option:selected").attr('value'))))
      values.push(parseInt($("#q" + i + " option:selected").attr('value')));
    };
    if (values.length == 10 && name != "" && photoUrl != ""){
      console.log(values, name, photoUrl);
      $('#results-modal').modal('show');
    }else{
      console.log("not all values filled in");
    };
  
    
  })