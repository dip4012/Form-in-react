import { useRef, useState } from "react"
import "./App.css"

const initialFormValue = {
	firstName: "",
	lastName: "",
	email: "",
	contact: "",
	gender: "",
	resume: "",
	url: "",
	role: "",
	about: "",
}

function App() {
	const [formState, setFormState] = useState(initialFormValue)
	const formCvRef = useRef<HTMLInputElement>(null)

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value, type, files } = e.target as HTMLInputElement
		setFormState((prev) => ({
			...prev,
			[name]: type === "file" ? (files && files[0] ? files[0].name : "") : value,
		}))
	}

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()

		console.log("Form output: ", formState)

		setFormState(initialFormValue)
		if (formCvRef.current && formCvRef.current.value) {
			formCvRef.current.value = ""
		}
	}

	const handleReset = () => {
		setFormState(initialFormValue)
		if (formCvRef.current && formCvRef.current.value) {
			formCvRef.current.value = ""
		}
	}

	return (
		<section className="formSection">
			<h2>Form in react</h2>
			<form onSubmit={handleSubmit} onReset={handleReset}>
				<div className="formFieldGroup">
					<div className="formField">
						<label htmlFor="firstName" className="formFieldLabel">
							First Name*
						</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							className="formFieldInput"
							aria-required
							value={formState.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="formField">
						<label htmlFor="lastName" className="formFieldLabel">
							Last Name*
						</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							className="formFieldInput"
							aria-required
							value={formState.lastName}
							onChange={handleChange}
						/>
					</div>
					<div className="formField">
						<label htmlFor="email" className="formFieldLabel">
							Email*
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="formFieldInput"
							aria-required
							value={formState.email}
							onChange={handleChange}
						/>
					</div>
					<div className="formField">
						<label htmlFor="contact" className="formFieldLabel">
							Contact*
						</label>
						<input
							type="tel"
							name="contact"
							id="contact"
							className="formFieldInput"
							aria-required
							value={formState.contact}
							onChange={handleChange}
						/>
					</div>
					<div className="formField">
						<label htmlFor="gender" className="formFieldLabel">
							Gender*
						</label>
						<div className="formFieldInput formFieldInputRadioGroup">
							<div className="formFieldInputRadioItem">
								<input
									type="radio"
									id="male"
									name="gender"
									value="male"
									className="formFieldIputRadioOption"
									checked={formState.gender === "male"}
									onChange={handleChange}
								/>
								<label htmlFor="male" className="formFieldInputOptionLabel">
									Male
								</label>
							</div>
							<div className="formFieldInputRadioItem">
								<input
									type="radio"
									id="female"
									name="gender"
									value="female"
									className="formFieldInputRadioOption"
									checked={formState.gender === "female"}
									onChange={handleChange}
								/>
								<label htmlFor="female" className="formFieldInputOptionLabel">
									Female
								</label>
							</div>
						</div>
					</div>
					<div className="formField">
						<label htmlFor="resume" className="formFieldLabel">
							Upload Resume*
						</label>
						<input
							type="file"
							name="resume"
							id="resume"
							className="formFieldInput"
							aria-required
							onChange={handleChange}
							ref={formCvRef}
						/>
					</div>
					<div className="formField">
						<label htmlFor="url" className="formFieldLabel">
							URL*
						</label>
						<input
							type="url"
							name="url"
							id="url"
							className="formFieldInput"
							aria-required
							value={formState.url}
							onChange={handleChange}
						/>
					</div>
					<div className="formField">
						<label htmlFor="role" className="formFieldLabel">
							Role Interested In
						</label>
						<select
							name="role"
							id="role"
							className="formFieldInput"
							value={formState.role}
							onChange={handleChange}
						>
							<option value="">Select a role</option>
							<option value="frontend">Frontend Developer</option>
							<option value="backend">Backend Developer</option>
							<option value="fullstack">Fullstack Developer</option>
						</select>
					</div>
					<div className="formField">
						<label htmlFor="about" className="formFieldLabel">
							About
						</label>
						<textarea
							name="about"
							id="about"
							className="formFieldInput"
							value={formState.about}
							onChange={handleChange}
						></textarea>
					</div>
				</div>

				<div className="formActionButtons">
					<button type="reset" className="button">
						Reset
					</button>
					<button type="submit" className="button buttonPrimary">
						Submit
					</button>
				</div>
			</form>
		</section>
	)
}

export default App
