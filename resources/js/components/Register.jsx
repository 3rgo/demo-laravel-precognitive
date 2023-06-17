import React, { useEffect, useState } from "react";
import { useForm } from "laravel-precognition-react";
import clsx from "clsx";

function Register() {
    const [users, setUsers] = useState([]);

    const form = useForm("post", "/api/register", {
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        form.submit();
    };

    useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            });
    }, []);

    return (
        <div className="row">
            <div className="col">
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <main className="form-signin w-25 m-auto">
                        <div className="mb-3 d-flex flex-column justify-content-center align-items-center">
                            <img
                                className="mb-4"
                                src="https://3rgo.tech/logo.png"
                                alt=""
                                height="72"
                            />
                            <h1 className="h3 fw-normal">
                                {" "}
                                Create an account{" "}
                            </h1>
                        </div>
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={form.data.email}
                                    className={clsx(
                                        "form-control",
                                        form.invalid("email") && "is-invalid",
                                        form.valid("email") && "is-valid"
                                    )}
                                    onChange={(e) =>
                                        form.setData("email", e.target.value)
                                    }
                                    onBlur={() => form.validate("email")}
                                    aria-describedby="emailValidation"
                                />
                                <div
                                    id="emailValidation"
                                    class="invalid-feedback"
                                >
                                    {form.invalid("email") && form.errors.email}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={form.data.password}
                                    className={clsx(
                                        "form-control",
                                        form.invalid("password") &&
                                            "is-invalid",
                                        form.valid("password") && "is-valid"
                                    )}
                                    onChange={(e) =>
                                        form.setData("password", e.target.value)
                                    }
                                    onBlur={() => form.validate("password")}
                                    aria-describedby="passwordValidation"
                                />
                                <div
                                    id="passwordValidation"
                                    class="invalid-feedback"
                                >
                                    {form.invalid("password") &&
                                        form.errors.password}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password_confirmation"
                                    className="form-label"
                                >
                                    Password Confirmation
                                </label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    value={form.data.password_confirmation}
                                    className={clsx(
                                        "form-control",
                                        form.invalid("password_confirmation") &&
                                            "is-invalid",
                                        form.valid("password_confirmation") &&
                                            "is-valid"
                                    )}
                                    onChange={(e) =>
                                        form.setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    onBlur={() =>
                                        form.validate("password_confirmation")
                                    }
                                    aria-describedby="passwordConfirmationValidation"
                                />
                                <div
                                    id="passwordConfirmationValidation"
                                    class="invalid-feedback"
                                >
                                    {form.invalid("password_confirmation") &&
                                        form.errors.password_confirmation}
                                </div>
                            </div>

                            {form.hasErrors && (
                                <div class="alert alert-danger" role="alert">
                                    Please fix the errors before submitting the
                                    form
                                </div>
                            )}

                            <button
                                className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center"
                                type="submit"
                                disabled={form.validating || form.hasErrors}
                            >
                                {form.validating && (
                                    <div
                                        class="spinner-border spinner-border-sm text-light me-2"
                                        role="status"
                                    >
                                        <span class="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                )}
                                {form.validating ? "Validating..." : "Register"}
                            </button>
                        </form>
                    </main>
                </div>
            </div>
            <div className="col-2 border-start border-3 p-4">
                <h3 className="h5 fw-normal">Users :</h3>
                <ul>
                    {users.map((u) => (
                        <li>{u.email}</li>
                    ))}
                </ul>
                <hr />
            </div>
        </div>
    );
}

export default Register;
