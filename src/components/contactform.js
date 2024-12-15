const [form, setForm] = useState({
  firstName: '',
  lastName: '',
  email: '',
  comments: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', form);
};

