const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const miles = +gets();

const milesToMeters = (value) => {
    // mi * 1609.334 = m;
    return value * 1609;
};
print(milesToMeters(miles));
