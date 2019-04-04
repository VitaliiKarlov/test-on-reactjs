import React, { Component } from "react";

class RadioGroup extends Component {
  state = {
    selected: ""
  };

  radioSelected = e => {
    //Получаем значение радиокнопки
    const value = e.target.value;
    this.setState(() => {
      const newSelected = value;
      //отправляем значение радиокнопки в родительский компонент
      this.props.onRadioChange(newSelected);
      //обновляем стейт
      return {
        selected: value
      };
    });
  };

  render() {
    const { question, nextQuestion } = this.props;

    const radio = question.answer.map(el => {
      return (
        <div className="form-check" key={el}>
          <label>
            <input
              className="form-check-input"
              type={question.type}
              name="random"
              value={el}
              onChange={this.radioSelected}
            />
            {el}
          </label>
        </div>
      );
    });

    return (
      <div className="alert alert-secondary">
        <h2>{question.title}</h2>
        <hr />
        {radio}
        <hr />
        <button disabled={this.state.selected === ""} className="btn btn-primary" onClick={nextQuestion}>
          Далее
        </button>
      </div>
    );
  }
}

export default RadioGroup;
