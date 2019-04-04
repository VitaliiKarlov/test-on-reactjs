import React, { Component } from "react";

class CheckboxGroup extends Component {
  state = {
    selected: []
  };

  checkboxSelected = e => {
    //получаем значение чекбокса
    const value = e.target.value;
    this.setState(({ selected }) => {
      //копируем массив из стейта в новый массив
      const newSelected = [...selected];
      //проверяем новый массив на наличие значения чекбокса
      const id = newSelected.indexOf(value);
      /*если значение не найдено, добавляем его в массив,
        если найдено, удаляем*/
      if (id === -1) {
        newSelected.push(value);
      } else {
        newSelected.splice(id, 1);
      }
      //отпавляем новый массив в родительский элемент
      this.props.onRadioChange(newSelected);
      //записываем в стейт новый массив(обновляем состояние)
      return {
        selected: newSelected
      };
    });
  };

  render() {
    const {
      question: { answer, type, title },
      nextQuestion
    } = this.props;

    const checkbox = answer.map((el, i) => {
      return (
        <div className="form-check" key={el}>
          <label>
            <input
              className="form-check-input"
              type={type}
              value={el}
              onChange={this.checkboxSelected}
            />
            {el}
          </label>
        </div>
      );
    });

    return (
      <div className="alert alert-secondary">
        <h2>{title}</h2>
        <hr />
        {checkbox}
        <hr />
        <button disabled={this.state.selected.length <= 0} className="btn btn-primary" onClick={nextQuestion}>
          Далее
        </button>
      </div>
    );
  }
}

export default CheckboxGroup;
