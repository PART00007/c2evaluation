document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2b2217fd3f784de26dd6a9de2b72e8dd')
                .then(response => response.json())
                .then(json => console.log(json))
        }
