import dayjs from 'dayjs';


function Answer(response, user, score, date){
    this.response = response;
    this.user = user;
    this.score = score;
    this.date = date;

    this.voteUp = () => {this.score++;} // in questo modo creiamo una proprieta, come un metodo
}

const a1 = new Answer('Yes', 'fulvio', 5, "2024-04-12"); 
console.log(a1);
a1.voteUp();
console.log(a1);


function Question(text, user, date){
    this.text = text;
    this.user = user;
    this.date = date;
    this.answer = [];

    this.add = (ans) => {this.answer.push(ans)};
    this.find = (user) => {this.answer.filter(a => a.user === user)}; 
    this.afterDate = (date) => {this.answer.filter(a => a.date.isAfter(dayjs(date)))};
    this.listByDate = () => {
        
        const b =[...this.answer];
        b.sort((a, b) => {
            if(a.date.isBefore(b.date))
                return -1;
            else if(a.date.isAfter(b.date))
                return 1;
            else 
                return 0;

        });
    };
}


const q1 = new Question('Sei felice', "fulvio", "2024-03-12");
console.log(q1);
q1.add(a1);


console.log(q1);
q1.find("fulvio");
