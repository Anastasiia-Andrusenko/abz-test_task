import { useState } from 'react';
import css from './SignUpForm.module.scss';
import Button from '../Button/Button';
import truncateText from 'src/utils/truncateText';

const SignUpForm = ({ positions, onRegister }) => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		position_id: '',
		photo: null,
		errors: {},
	});

	//---------------- Email pattern RFC2822
	const emailPattern =
		// eslint-disable-next-line no-control-regex
		/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

	const validateInput = (name, value) => {
		let error = '';
		switch (name) {
			case 'name':
				if (value.length < 3 || value.length > 60) {
					error = 'Name must be between 3 and 60 characters';
				}
				break;
			case 'email':
				if (!emailPattern.test(value)) {
					error = 'Invalid email address';
				}
				break;
			case 'phone':
				const phoneRegex = /^\+380\d{9}$/;
				if (!phoneRegex.test(value)) {
					error = 'Phone number must start with +380 and be 12 digits long';
				}
				break;
			case 'photo':
				if (!value) {
					error = 'Photo is required';
				} else if (value.size > 5 * 1024 * 1024) {
					error = 'Photo size must not exceed 5MB';
				} else if (!['image/jpeg', 'image/jpg'].includes(value.type)) {
					error = 'Photo must be in JPEG or JPG format';
				}
				break;

			default:
				break;
		}
		return error;
	};

	const handleChange = e => {
		const { name, value } = e.target;
		let formattedValue = value;

		if (name === 'email') {
			formattedValue = value.toLowerCase();
		}

		const error = validateInput(name, value);
		setForm(prevForm => ({
			...prevForm,
			[name]: formattedValue.trim(),
			errors: {
				...prevForm.errors,
				[name]: error,
			},
		}));
	};

	const handleFileChange = e => {
		const file = e.target.files[0];
		const error = validateInput('photo', file);
		setForm(prevForm => ({
			...prevForm,
			photo: e.target.files[0],
			errors: {
				...prevForm.errors,
				photo: error,
			},
		}));
	};

  const handlePositionChange = e => {
    const { value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      position_id: value,
    }));
  };


	const handleSubmit = async e => {
		e.preventDefault();

		const errors = {};
		Object.keys(form).forEach(key => {
			if (key !== 'photo' && key !== 'errors') {
				const error = validateInput(key, form[key]);
				if (error) {
					errors[key] = error;
				}
			}
		});

		if (Object.keys(errors).length > 0) {
			setForm(prevForm => ({
				...prevForm,
				errors,
			}));
			return;
		};

	const isRegistered = await onRegister(form);
    if (isRegistered) {
      resetForm();
    };
	};

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      position_id: '',
      photo: null,
      errors: {},
    });
  };

	return (
		<>
			<form className={css.form} onSubmit={handleSubmit}>
				<div className={css.inputGroup}>
					<label className={css.label}>Your name</label>
					<input
						className={css.input}
						type="text"
						name="name"
						placeholder="Your name"
						value={form.name}
						onChange={handleChange}
						required
					/>
					{form.errors.name ? (
						<span className={css.errorText}>{form.errors.name}</span>
					) : (
						<span className={css.helperText}>Please enter user name</span>
					)}
				</div>
				<div className={css.inputGroup}>
					<label className={css.label}>Email</label>
					<input
						className={css.input}
						type="email"
						name="email"
						placeholder="Email"
						value={form.email}
						onChange={handleChange}
						required
					/>
					{form.errors.email ? (
						<span className={css.errorText}>{form.errors.email}</span>
					) : (
						<span className={css.helperText}>Please enter your email</span>
					)}
				</div>
				<div className={css.inputGroup}>
					<label className={css.label}>Phone</label>
					<input
						className={css.input}
						type="tel"
						name="phone"
						placeholder="Phone"
						value={form.phone}
						onChange={handleChange}
						required
					/>
					{form.errors.phone ? (
						<span className={css.errorText}>{form.errors.phone}</span>
					) : (
						<span className={css.helperText}>
							Please enter your phone number
						</span>
					)}
				</div>
				<div className={css.positionsWrapper}>
					<p className={css.positionsTitle}>Select your position</p>
					<ul className={css.positionList}>
						{positions.map(position => (
							<li key={position.id} className={css.positionItem}>
								<label className={css.positionName}>
									<input
										type="radio"
										name="position_id"
										value={position.id}
										onChange={handlePositionChange}
										required
										className={css.radioBtn}
                    checked={form.position_id === String(position.id)}
                    // checked={form.position_id === position.id}
                    tabIndex="0"
									/>
									<span className={css.customRadioBtn} />
									{position.name}
								</label>
							</li>
						))}
					</ul>
				</div>
				<div className={css.inputGroup}>
					<div
						className={`${css.fileInputWrapper} ${
							form.errors.photo ? css.error : ''
						}`}
					>
						<label
							className={`${
								form.errors.photo ? css.fileInputButtonErr : css.fileInputButton
							}`}
							htmlFor="fileInput"
						>
							Upload
						</label>
						<span className={css.customInput}>
							{form.photo ? (
								<p className={css.selectedFile}>
									{truncateText(form.photo.name, 24)}
								</p>
							) : (
								`Upload your photo`
							)}
						</span>
						<input
							id="fileInput"
							className={css.fileInputField}
							type="file"
							onChange={handleFileChange}
							required
						/>
					</div>
					{form.errors.photo ? (
						<span className={css.errorText}>{form.errors.photo}</span>
					) : (
						''
					)}
				</div>
				<Button
					type="submit"
					text="Sign up"
					disabled={
						!form.name || !form.email || !form.phone || !form.position_id
					}
				/>
			</form>
		</>
	);
};

export default SignUpForm;