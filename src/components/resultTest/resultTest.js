import React, { Component } from 'react';

class ResultTest extends Component {
  render() {
    const { questions, answers } = this.props;

    const arrayQuestionsGood = questions.map(el => {
      return el.good;
    });

    const result = arrayQuestionsGood.map((el, i) => {
      // если текущий элемент массива не примитивный тип
      if (typeof el === 'object') {
        let correctAnswerToString;
        let answerToString;
        // формируем строку из массива правильных отвтетов
        el.forEach((el, j) => {
          if (j === 0) {
            correctAnswerToString = el;
          } else {
            correctAnswerToString += ', ' + el;
          }

          // формируем строку из массива ответов пользователя
          answers[i].forEach((el, j) => {
            if (j === 0) {
              answerToString = el;
            } else {
              answerToString += ', ' + el;
            }
          });
        });
        return (
          <tr key={el}>
            <td scope="row">{questions[i].title}</td>
            <td>{answerToString}</td>
            <td>{correctAnswerToString}</td>
          </tr>
        );
      }
      return (
        <tr key={el}>
          <td scope="row">{questions[i].title}</td>
          <td>{answers[i]}</td>
          <td>{el}</td>
        </tr>
      );
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
        <tbody>{result}</tbody>
      </table>
    );
  }
}

export default ResultTest;
