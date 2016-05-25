var names = ['Phil', 'Molly', 'Stan', 'Pete', 'Ali', 'Penny'];

//names.forEach((name) => {console.log('one name is ', name)});

//names.forEach((name) => console.log(name));

names.forEach((name) => {
    name = name + ' loves spagetthi and meatballs';
    console.log(name);

});

var returnMe = (oneName) => oneName + '!';
console.log(returnMe('Phil'));

