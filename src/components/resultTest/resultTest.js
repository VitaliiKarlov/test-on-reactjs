import React, { Component } from "react";

class ResultTest extends Component {

  render() {

    const {questions, answers} = this.props;

    const arrayQuestionsGood = questions.map(el => {
      return el.good;
    });

    const result = arrayQuestionsGood.map((el, i) => {
      if(typeof el === 'object') {
        let a;
        let b;
        el.forEach((el, j) => {

          if(j === 0) {
            a =  el;
          } else {
            a += ', ' + el;
          }

        answers[i].forEach((el, j) => {
          if(j === 0) {
            b =  el;
          } else {
            b += ', ' + el;
          }
        })
          
        });
        return (
          <tr key={el}>
            <td scope="row">{questions[i].title}</td>
            <td>{b}</td>
            <td>{a}</td>
          </tr>
        )
      }
      return (
        <tr key={el}>
          <td scope="row">{questions[i].title}</td>
          <td>{answers[i]}</td>
          <td>{el}</td>
        </tr>
      )
    });

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Вопрос</th>
            <th scope="col">Ответ</th>
            <th scope="col">Правильные ответ</th>
          </tr>
        </thead>
        <tbody>
          {result}
        </tbody>
      </table>
    );
  }
}

export default ResultTest;
