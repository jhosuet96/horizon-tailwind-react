import { useState } from "react";

export const useForm = (initialForm, validateForm, SendData) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChangeDate = (date, name) => {

    setForm({
      ...form,
      [name]: date,
    });
  };

  const handleChangeChecked = (e) => {
    const { name, checked } = e.target;

    setForm({
      ...form,
      [name]: checked,
    });
  };

  const onAmountChange = (e) => {
    const { name, value } = e.target;

    if (!value || value.match(/^\d{1,}(\.\d{0,3})?$/)) {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleBlur = (e) => {
    handleChange(e);
  };
  const handleReset = (e) => {
    setForm(initialForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let errs = validateForm(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const CommitData = async (form) => {
        SendData(form);
      };

      CommitData().then(() => {
        handleReset();
      });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleChangeChecked,
    handleBlur,
    handleSubmit,
    handleChangeDate,
    onAmountChange
  };
};
