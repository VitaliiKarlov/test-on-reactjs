import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import questions from "../src/question/question";

import CheckboxGroup from "../src/components/CheckboxGroup";
import RadioGroup from "../src/components/radioGroup";
import ResultTest from "../src/components/resultTest";

import "./styles.css";

class App extends Component {
  state = {
    questions,
    currentIndex: 0,
    answers: [],

    toggle: true,
    index: 0,
    disabled: false
  };

  /*
  onToggle = () => {
    setTimeout(() => {
      this.setState(prevState => {
        return {
          disabled: !prevState.disabled
        };
      });
    }, 1000);
    this.setState({
      toggle: !this.state.toggle,
      index: Math.random(),
      disabled: !this.state.disabled,
      currentIndex: ++this.state.currentIndex
    });
  };
  */

  onRadioChange = val => {
    //принимаем значение от ребенка
    const value = val;
    this.setState(({ answers, currentIndex }) => {
      //создаем новый массив из стейта
      const newAnswers = [...answers];
      //записываем значение в новый массив
      newAnswers.splice(currentIndex, 1, value);
      //обновляем состояние
      return {
        answers: newAnswers
      };
    });
  };

  nextQuestion = () => {
    this.setState(prevState => {
      let newCurrentIndex = prevState.currentIndex;
      /*
      if (newCurrentIndex >= questions.length - 1) {
        newCurrentIndex = -1;
      }
      */
      return {
        currentIndex: (newCurrentIndex += 1)
      };
    });
  };

  render() {
    const { questions, currentIndex, answers } = this.state;

    const propsToComponentQuestion = {
      question: questions[currentIndex],
      onRadioChange: this.onRadioChange,
      nextQuestion: this.nextQuestion
    };

    const propsToResult = {
      answers,
      questions
    };

    let content;

    if (currentIndex >= questions.length) {
      content = <ResultTest {...propsToResult} />;
    } else if (questions[currentIndex].type === "radio") {
      content = <RadioGroup {...propsToComponentQuestion} />;
    } else if (questions[currentIndex].type === "checkbox") {
      content = <CheckboxGroup {...propsToComponentQuestion} />;
    } else {
      content = <div>fenita lya comedia</div>;
    }

    /*
    const com1 =
      questions[currentIndex].type === "radio" ? (
        <RadioGroup {...prop} />
      ) : (
        <CheckboxGroup {...prop} />
      );
    */

    return (
      <>
        <div className="App container">
          <TransitionGroup>
            <CSSTransition
              key={this.state.currentIndex}
              timeout={1000}
              classNames="fade"
            >
              {content}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
