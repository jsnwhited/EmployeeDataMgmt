$(placeholder).on('click', function(){
    database.ref().push({
    name:$(name).val().trim(),
    role:$(role).val().trim(),
    startdate: $(startdate).val().trim(),
    monthlyrate: $(monthlyrate).val().trim()
})})

database.ref().on('value', function(snapshot){
    var query = firebase.database().ref('users');
    query.once('value')
        .then(function(snapshot){
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
            })})})