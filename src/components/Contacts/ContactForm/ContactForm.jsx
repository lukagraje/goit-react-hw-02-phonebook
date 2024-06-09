import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./contacs.module.scss";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: "", number: "" });
  };

  render() {
    const nameId = nanoid();
    const numId = nanoid();

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor={numId}>Phone number</label>
        <input
          id={numId}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
