import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createBoard } from "../../actions/index";

class BoardForm extends React.Component {
  renderInput = formProps => {
    const { value, onChange } = formProps.input;
    const { error } = formProps.meta;
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input value={value} onChange={onChange} />
        <div>{error}</div>
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label={"Enter Title"}
        />
        <Field
          name="description"
          component={this.renderInput}
          label={"Enter Description"}
        />
        <button className="ui button">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  } else if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const formWrapped = reduxForm({ form: "boardCreate", validate })(BoardForm);

export default connect(
  null,
  { createBoard }
)(formWrapped);
