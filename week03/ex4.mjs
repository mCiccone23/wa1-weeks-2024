import { rejects } from 'assert';
import dayjs from 'dayjs';
import { resolve } from 'path';

import sqlite from 'sqlite3'

const db = new sqlite.Database('./questions.sqlite', (err) => {if(err) throw err})

function Answer(id, text, email, date, score = 0) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.score = score;
    this.date = dayjs(date);
  
    this.toString = () => {
      return `${this.email} replied '${this.text}' on ${this.date.format('YYYY-MM-DD')} and got a score of ${this.score}`;
    }
  }

  function Question(id, text, email, date) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.date = dayjs(date);
  
    this.toString = () => {
      return `Question '${this.text}' asked by ${this.email} on ${this.date.format('YYYY-MM-DD')}.`;
    }
  }  

  function QuestionList() {
    this.getQuestion = (questionId) => {
        return new Promise((resolve, reject)=>{
          const sql = 'SELECT q.id, q.text, u.email, q.date FROM question q, user u WHERE q.id = ? and q.authorId = u.id'
          
          db.get(sql, [questionId], (err, row) =>{
            if(err) reject(err) 
            else resolve(new Question(row.id, row.text, row.email, dayjs(row.date))) 
          })
        })
    }

    this.addQuestion() = (q) => {
      const sql = 'INSERT INTO question(id, text, authorId, date) values (?, ?, ?, ?)'

      this.convertEmailtoId().then((authorId) => Promise // da finire)
      return new Promise((resolve, reject) => {

        db.run(sql, [q.id, q.text, authorId, q.date.format('YYYY-MM-DD')], (err, row) =>{
          if(err) reject(err)
          else resolve()
        })
      })
    }
  }

const qlist = new QuestionList()
const q1 = qlist.getQuestion(1)
q1.then((q) => {console.log(q.toString())})
qlist.addQuestion(q2)