import readlineSync from 'readline-sync';

export default () => {
    console.log('\nWelcome to the Brain Games!\n');
    const userName =  readlineSync.question ('May I have your name? ');
    if (userName) return console.log(`\nHello, ${userName}!`);
};

