// #awLXL6TBzg
// З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги if перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 },
];

if (coursesAndDurationArray[0].monthDuration > 5) console.log(`Супер! Курс: ${coursesAndDurationArray[0].title}`);
if (coursesAndDurationArray[1].monthDuration > 5) console.log(`Супер! Курс: ${coursesAndDurationArray[1].title}`);
if (coursesAndDurationArray[2].monthDuration > 5) console.log(`Супер! Курс: ${coursesAndDurationArray[2].title}`);
if (coursesAndDurationArray[3].monthDuration > 5) console.log(`Супер! Курс: ${coursesAndDurationArray[3].title}`);
if (coursesAndDurationArray[4].monthDuration > 5) console.log(`Супер! Курс: ${coursesAndDurationArray[4].title}`);
if (coursesAndDurationArray[5].monthDuration > 5) console.log(`Супер! Курс: ${coursesAndDurationArray[5].title}`);

