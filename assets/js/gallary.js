 // Количество изображений, которые вы хотите добавить
 const numberOfImages = 18; // Измените это на количество изображений, которое у вас есть

 // Получаем элемент <ul>, в который мы будем добавлять изображения
 const imageList = document.getElementById('imageList');

 // Цикл для добавления изображений в список
 for (let i = 1; i <= numberOfImages; i++) {
     // Создаем новый элемент <li> для каждого изображения
     const li = document.createElement('li');
     li.className = 'result';

     // Создаем элемент <a> для каждого изображения
     const a = document.createElement('a');
     a.href = `photo_${i}.jpg`;

     // Создаем элемент <img> для каждого изображения
     const img = document.createElement('img');
     img.src = `assets/img/photo_${i}.jpg`;
     img.width = 500;
     img.height = 500;
     img.alt = `Photo ${i}`;

     // Добавляем элемент <img> в элемент <a>
     a.appendChild(img);

     // Добавляем элемент <a> в элемент <li>
     li.appendChild(a);

     // Добавляем элемент <li> в список <ul>
     imageList.appendChild(li);
 }