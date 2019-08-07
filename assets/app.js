var firebaseConfig = {
    apiKey: "AIzaSyCi_R-FTtu6o7UHuZ0pqlYex6jL55394Jw",
    authDomain: "employee-unc-ex-17.firebaseapp.com",
    databaseURL: "https://employee-unc-ex-17.firebaseio.com",
    projectId: "employee-unc-ex-17",
    storageBucket: "",
    messagingSenderId: "492632612991",
    appId: "1:492632612991:web:1ca163027c7fdb80"
  };

firebase.initializeApp(firebaseConfig)

var database = firebase.database()

$('#submit').on('click', function(){
    console.log('click')
    database.ref().push({
    name:$('#name-input').val().trim(),
    role:$('#role-input').val().trim(),
    startdate: $('#date-input').val().trim(),
    monthlyrate: $('#rate-input').val().trim()
})})

// database.ref().on('value', function(snapshot){
//     var query = firebase.database().ref('users');
//     query.once('value')
//         .then(function(snapshot){
//             snapshot.forEach(function(childSnapshot) {
//                 var key = childSnapshot.key;
//                 var childData = childSnapshot.val();
//             })})})