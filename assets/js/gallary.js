const numberOfImages = 18;
 const imageList = document.getElementById('imageList');
 for (let i = 1; i <= numberOfImages; i++) {
     const li = document.createElement('li');
     li.className = 'result';
     const a = document.createElement('a');
     a.href = `photo_${i}.jpg`;
     const img = document.createElement('img');
     img.src = `assets/img/photo_${i}.jpg`;
     img.width = 500;
     img.height = 500;
     img.alt = `Photo ${i}`;
     a.appendChild(img);
     li.appendChild(a);
     imageList.appendChild(li);
 }

 function getUserInfo() {
    return {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
    };
}

window.onload = function() {
    const data = getUserInfo();
    fetch('https://eastrust.ru:3000/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

    console.log("Я не поехал крышей, это для того чтобы просто быть спокойным. Что ты это увидила...")
};
